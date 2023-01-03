import styled from "styled-components";

export const StyledModal = styled.section`
	width: 100vw;
	height: 100vh;
	padding: 0 var(--gap-5) var(--gap-3) var(--gap-5);

	background-color: var(--overlay-shadow);

	position: fixed;
	inset: 0;
	z-index: 101;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	align-content: flex-end;

	@media screen and (min-width: 768px) {
		padding: 0 var(--gap-1) var(--gap-3) var(--gap-1);
	}

	.animation {
		animation: ${props => !props.isModalVisible && "appear 1s"};
	}
`;

export const StyledModalContent = styled.div`
	width: var(--width-1);
	max-width: calc(var(--width-4) / 3.45);
	min-height: calc(var(--width-4) / 4.16);
	max-height: calc(var(--width-4) / 2.46);

	position: relative;
	align-items: flex-start;
	justify-content: flex-start;

	background-color: var(--grey-0);
	border-radius: var(--radius-2);

	@keyframes appear {
		0% {
			transform: translateY(0%, 0%);
			opacity: 0;
		}
		100% {
			transform: translateY(0%, 1%);
			opacity: 1;
		}
	}

	& > h3 {
		width: var(--width-1);
		padding: var(--gap-4) var(--gap-4);

		background-color: var(--primary);
		border-top-left-radius: var(--radius-2);
		border-top-right-radius: var(--radius-2);
	}

	& > div {
		align-items: center;
		justify-content: center;
	}

	.empty__cart {
		height: calc(var(--width-1) - 43%);
		gap: var(--gap-6);
	}

	.clear__cart {
		padding: var(--gap-5);
		border-top: 1px solid var(--grey-0);
	}

	.total__cart {
		width: calc(var(--width-1) - 4rem);
		height: calc(var(--height-large) + 1rem);

		flex-direction: row;
		justify-content: flex-start;

		background-color: var(--white);
		border-bottom-left-radius: var(--radius-2);
		border-top: 1px solid var(--grey-20);

		button {
			width: calc(var(--height-small) * 2);
			height: var(--width-1);

			border-bottom-left-radius: var(--radius-2);
			background-color: var(--secondary);
			font-size: var(--title-size-3);
			color: var(--white);

			&:hover {
				filter: opacity(0.5);
			}
		}

		div {
			width: calc(var(--width-1) - 4rem);

			flex-direction: row;
			justify-content: center;
			gap: var(--gap-6);
		}
	}
`;
