import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import VideoPlayer from '../AudioPlayer'
import type {
  ReactJkMusicPlayerLocale,
  ReactJkMusicPlayerAudioListProps,
} from 'react-jinke-music-player'
import { DataJson } from '../../../generated-types/gatsby-graphql'
import {
  Container as ContainerComponent,
  Button as ButtonComponent,
} from '../Common'

const Container = styled(ContainerComponent)`
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
      audioLists {
        name
        cover
        singer
        musicSrc
      }
    }
  }
`

const Hero: React.FC = () => {
  const {
    dataJson: { sns, audioLists },
  } = useStaticQuery<{ dataJson: DataJson }>(query)
  const options = {
    locale: 'zh_CN' as ReactJkMusicPlayerLocale,
    defaultVolume: 0.5,
    defaultPosition: { left: 20, bottom: 20 },
    drag: false,
    glassBg: true,
    autoPlay: false,
    toggleMode: true,
    showLyric: false,
    showDestroy: false,
    showDownload: false,
    showThemeSwitch: false,
    audioLists: audioLists as ReactJkMusicPlayerAudioListProps[],
  }

  return (
    <Container>
      <h1>Hello world</h1>
      <Buttons>
        {sns?.map((item, idx) => (
          <Button link={item?.url as string} key={idx}>
            {item?.service}
          </Button>
        ))}
      </Buttons>
      {audioLists && <VideoPlayer options={options} />}
    </Container>
  )
}

export default Hero
