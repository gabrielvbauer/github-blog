import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 0;
  position: relative;

  background: ${(props) => props.theme['base-700']};

  img {
    z-index: 2;

    &:nth-of-type(1) {
      margin-top: 24px;
    }

    &:nth-of-type(2) {
      margin-top: 34px;
    }
  }
`

export const LeftEllipsisEffect = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
`

export const RightEllipsisEffect = styled.img`
  position: absolute;
  top: 0px;
  right: 0;
`
export const BottomRectangleEffect = styled.img`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
`
