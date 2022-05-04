import React, { memo } from 'react'
import {  useDispatch, } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { chanegSelectedSongIdAction, } from './store/actionCreator'
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
  const dispatch = useDispatch()
  dispatch(chanegSelectedSongIdAction(id))
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <LPlayerInfo />
        </PlayerLeft>
        <PlayerRight>
          <LRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default SongPlayer