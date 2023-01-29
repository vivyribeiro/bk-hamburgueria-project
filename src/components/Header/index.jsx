import React, { useState } from "react";

import { CgSearchLoading } from "react-icons/cg";

import StyledHeader from "./style";
import logo from "../../assets/logo.svg";
import { ThemeInput } from "../../styles/form";
import { Container } from "../../styles/global";
import { ThemeButton } from "../../styles/buttons";
import { Toaster } from "../../Toastify/customToaster";
import { ThemeContainerImg } from "../../styles/imgContainer";

const Header = ({ filterProductsSearch }) => {
	const [formData, setFormData] = useState("");

	const onSubmit = e => {
		e.preventDefault();
		if (formData.length) {
			filterProductsSearch(formData);
			setFormData("");
		} else {
			const inputSearch = document.querySelector("input");
			inputSearch.classList.add("empty__input");
			inputSearch.focus();

			Toaster(
				"Por favor, informe o produto ou categoria para pesquisa!",
				<CgSearchLoading size={24} color={"var(--info)"} />,
				"info"
			);

			setTimeout(() => {
				inputSearch.classList.remove("empty__input");
			}, 3000);
		}
	};

	return (
		<StyledHeader>
			<Container>
				<ThemeContainerImg>
					<img src={logo} alt="logo Burger Kenzie" title="logo Burger Kenzie" />
				</ThemeContainerImg>

				<form className="form__search" onSubmit={onSubmit}>
					<ThemeInput
						placeholder="Digitar Pesquisa"
						value={formData}
						onChange={e => setFormData(e.target.value)}
					></ThemeInput>
					<ThemeButton size={"md"}>Pesquisar</ThemeButton>
				</form>
			</Container>
		</StyledHeader>
	);
};

export default Header;
