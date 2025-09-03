import React from 'react'
import { categories } from '../util/cta'
import "../styles/sections/cta.scss"
const Cta = () => {
  return (
    <div className='inner cta-inner'>
      <ul className="cta-list">
        {categories.map((cta) => (

          <li key={cta.id}>
            <a href={cta.href}>

              <div className="img-wrap" style={{ backgroundImage: `url(${cta.img.src})` }}>
                {/* <img src="" alt="" /> */}
              </div>
              <p>
                {cta.name}

              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cta