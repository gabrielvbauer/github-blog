import logoImg from '../../assets/logo.svg'
import sideEffectRightImg from '../../assets/right_effect.svg'
import sideEffectLeftImg from '../../assets/left_effect.svg'
import bottomEffectImg from '../../assets/bottom_effect.svg'
import rightEllipsisEffectImg from '../../assets/right_ellipsis_effect.svg'
import leftEllipsisEffectImg from '../../assets/left_ellipsis_effect.svg'

import {
  HeaderContainer,
  LeftEllipsisEffect,
  RightEllipsisEffect,
  BottomRectangleEffect,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={sideEffectLeftImg} alt="" />
      <img src={logoImg} alt="" />
      <img src={sideEffectRightImg} alt="" />
      <LeftEllipsisEffect src={leftEllipsisEffectImg} alt="" />
      <RightEllipsisEffect src={rightEllipsisEffectImg} alt="" />
      <BottomRectangleEffect src={bottomEffectImg} alt="" />
    </HeaderContainer>
  )
}
