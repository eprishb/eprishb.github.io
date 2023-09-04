import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: #ccdbe5;
    color: #202945;
    font-family: Lato;
		line-height: 1.75em;
    transition: all 0.50s linear;
		margin: 0;
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
