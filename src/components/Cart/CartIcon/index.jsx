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
			onClick={() => setIsModalVisible(true)}
		>
			{isModalVisible ? (
				<VscChromeClose title="Fechar carrinho" />
			) : (
				<FaShoppingCart title="carrinho" />
			)}
		</CartButton>
	);
};

export default CartIcon;
