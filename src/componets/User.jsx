import React from 'react'
import Home from './home'
import Main from './main'
import Sarche from './sarche'

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