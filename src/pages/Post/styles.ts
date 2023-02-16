import styled from 'styled-components'

export const PostContainer = styled.main`
  padding-bottom: 128px;
`

export const PostInfo = styled.div`
  position: relative;
  margin-top: -80px;

  border-radius: 10px;
  padding: 32px 40px;
  background: ${(props) => props.theme['base-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  z-index: 2;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  footer {
    margin-top: 8px;
    display: flex;
    gap: 24px;
    color: ${(props) => props.theme['base-300']};

    div {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${(props) => props.theme['base-400']};
        width: 18px;
        height: 18px;
      }
    }
  }
`

export const PostContent = styled.div`
  padding: 40px 32px;
`
