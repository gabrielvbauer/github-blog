import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchForm'
import { Post } from './components/Post'

import {
  BlogContainer,
  ProfileContainer,
  PostsContainer,
  PostsGrid,
} from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>

      <PostsContainer>
        <header>
          <div>
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>
        </header>

        <SearchInput />

        <PostsGrid>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsGrid>
      </PostsContainer>
    </BlogContainer>
  )
}
