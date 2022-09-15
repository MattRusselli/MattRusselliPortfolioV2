import React from 'react'
import { useSelector } from 'react-redux'
import { selectData } from '../pages/homeSlice'
import styled from 'styled-components'
// Data
import { Blog } from '../data'
// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`

export default function SocialLinks() {
  const { blog } = useSelector(selectData)

  return (
    <StyledSocialLinks>
      <a
        href={'https://github.com/MattRusselli'}
        aria-label="Check out my GitHub profile."
        className="link-icons"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub />
      </a>

      <a
        href={'https://www.linkedin.com/in/matthewrusselli/'}
        aria-label="Connect with me on LinkedIn."
        className="link-icons"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  )
}
