import React from 'react'
import Nav from './Nav'
import Util from './Util'
import TopBanner from './TopBanner'

const Header = () => {
  return (
    <div>
      <TopBanner />
      <header>  
        <div className="inner">
          <Nav />
          <h1 className="tit">TOCOBO</h1>
          <Util />
        </div>
      </header>
    </div>
  )
}

export default Header