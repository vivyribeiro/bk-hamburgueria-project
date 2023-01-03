import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
	border-radius: var(--radius-2);

	${props => {
		switch (props.size) {
			case "lg":
				return css`
					width: var(--width-1);
					height: calc(var(--height-small) * 1.75);

					font-size: var(--text-size-1);
					font-weight: var(--font-weight-2);

					color: var(--grey-50);
					background-color: var(--grey-20);

					&:hover {
						color: var(--grey-20);
						background-color: var(--grey-50);
					}
				`;

			case "md":
				return css`
					width: calc(var(--height-large) * 2.23);
					height: var(--height-medium);

					font-size: var(--text-size-2);
					font-weight: var(--font-weight-3);

					color: var(--white);
					background-color: var(--primary);

					&:hover {
						background-color: var(--primary-50);
					}
				`;

			case "sm":
				return css`
					width: calc(var(--height-large) + 0.25rem);
					height: max-content;

					font-size: var(--text-size-3);
					font-weight: var(--font-weight-2);

					color: var(--grey-30);
					background: transparent;
					border-radius: unset;

					&:hover {
						color: var(--grey-100);
						text-decoration-line: underline;
					}
				`;

			default:
				return css`
					width: calc(var(--height-large) * 2.23);
					height: var(--height-small);

					font-size: var(--text-size-2);
					font-weight: var(--font-weight-3);

					color: var(--white);
					background-color: var(--primary);

					&:hover {
						background-color: var(--primary-50);
					}
				`;
		}
	}}
`;
