import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 416px;
  padding: 32px;
  background: ${(props) => props.theme['base-600']};
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border 0.2s;

  &:hover {
    border-color: ${(props) => props.theme['base-400']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;

    span {
      white-space: nowrap;
    }
  }

  p {
    max-height: 112px;
    margin-top: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`
