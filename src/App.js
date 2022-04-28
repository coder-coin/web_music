import React, { memo } from 'react'
import { Provider } from 'react-redux'
import useMusicRouter from '@/router'
//引入组件
import LAppHeader from 'components/app-header'
import LPlayerBar from '@/pages/player/player-bar'
import LAppFooter from 'components/app-footer'
//引入store进行共享
import store from '@/store'

const App = memo(() => {
  return (
    <Provider store={store}>
      <LAppHeader />
      {useMusicRouter()}
      <LAppFooter />
      <LPlayerBar />
    </Provider>
  )
})

export default App