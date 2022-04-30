import React, { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

const LListContent = memo(() => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    return (
        <div>{id}</div>
    )
})

export default LListContent