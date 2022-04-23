import React, { memo } from 'react'
import LAppHeader from 'components/app-header'
import useMusicRouter from '@/router'
import LAppFooter from 'components/app-footer'
const App = memo(() => {
  return (
    <div>
      <LAppHeader />
      {useMusicRouter()}
      <LAppFooter />
    </div>
  )
})

export default App