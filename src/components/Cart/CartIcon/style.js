import styled from "styled-components";

const StyledCartButton = styled.button`
	width: calc(var(--height-small) * 2);
	height: calc(var(--height-small) * 2);

	color: var(--white);
	background-color: var(--primary);
	border-radius: ${props => (props.isModalVisible ? 0 : "var(--radius-2)")};
	border-bottom-right-radius: var(--radius-2);

	position: fixed;
	right: var(--gap-5);
	bottom: var(--gap-3);
	z-index: 102;

	&:hover {
		background-color: var(--primary-50);
	}

	&::before {
		content: attr(data-cart-counter);
		pointer-events: none;

		position: absolute;
		z-index: 100;
		right: -0.5rem;
		bottom: calc(var(--gap-1) * 1.5);

		min-width: var(--gap-2);
		height: var(--gap-2);

		font-size: var(--text-size-2);
		background-color: var(--secondary);
		border-radius: 50%;

		display: ${props => (props.isModalVisible ? "none" : "inline-flex")};
		align-items: center;
		justify-content: center;
	}

	@media screen and (min-width: 768px) {
		right: var(--gap-1);
	}

	@media screen and (min-width: 1366px) {
		right: var(--gap-2);
	}

	@media screen and (min-width: 1440px) {
		right: var(--gap-1);
	}

	& > svg {
		font-size: var(--title-size-4);
	}
`;
export default StyledCartButton;
