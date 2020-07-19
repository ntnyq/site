import React from 'react'
import styled from 'styled-components'

interface Props {
  link?: string
  className?: string
}

const A = styled.a`
  position: relative;
  display: inline-block;
  transition: 0.5s;
`

const Button: React.FC<Props> = ({ link, className, children }) => (
  <A
    href={link}
    className={className}
    target='_blank'
    rel='noopener'
    role='button'
  >
    {children}
  </A>
)

export default Button
