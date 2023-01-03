import styled from "styled-components";

const StyledUl = styled.ul`
	width: var(--width-1);
	max-width: var(--width-4);
	height: var(--width-1);
	overflow-x: auto;
	padding: 0 var(--gap-6) var(--gap-5) 0;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	gap: var(--gap-5);

	@media screen and (min-width: 768px) {
		overflow: unset;

		flex-wrap: wrap;
		gap: var(--gap-4);
	}

	@media screen and (min-width: 1024px) {
		gap: var(--gap-1);
	}

	@media screen and (min-width: 1440px) {
		padding-right: 0;
	}
`;

export default StyledUl;
