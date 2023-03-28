import React from 'react'
import Home from '../componets/home'
import Main from '../componets/main'
import Sarche from '../componets/sarche'

function User() {
  return (
    <>
      <div className="flex ">
        <Home />
        <Main />
        <Sarche />
      </div>
    </>
  )
}

export default User