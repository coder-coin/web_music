import React, { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import LPlayerInfo from './c-components/player-info'
import LRelevant from './c-components/player-ralevant'
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'


const SongPlayer = memo(() => {
  let [searchParams] = useSearchParams()
  const id = parseInt(searchParams.get('id'))
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <LPlayerInfo id={id} />
        </PlayerLeft>
        <PlayerRight>
          <LRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default SongPlayer