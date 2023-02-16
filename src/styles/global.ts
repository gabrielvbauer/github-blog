import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  body {
    background-color: ${(props) => props.theme['base-800']};
    color: ${(props) => props.theme['base-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 400 1rem Nunito, sans-serif;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme['base-50']}
  }

  h2 {
    font-size: 1.25rem;
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme['base-50']}
  }

  h3 {
    font-size: 1.125rem;
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme['base-100']}
  }

  p {
    font-size: 1rem;
    line-height: 160%;
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-300']}
  }

  a[id="link"] {
    font-size: 0.75rem;
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme['blue-500']};
    border-bottom: 1px solid transparent;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-500']};
    }
  }

  a {
    text-decoration: none;
    color: unset;
  }
`
