import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
const TopBtn = () => {
  const scrollTo = useSmoothScroll()
  return (
    <div>
      {/* icon_top.svg */}
      <button
        onClick={(e) => {
          e.preventDefault()
          scrollTo('Hero')
        }}
        className='top-btn'><img src="/img/icon_top.svg" alt="위로가기 버튼"/></button>
      {/* icon_talk.svg */}
      <a href="#" className="talk-btn">
        TCB
      </a>
      <p>1:1 Talk</p>
    </div>
  )
}

export default TopBtn
