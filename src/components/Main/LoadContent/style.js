import styled from "styled-components";

const StyledLoadContainer = styled.div`
	height: 50vh;

	justify-content: center;
	align-items: center;
	gap: var(--gap-4);

	& > h3 {
		font-size: var(--title-size-4);
		letter-spacing: 5px;
	}

	& > svg {
		font-size: var(--title-size-3);
		color: var(--text-color);
	}

	.loader {
		height: calc(var(--height-large) * 1.25);
		width: calc(var(--height-large) * 1.25);

		border: var(--gap-6) solid var(--grey-0);
		border-radius: 50%;
		border-top-color: var(--primary-50);
		animation: is-rotating 1s infinite;
	}

	@keyframes is-rotating {
		to {
			transform: rotate(1turn);
		}
	}
`;

export default StyledLoadContainer;
