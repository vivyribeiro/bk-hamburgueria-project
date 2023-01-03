import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
/* Colors */
	--primary: #27AE60;
	--primary-50: #93D7AF;
	--secondary: #EB5757;
	--grey-100: #333333; 
	--grey-50: #828282; 
	--grey-30: #BDBDBD;
	--grey-20: #E0E0E0;
	--grey-0: #F5F5F5;
	--white: #FFFFFF;
	--text-color: #333333;
	--body-bg: #FFFFFF;
	--overlay-shadow: #00000040;
	
	/* Toast Colors*/
	
	--error: #E60000;
	--warning: #FFCD07;
	--sucess: #168821;
	--info: #155BCB;

  /* Size Elements */
	--height-large: 3rem;
	--height-medium: 2.5rem;
	--height-small: 2rem;

	--width-1: 100%;
	--width-2: 90%;
	--width-3: 80%;
	--width-4: 75.5rem;
	
	/* Text Sizes */
	--title-size-1: 3rem;
	--title-size-2: 2.38rem;
	--title-size-3: 1.75rem;
	--title-size-4: 1.25rem;
	--title-size-5: 1.15rem;
	--text-size-1: 1rem;
	--text-size-2: 0.88rem;
	--text-size-3: 0.75rem;
	
	/* Text Weight */
	--font-weight-1: 700;
	--font-weight-2: 600;
	--font-weight-3: 500;
	--font-weight-4: 400;

	/* Margins */
	--gap-1: 2rem;
	--gap-2: 1.75rem;
	--gap-3: 1.5rem;
	--gap-4: 1.25rem;
	--gap-5: 1rem;
	--gap-6: 0.5rem;

	/* Border Radius */
	--radius-1: 0.25rem;
	--radius-2: 0.5rem;
}

.dark:root{
/* Colors */
	--primary: #27AE60;
	--primary-50: #93D7AF;
	--secondary: #EB5757;
	--grey-100: #333333;
	--grey-50: #828282;
	--grey-20: #E0E0E0;
	--grey-0: #F5F5F5;
	--white: #FFFFFF;
	--text-color: #FFFFFF;
	--body-bg: #0d0d0d;
	--overlay-shadow: #00000040;
}

*{
  margin: 0;
  padding: 0;

  /* Box Model */
	box-sizing: border-box;
}

body{
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;

  background-color: var(--body-bg);
	font-family: "Inter", sans-serif;
}

header {
	width: var(--width-1);

	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;
}

section, aside, div{
	width: var(--width-1);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
}

ul, ol, li{
  list-style: none;
}

input{
  border: none;
  background: transparent;
  border-radius: var(--radius-2);
} 

button{
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	
  cursor: pointer;

  border: none;
  background: transparent;
}

img{
  max-width: var(--width-1);
	height: var(--width-1);
}


.Toastify__toast{
	flex-direction: row;
	min-height: calc(var(--height-medium) * 2);
}

.Toastify__toast-body{
    flex-direction: row;
    gap: var(--gap-6);

		text-align: center;
}

.Toastify__toast-container{
	width: var(--width-2);
    top: var(--gap-1);
    left: var(--gap-5);
}

@media screen and (min-width: 520px) {
	.Toastify__toast-container{
		width: calc(var(--width-4) / 3.26);
		left: calc(var(--width-1) / 2);
	}
}

/* SCROLL BAR  */
::-webkit-scrollbar {
	width: var(--radius-1);
	height: var(--radius-1);
}

::-webkit-scrollbar-thumb {
	background-color: var(--primary-50);
	border-radius: var(--radius-1);
}

::-webkit-scrollbar-track {
	background-color: var(--grey-0);
	border-radius: var(--radius-1);
}

.bgDark::-webkit-scrollbar-track {
	background-color: var(--grey-100);
	border-radius: var(--radius-1);
}


`;

export const Container = styled.div`
	max-width: var(--width-4);
	width: var(--width-1);
	margin: 0 auto;
	padding: var(--gap-3) var(--gap-5);

	@media screen and (min-width: 540px) {
		padding: var(--gap-5) var(--gap-1);
	}
`;
