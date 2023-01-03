import styled, { css } from "styled-components";

export const ThemeContainerImg = styled.figure`
	border-radius: var(--radius-2);

	display: inline-flex;
	justify-content: center;
	align-items: center;

	${props => {
		switch (props.size) {
			case "lg":
				return css`
					width: var(--width-1);
					max-width: var(--width-1);
					height: calc(var(--height-medium) * 4);
					background-color: var(--grey-0);
				`;

			case "md":
				return css`
					width: var(--width-1);
					max-width: calc(var(--height-medium) * 2);
					height: calc(var(--height-medium) * 2);
					background-color: var(--grey-20);
				`;

			default:
				return false;
		}
	}}
`;
