import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/global'

const Container = styled.div`
  position: relative;
`

const App: React.FC = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Container>
      <main>{children}</main>
    </Container>
  </React.Fragment>
)

export default App
