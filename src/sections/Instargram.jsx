import React from 'react'
import instar from "../util/instar"
import "../styles/sections/Instargram.scss"

const Instargram = () => {
  // 딜레이 계산 함수 (CTA에서 쓴 거 그대로)
  const stagger = (base, idx, step = 100) => base + idx * step

  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">Instargram</h2>
        <p className="txt-4">@tocobo_official</p>
      </div>
      <ul className="instar-lst">
        {instar.map((i, idx) => (
          <li key={i.id}
              data-aos="fade-up"
              data-aos-delay={stagger(100, idx, 100)}>
            <a
              style={{ backgroundImage: `url(${i.image})` }}
              href={i.link}
              aria-label={i.alt}  // a태그 alt 대신 aria-label 사용 👍
            >
              {/* 접근성 위해 텍스트는 숨겨도 됨 */}
              <span className="sr-only">{i.alt}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram
