import styled from "styled-components";

const StyledHeader = styled.header`
	background-color: var(--grey-0);

	& > div {
		align-items: center;
		justify-content: space-between;
		gap: var(--gap-6);
	}

	.form__search {
		position: relative;

		background-color: var(--white);
		border-radius: var(--radius-2);

		.empty__input:focus {
			border-color: var(--error);
		}

		button {
			position: absolute;
			top: calc(var(--gap-3) / 2);
			right: var(--gap-6);
		}
	}

	@media screen and (min-width: 540px) {
		& > div {
			flex-direction: row;
			padding-left: calc(var(--gap-1) + 0.5rem);
		}

		.form__search > button {
			top: var(--gap-6);
		}
	}
`;

export default StyledHeader;
