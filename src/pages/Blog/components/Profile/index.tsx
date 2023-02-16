import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, InfoContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://github.com/gabrielvbauer.png"
        alt="Gabriel Bauer's Photo"
      />

      <InfoContainer>
        <header>
          <h1>Gabriel Bauer</h1>
          <a
            href="https://github.com/gabrielvbauer"
            target="_blank"
            rel="noreferrer"
            id="link"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>gabrielvbauer</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>3tentos</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>3 seguidores</p>
          </div>
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
