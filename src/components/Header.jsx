import React from 'react'
import Nav from './Nav'
import Util from './Util'

import { headerData } from '../util/header'
import "../styles/components/header.scss"
const Header = () => {

  const headerLogo = headerData.logo

  return (
    <div>


      <header>
        <div className="inner">
          <Nav />
          <h1 className="tit">
            <a href={headerLogo.href}>
              <img src={headerLogo.src} alt={headerLogo.alt} />
            </a>
          </h1>
          <Util />
        </div>

      </header>
    </div>
  )
}

export default Header