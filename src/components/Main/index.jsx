import React from "react";

import StyledMain from "./style";
import LoadContent from "./LoadContent";
import CardList from "../CardList";
import { Container } from "../../styles/global";

const Main = ({ loading, productList, addCart }) => {
	return (
		<StyledMain>
			{loading ? (
				<LoadContent />
			) : (
				<Container>
					<CardList productList={productList} addCart={addCart} />
				</Container>
			)}
		</StyledMain>
	);
};

export default Main;
