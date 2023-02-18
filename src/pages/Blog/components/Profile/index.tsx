import { useState, useEffect } from 'react'
import { api } from '../../../../lib/axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { InfoContainer, ProfileContainer } from './styles'

interface UserProps {
  id: number
  username: string
  name: string
  avatar: string
  company: string
  bio: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function loadUserData() {
    const URL = '/users/' + import.meta.env.VITE_GITHUB_USER

    const response = await api.get(URL)

    const { id, login, name, avatar_url, company, bio, followers } =
      response.data

    setUser({
      id,
      username: login,
      name,
      avatar: avatar_url,
      company,
      bio,
      followers,
    })
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <ProfileContainer>
      <img src={user.avatar} alt={`${user.name}'s avatar photo`} />

      <InfoContainer>
        <header>
          <h1>{user.name}</h1>
          <a
            href={`https://github.com/${import.meta.env.VITE_GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            id="link"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>{user.bio}</p>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <p>{user.username}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <p>{user.company}</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>{user.followers} seguidores</p>
          </div>
        </footer>
      </InfoContainer>
    </ProfileContainer>
  )
}
