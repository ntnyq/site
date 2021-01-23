import React from 'react'
import loadable from '@loadable/component'
import 'react-jinke-music-player/assets/index.css'
import type { ReactJkMusicPlayerProps } from 'react-jinke-music-player'

const ReactJkMusicPlayer = loadable(() => import('react-jinke-music-player'))

interface Props {
  options: ReactJkMusicPlayerProps
}

const VideoPlayer: React.FC<Props> = ({ children, options }) => (
  <ReactJkMusicPlayer {...options}>{children}</ReactJkMusicPlayer>
)

export default VideoPlayer
