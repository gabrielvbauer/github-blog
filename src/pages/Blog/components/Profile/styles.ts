import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  border-radius: 10px;
  padding: 32px 40px;
  background: ${(props) => props.theme['base-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const InfoContainer = styled.header`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  footer {
    display: flex;
    gap: 24px;
    margin-top: 24px;

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
