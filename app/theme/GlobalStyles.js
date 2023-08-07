import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: #202945;
    color: #ccdbe5;
    font-family: Lato;
    transition: all 0.50s linear;
  }

	button {
		width: fit-content;
		height: fit-content;
		background: none;
    border-color: unset;
    border: unset;
	}

	button:focus {
		outline: unset;
	}

  a {
    color: #bf4953;
    cursor: pointer;
  }
`
