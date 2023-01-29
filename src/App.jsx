/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

import { MdNoFood } from "react-icons/md";
import { VscRunErrors } from "react-icons/vsc";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

import { api } from "./services/api";
import Main from "./components/Main";
import Header from "./components/Header";
import CartIcon from "./components/Cart/CartIcon";
import { Toaster } from "./Toastify/customToaster";
import CartModal from "./components/Cart/CartModal/CartModal";
import { ToastConfirm } from "./Toastify/ToastConfirm/ToastConfirm";

const App = () => {
	const [cartList, setCartList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [productList, setProductList] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);

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
					Toaster(
						"Ops! Algo deu errado, tente novamente mais tarde.",
						<VscRunErrors size={24} color={"var(--error)"} />,
						"error"
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
			  Toaster(
					"Foi adicionado +1 unidade desse produto!",
					<FaCartPlus size={24} color={"var(--primary)"} />,
					"success"
			  ))
			: (setCartList([...cartList, { ...currentSale, quantity: 1 }]),
			  Toaster(
					"O produto foi adicionado com sucesso!",
					<FaCartPlus size={24} color={"var(--primary)"} />,
					"success"
			  ));
	};

	useEffect(() => {
		if (cartList.length) {
			localStorage.setItem("@SHOPPING_LIST", JSON.stringify(cartList));
		}
	}, [cartList]);

	useEffect(() => {
		const localStorageList = localStorage.getItem("@SHOPPING_LIST");
		if (localStorageList) {
			setCartList(JSON.parse(localStorageList));
		}
	}, []);

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
			  Toaster(
					"Produto não encontrado, tente novamente!",
					<MdNoFood size={24} color={"var(--warning)"} />,
					"warning"
			  ));
	};

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
				  Toaster(
						"Foi removido 1 unidade desse produto!",
						<FaShoppingCart size={24} color={"var(--sucess)"} />,
						"success"
				  ))
				: (setCartList(newCartListWithRemoved),
				  Toaster(
						"Produto removido com sucesso!",
						<FaShoppingCart size={24} color={"var(--sucess)"} />,
						"success"
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

			Toaster(
				"O carrinho foi limpo com sucesso!",
				<FaShoppingCart size={24} color={"var(--sucess)"} />,
				"success"
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
