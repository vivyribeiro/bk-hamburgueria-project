import React from "react";

import { IoFastFoodSharp } from "react-icons/io5";

import StyledLoadContainer from "./style";
import { ThemeTitle } from "../../../styles/typography";

const LoadContent = () => {
	return (
		<StyledLoadContainer>
			<ThemeTitle tag={"h3"} color={"--text-color"}>
				Carregando...
				<IoFastFoodSharp />
			</ThemeTitle>
			<div className="loader"></div>
		</StyledLoadContainer>
	);
};

export default LoadContent;
