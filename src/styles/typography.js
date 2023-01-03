import styled, { css } from "styled-components";
import BaseTitle from "./components/BaseTitle";

export const ThemeLabel = styled.span`
	color: var(${props => props.color});

	${props => {
		switch (props.type) {
			case "category":
				return css`
					font-weight: var(--font-weight-4);
					font-size: var(--text-size-3);
				`;
			case "price":
				return css`
					font-weight: var(--font-weight-2);
					font-size: var(--text-size-2);
				`;

			default:
				return css`
					font-weight: var(--font-weight-4);
					font-size: var(--text-size-2);
				`;
		}
	}}
`;

export const ThemeTitle = styled(BaseTitle)`
	font-weight: var(--font-weight-1);
	font-size: var(--title-size-5);

	color: var(${props => props.color});
`;
