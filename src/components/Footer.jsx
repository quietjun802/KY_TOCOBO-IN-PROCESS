import React, { useEffect, useState, useRef } from 'react';
import { logoData, companyData, customerCenterData, footerMenus, socialLinks, footerLegal } from "../util/footer";

import "../styles/components/footer.scss"

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false)
  const hiddenContentRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1111)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  useEffect(() => {
    const el = hiddenContentRef.current

    if (isOpen) {
      el.style.height = `${el.scrollHeight}px`
      const onTranstitionEnd = () => {
        el.style.height = 'auto'
        el.removeEventListener('transittionend', onTranstitionEnd)
      }
      el.addEventListener('transitionEnd', onTranstitionEnd)
    }else{
      el.style.height = `${el.scrollHeight}px`
      void el.offsetHeight
      el.style.height='0px'      
    }

  }, [isOpen])

  return (
    <footer className="footer">
      <div className="inner foot-inner">
        <div className="left">
          <h3>
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>

          <ul className="foot-lst-1">
            {companyData.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="footer-legal">
            <p>{footerLegal.copyright}</p>
            <div className="legal-links">
              {footerLegal.links.map((item, i) => (
                <a key={i} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu, i) => (
              <div key={i}>
                <h4>{menu.title}</h4>
                <ul>
                  {menu.items.map((item, j) => (
                    <li key={j}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* 오른쪽 영역(비워둠 / SNS 등 넣을 자리) */}
        <div className="right">

          {/* 고객센터 */}
          <div 
          onClick={()=>setIsOpen(prevStatus =>!prevStatus)}
          className={`{isOpen? "open":""} cus-wrap`}>
            <h4>
              {customerCenterData.title}
              <span className="m-plus"></span>
            </h4>
            <div className="hidden" ref={hiddenContentRef}>

              <p className='cs-box'>
                <a href={customerCenterData.tel.href}>
                  {customerCenterData.tel.value}
                </a>
              </p>
              <p>{customerCenterData.hours}</p>
              <p>{customerCenterData.notice}</p>
              <a className='talk-btn' href={customerCenterData.talk.href}>
                {customerCenterData.talk.label}
              </a>
            </div>
          </div>

          <div className="footer-legal">

            <div className="legal-links">
              {footerLegal.links.map((item, i) => (
                <a key={i} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <p>{footerLegal.copyright}</p>
          </div>

          <ul className="sns-links">
            {socialLinks.map((sns) => (
              <li key={sns.id}>
                <a href={sns.href}
                  target="_blank" rel="noreferrer noopener"
                  aria-label={sns.label}
                  title={sns.label}>
                  {React.createElement(sns.icon, { size: 22, "aria-hidden": true })}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;