import React, { FC } from 'react'
interface props {
    featchTours: () => Promise<void>
}

const Reload:FC<props>= ({featchTours}) => {
  return (
    <div>
        <h1>No Tours Left</h1>
        <button className='btn' onClick={featchTours}>Refresh</button>
    </div>
  )
}

export default Reload