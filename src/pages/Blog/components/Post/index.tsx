import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostType } from '../..'
import { PostContainer } from './styles'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const createdDateRelativeToNow = formatDistanceToNow(post.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const resume = (
    <ReactMarkdown includeElementIndex>{post.content}</ReactMarkdown>
  )

  return (
    <NavLink to={`/post/${post.number}`} title={post.title}>
      <PostContainer>
        <header>
          <h2>{post.title}</h2>
          <span>
            <time>{createdDateRelativeToNow}</time>
          </span>
        </header>

        <p>{resume}</p>
      </PostContainer>
    </NavLink>
  )
}
