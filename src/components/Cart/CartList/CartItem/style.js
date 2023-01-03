import styled from "styled-components";

const StyledLiCart = styled.li`
	width: var(--width-1);
	padding: var(--gap-5);

	display: flex;
	flex-direction: row;

	& > div {
		width: calc(var(--height-medium) * 5);
		padding: var(--gap-6) var(--gap-5);

		direction: ltr;
		gap: var(--gap-6);

		position: relative;

		h2 {
			width: var(--width-1);
			max-width: var(--width-1);
			overflow: hidden;

			text-overflow: ellipsis;
			white-space: nowrap;
		}

		span > strong {
			position: absolute;
			left: calc(var(--gap-1) * 3);
			width: max-content;
			font-size: var(--text-size-3);
		}

		button {
			position: absolute;
			inset: calc(var(--gap-2) / 2) 0 0 calc(var(--gap-1) * 6);
		}

		@media screen and (max-width: 375px) {
			width: calc(var(--width-1) - 5rem);
			padding-right: 0;

			button {
				inset: calc(var(--gap-3) * 2.5) 0 0 var(--gap-5);
			}
		}
	}
`;

export default StyledLiCart;
