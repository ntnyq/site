import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 70px 50px;
  min-height: calc(100vh - 70px * 2);
`

const Container: React.FC<Props> = ({ className, children }) => (
  <Section className={className}>{children}</Section>
)

export default Container
