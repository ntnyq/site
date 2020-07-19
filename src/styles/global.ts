import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: Stratum, "Helvetica Neue For Number", "Hiragino Kaku Gothic ProN", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 62.5%;
  }

  h1 {
    font-size: 3.6rem;
    margin: 32px 0;
  }

  h2 {
    font-size: 3.2rem;
    margin: 20px 0;
  }

  h3 {
    font-size: 2.4rem;
    margin: 16px 0;
  }

  h4 {
    font-size: 2.0rem;
    margin: 12px 0;
  }

  p, a {
    font-size: 2.0rem;
    font-weight: 100;
  }

  p {
    margin: 12px 0;
  }
  
  a {
    text-decoration: none;
  }
`
