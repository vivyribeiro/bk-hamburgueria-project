/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */

import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { api } from "./services/api";
import { ToastContainer } from "react-toastify";

import CartIcon from "./components/Cart/CartIcon";
import CartModal from "./components/Cart/CartModal/CartModal";
import Header from "./components/Header";
import Main from "./components/Main";
import { VscRunErrors } from "react-icons/vsc";
import { MdNoFood } from "react-icons/md";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import {
	errorToaster,
	successToaster,
	warningToaster
} from "./Toastify/toastifyFunctions";
import { ToastConfirm } from "./Toastify/ToastConfirm/ToastConfirm";

const App = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [productList, setProductList] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [cartList, setCartList] = useState([]);

	// Get products from api
	useEffect(() => {
		const getProductList = async () => {
			try {
				setLoading(true);

				const response = await api.get("products");
				setProductList(response.data);
				setFilteredProducts(response.data);
			} catch (error) {
				console.log(error.message);
				setTimeout(() => {
					errorToaster(
						"Ops! Algo deu errado, tente novamente mais tarde.",
						<VscRunErrors size={24} color={"var(--error)"} />
					);
				}, 2600);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			}
		};
		getProductList();
	}, []);

	// Verify existing product and adding or not to cart
	const addCart = id => {
		const currentSale = productList.find(product => product.id === id);
		const newCartList = cartList.map(product => {
			if (product.id === id) {
				const countQuantity = product.quantity + 1;

				return { ...product, quantity: countQuantity };
			} else {
				return product;
			}
		});

		cartList.some(product => product.id === id)
			? (setCartList(newCartList),
			  successToaster(
					"Foi adicionado +1 unidade desse produto!",
					<FaCartPlus size={24} color={"var(--primary)"} />
			  ))
			: (setCartList([...cartList, { ...currentSale, quantity: 1 }]),
			  successToaster(
					"O produto foi adicionado com sucesso!",
					<FaCartPlus size={24} color={"var(--primary)"} />
			  ));
	};

	// Adding Shopping list to localStorage and update state of cart total
	useEffect(() => {
		if (cartList.length) {
			localStorage.setItem("@SHOPPING_LIST", JSON.stringify(cartList));
		}
	}, [cartList]);

	// Getting Shopping list from localStorage
	useEffect(() => {
		const localStorageList = localStorage.getItem("@SHOPPING_LIST");
		if (localStorageList) {
			setCartList(JSON.parse(localStorageList));
		}
	}, []);

	//Filtered products
	const filterProductsSearch = formData => {
		const newProductList = productList.filter(product => {
			const productNormalize = product.name
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, ""),
				categoryNormalize = product.category
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, ""),
				valueSearchNormalize = formData
					.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");

			if (
				productNormalize.includes(valueSearchNormalize) ||
				categoryNormalize.includes(valueSearchNormalize)
			) {
				return product;
			}
		});

		newProductList.length
			? setFilteredProducts(newProductList)
			: (setFilteredProducts(productList),
			  warningToaster(
					"Produto não encontrado, tente novamente!",
					<MdNoFood size={24} color={"var(--warning)"} />
			  ));
	};

	//Removing product on cart
	const removeProduct = selectedProduct => {
		const newCartListWithRemoved = cartList.filter(
			product => product !== selectedProduct
		);

		const newCartListWithSub = cartList.map(product => {
			if (product !== selectedProduct) {
				return product;
			} else if (product.id === selectedProduct.id && product.quantity > 1) {
				const countQuantity = product.quantity - 1;

				return { ...product, quantity: countQuantity };
			}
		});

		const confirmFn = () => {
			selectedProduct.quantity > 1
				? (setCartList(newCartListWithSub),
				  successToaster(
						"Foi removido 1 unidade desse produto!",
						<FaShoppingCart size={24} color={"var(--sucess)"} />
				  ))
				: (setCartList(newCartListWithRemoved),
				  successToaster(
						"Produto removido com sucesso!",
						<FaShoppingCart size={24} color={"var(--sucess)"} />
				  ));
		};

		ToastConfirm(confirmFn, "Deseja excluir mesmo este produto?");

		if (cartList.length === 1) {
			localStorage.removeItem("@SHOPPING_LIST");
		}
	};

	const clearCart = () => {
		const confirmFn = () => {
			setCartList([]);
			localStorage.removeItem("@SHOPPING_LIST");

			successToaster(
				"O carrinho foi limpo com sucesso!",
				<FaShoppingCart size={24} color={"var(--sucess)"} />
			);
		};

		ToastConfirm(confirmFn, "Deseja mesmo limpar seu carrinho?");
	};

	return (
		<>
			<GlobalStyle />
			<ToastContainer />
			<Header filterProductsSearch={filterProductsSearch} />

			<Main
				loading={loading}
				productList={filteredProducts}
				addCart={addCart}
			/>

			<CartModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				cartList={cartList}
				removeProduct={removeProduct}
				clearCart={clearCart}
			/>
			<CartIcon
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				cartList={cartList}
			/>
		</>
	);
};

export default App;
