import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { PostContainer, PostInfo, PostContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <header>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>

          <a href="#">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>gabrielvbauer</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>Há 1 dia</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>3 comentários</p>
          </div>
        </footer>
      </PostInfo>

      <PostContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        aspernatur vero alias assumenda cum voluptates voluptas facere quibusdam
        quis commodi. Commodi nesciunt quo enim modi fugit ullam est voluptates
        laboriosam!
      </PostContent>
    </PostContainer>
  )
}
