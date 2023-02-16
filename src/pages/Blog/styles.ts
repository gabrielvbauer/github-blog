import styled from 'styled-components'

export const BlogContainer = styled.main`
  padding-bottom: 234px;
`

export const ProfileContainer = styled.section`
  position: relative;
  margin-top: -88px;
  z-index: 2;
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
