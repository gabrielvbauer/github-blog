import { useState, useEffect, KeyboardEvent } from 'react'
import { api } from '../../lib/axios'

import { Profile } from './components/Profile'
import { Post } from './components/Post'

import {
  BlogContainer,
  ProfileContainer,
  PostsContainer,
  PostsGrid,
  Input,
} from './styles'

interface PostTypeResponse {
  id: number
  number: number
  title: string
  created_at: string
  body: string
}

interface PostType {
  id: number
  number: number
  title: string
  createdAt: Date
  content: string
}

export function Blog() {
  const [posts, setPosts] = useState<PostType[]>([])
  const [query, setQuery] = useState('')

  async function loadPosts() {
    const URL =
      '/search/issues?q=' +
      query +
      'repo:' +
      import.meta.env.VITE_GITHUB_USER +
      '/' +
      import.meta.env.VITE_GITHUB_REPO

    const response = await api.get(URL)

    const fetchedPosts = response.data.items.map((post: PostTypeResponse) => {
      return {
        id: post.id,
        number: post.number,
        title: post.title,
        createdAt: new Date(post.created_at),
        content: post.body,
      }
    })

    setPosts(fetchedPosts)
  }

  function handleSearch(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      loadPosts()
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <BlogContainer>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>

      <PostsContainer>
        <header>
          <div>
            <h3>Publicações</h3>
            <span>
              {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
            </span>
          </div>
        </header>

        <Input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => !query && loadPosts()}
          onKeyDown={(e) => handleSearch(e)}
          value={query}
        />

        <PostsGrid>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </PostsGrid>
      </PostsContainer>
    </BlogContainer>
  )
}
