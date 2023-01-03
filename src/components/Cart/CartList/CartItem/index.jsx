import React from "react";

import StyledLiCart from "./style";
import { ThemeButton } from "../../../../styles/buttons";
import { ThemeContainerImg } from "../../../../styles/imgContainer";
import { ThemeLabel, ThemeTitle } from "../../../../styles/typography";

const CartItem = ({ product, removeProduct }) => {
	const { name, category, img, quantity } = product;

	return (
		<StyledLiCart>
			<ThemeContainerImg size="md">
				<img src={img} alt={img} title={img} />
			</ThemeContainerImg>
			<div>
				<ThemeTitle color={"--grey-100"} tag={"h2"}>
					{name}
				</ThemeTitle>
				<ThemeLabel color={"--grey-50"} type={"category"}>
					{category}
					<strong>({quantity}x)</strong>
				</ThemeLabel>
				<ThemeButton size="sm" onClick={() => removeProduct(product)}>
					Remover
				</ThemeButton>
			</div>
		</StyledLiCart>
	);
};

export default CartItem;
