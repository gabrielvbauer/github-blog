import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px 16px;
  border-radius: 6px;
  margin-top: 12px;

  background: ${(props) => props.theme['base-900']};
  border: 1px solid ${(props) => props.theme['base-500']};

  &::placeholder {
    color: ${(props) => props.theme['base-400']};
  }

  &:not(:placeholder-shown) {
    border-color: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme['base-200']};
  }
`
