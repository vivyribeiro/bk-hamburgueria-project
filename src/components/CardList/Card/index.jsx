import React from "react";

import StyledLi from "./style";
import { Container } from "../../../styles/global";
import { ThemeButton } from "../../../styles/buttons";
import { ThemeContainerImg } from "../../../styles/imgContainer";
import { ThemeLabel, ThemeTitle } from "../../../styles/typography";

const Card = ({ product, addCart }) => {
	const { id, name, category, price, img } = product;

	return (
		<StyledLi>
			<ThemeContainerImg size={"lg"}>
				<img
					src={img}
					alt={name}
					title={name}
					className={name === "Milkshake Ovomaltine" ? "adjust__bottom" : ""}
				/>
			</ThemeContainerImg>
			<Container>
				<ThemeTitle color={"--grey-100"} tag={"h2"}>
					{name}
				</ThemeTitle>
				<ThemeLabel color={"--grey-50"} type={"category"}>
					{category}
				</ThemeLabel>
				<ThemeLabel color={"--primary"} type={"price"}>
					{price.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL"
					})}
				</ThemeLabel>
				<ThemeButton onClick={() => addCart(id)}>Adicionar</ThemeButton>
			</Container>
		</StyledLi>
	);
};

export default Card;
