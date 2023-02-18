import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { PostContainer, PostInfo, PostContent } from './styles'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'

interface PostTypeResponse {
  id: number
  number: number
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

interface PostType {
  id: number
  number: number
  url: string
  title: string
  author: string
  commentsAmount: number
  createdAt: Date
  content: string
}

export function Post() {
  const [post, setPost] = useState<PostType>({} as PostType)
  const { postNumber } = useParams()

  const navigate = useNavigate()

  async function loadPost() {
    const URL =
      '/repos/' +
      import.meta.env.VITE_GITHUB_USER +
      '/' +
      import.meta.env.VITE_GITHUB_REPO +
      '/issues/' +
      postNumber

    const response = await api.get(URL)

    const data: PostTypeResponse = response.data

    setPost({
      id: data.id,
      number: data.number,
      url: data.html_url,
      title: data.title,
      author: data.user.login,
      commentsAmount: data.comments,
      createdAt: new Date(data.created_at),
      content: data.body,
    })
  }

  useEffect(() => {
    loadPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo>
        <header>
          <a id="link" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>

          <a href={post.url} id="link">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <h1>{post.title}</h1>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{post.author}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <p>
              {post.createdAt &&
                formatDistanceToNow(post.createdAt, {
                  locale: ptBR,
                  addSuffix: true,
                })}
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>
              {post.commentsAmount}{' '}
              {post.commentsAmount > 1 ? 'comentários' : 'comentário'}
            </p>
          </div>
        </footer>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
