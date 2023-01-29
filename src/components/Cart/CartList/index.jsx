import React from "react";

import CartItem from "./CartItem";
import StyledUlCart from "./style";

const CartList = ({ cartList, removeProduct }) => {
	return (
		<StyledUlCart>
			{cartList.map(product => (
				<CartItem
					key={product.id}
					product={product}
					removeProduct={removeProduct}
				/>
			))}
		</StyledUlCart>
	);
};

export default CartList;
