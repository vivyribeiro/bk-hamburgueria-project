import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

import CartButton from "./style";

const CartIcon = ({ isModalVisible, setIsModalVisible, cartList }) => {
	const cartTotal = cartList.reduce((acc, { quantity }) => acc + quantity, 0);

	return (
		<CartButton
			isModalVisible={isModalVisible}
			data-cart-counter={cartTotal}
			onClick={() => setIsModalVisible(!isModalVisible)}
		>
			{isModalVisible ? (
				<VscChromeClose
					title="Fechar carrinho"
					style={{ pointerEvents: "none" }}
				/>
			) : (
				<FaShoppingCart title="carrinho" style={{ pointerEvents: "none" }} />
			)}
		</CartButton>
	);
};

export default CartIcon;
