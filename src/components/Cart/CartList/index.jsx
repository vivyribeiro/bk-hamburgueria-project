import React from "react";

import StyledUlCart from "./style";
import CartItem from "./CartItem";

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
