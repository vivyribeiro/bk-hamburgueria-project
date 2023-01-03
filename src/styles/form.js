import styled from "styled-components";

export const ThemeInput = styled.input`
	width: var(--width-1);
	height: calc(var(--height-small) * 2);
	padding: 0 calc(var(--height-large) * 2.5) 0 var(--gap-6);

	font-size: var(--text-size-1);

	background-color: var(--white);
	border: 2px solid var(--grey-20);

	&:focus,
	&:active {
		outline: none;
		border-color: var(--black);
	}

	&::placeholder {
		font-weight: 400;
		font-size: var(--text-size-1);
		color: var(--grey-20);
	}

	@media (min-width: 540px) {
		width: calc(var(--width-4) / 4.25);
		height: calc(var(--height-small) * 1.75);
		padding: 0 calc(var(--height-large) * 2.5) 0 var(--gap-6);
	}

	@media (min-width: 768px) {
		width: calc(var(--width-4) / 3.75);
	}
`;
