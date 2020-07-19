import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { App, Head, Hero } from '../components'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Index: React.FC = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(query)

  return (
    <React.Fragment>
      <Head title={title} description={description} />
      <App>
        <Hero />
      </App>
    </React.Fragment>
  )
}

export default Index
