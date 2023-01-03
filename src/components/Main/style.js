import styled from "styled-components";

const StyledMain = styled.main`
	width: var(--width-1);
	margin-bottom: var(--gap-1);
	padding-top: calc(var(--gap-1) * 5);

	& > div {
		padding-right: 0;
		padding-left: var(--gap-6);
	}

	@media screen and (min-width: 540px) {
		padding-top: calc(var(--gap-1) * 3);

		& > div {
			padding: var(--gap-5) var(--gap-1);
		}
	}
`;

export default StyledMain;
