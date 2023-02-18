import styled from 'styled-components'

export const BlogContainer = styled.main`
  padding-bottom: 234px;
`

export const ProfileContainer = styled.section`
  position: relative;
  margin-top: -88px;
  z-index: 2;
`
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

export const PostsContainer = styled.section`
  margin-top: 72px;

  header {
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const PostsGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 32px;
`
