import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Button as ButtonComponent } from '../Common'
import { DataJson } from '../../../generated-types/gatsby-graphql'

const Box = styled(Container)`
  flex-direction: column;
`

const Buttons = styled.div`
  position: relative;
  display: flex;
  margin: 16px 0;

  & > * {
    flex: auto;
    margin: 0 10px;
  }
`

const Button = styled(ButtonComponent)`
  font-size: 1.8rem;
`

const query = graphql`
  query {
    dataJson {
      sns {
        service
        url
      }
    }
  }
`

const Hero: React.FC = () => {
  const {
    dataJson: { sns },
  } = useStaticQuery<{ dataJson: DataJson }>(query)
  return (
    <Box>
      <h1>Hello world</h1>
      <Buttons>
        {sns?.map((item, idx) => (
          <Button link={item?.url as string} key={idx}>
            {item?.service}
          </Button>
        ))}
      </Buttons>
    </Box>
  )
}

export default Hero
