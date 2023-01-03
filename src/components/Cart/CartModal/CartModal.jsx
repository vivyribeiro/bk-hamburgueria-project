/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

import { StyledModalContent, StyledModal } from "./style";
import { ThemeLabel, ThemeTitle } from "../../../styles/typography";
import CartList from "../CartList";

const CartModal = ({
	isModalVisible,
	setIsModalVisible,
	cartList,
	clearCart,
	removeProduct
}) => {
	const totalPurchase = cartList.reduce(
		(acc, { price, quantity }) => (acc += price * quantity),
		0
	);

	const modalCartRef = useRef();

	useEffect(() => {
		const handleOuterclick = ev => {
			if (modalCartRef.current) {
				!modalCartRef.current.contains(ev.target) && setIsModalVisible(false);
			}
		};

		document.addEventListener("mousedown", handleOuterclick);

		return () => {
			document.removeEventListener("mousedown", handleOuterclick);
		};
	}, []);

	return (
		isModalVisible && (
			<StyledModal>
				<StyledModalContent
					ref={modalCartRef}
					className="animation"
					isModalVisible={isModalVisible}
				>
					<ThemeTitle color="--white" tag="h3">
						Carrinho de compras
					</ThemeTitle>
					{cartList.length ? (
						<>
							<CartList removeProduct={removeProduct} cartList={cartList} />

							<div className="total__cart">
								<button title="Limpar carrinho" onClick={clearCart}>
									<AiOutlineClear />
								</button>
								<div>
									<ThemeLabel color="--grey-100" type="price">
										Total:
									</ThemeLabel>
									<ThemeLabel color="--grey-50" type="price">
										{`R$ ${totalPurchase.toFixed(2).replace(".", ",")}`}
									</ThemeLabel>
								</div>
							</div>
						</>
					) : (
						<div className="empty__cart">
							<ThemeTitle color="--grey-100" tag="h3">
								Sua sacola está vazia
							</ThemeTitle>
							<ThemeLabel color="--grey-50">
								Adicione itens <FaCartArrowDown />
							</ThemeLabel>
						</div>
					)}
				</StyledModalContent>
			</StyledModal>
		)
	);
};

export default CartModal;
