import styled from "styled-components";

const StyledLi = styled.li`
	min-width: calc(var(--width-4) / 4.55);
	max-width: calc(var(--width-4) / 4.55);
	height: calc(var(--width-4) / 3.5);

	border: 2px solid var(--grey-20);
	border-radius: var(--radius-2);

	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;

	& > div {
		gap: var(--gap-4);
		padding: var(--gap-5);
	}

	img {
		object-position: bottom;
		object-fit: none;
	}

	.adjust__bottom {
		padding-bottom: var(--gap-3);
	}
`;
export default StyledLi;
