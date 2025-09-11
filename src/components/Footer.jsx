import React from 'react';
import { logoData, companyData, customerCenterData, footerMenus, socialLinks, footerLegal } from "../util/footer";

import "../styles/components/footer.scss"

const Footer = () => {
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
          <div>
            <h4>{customerCenterData.title}</h4>
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