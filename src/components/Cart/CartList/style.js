import styled from "styled-components";

const StyledUlCart = styled.ul`
	width: var(--width-1);
	max-width: calc(var(--width-4) / 3.18);
	height: calc(var(--width-4) / 4);
	overflow-y: auto;

	flex-direction: column;
	align-items: flex-start;
	gap: var(--gap-4);
	justify-content: flex-start;
`;

export default StyledUlCart;
