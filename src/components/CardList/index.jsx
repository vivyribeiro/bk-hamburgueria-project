import React from "react";
import Card from "./Card";
import StyledUl from "./style";

const CardList = ({ productList, addCart }) => {
	return (
		<StyledUl>
			{productList.map(product => (
				<Card key={product.id} product={product} addCart={addCart} />
			))}
		</StyledUl>
	);
};

export default CardList;
