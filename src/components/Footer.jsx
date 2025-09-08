import React from 'react';
import { logoData, companyData, customerCenterData, footerMenus } from "../util/footer";
import Nav from './Nav';
import "../styles/components/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner foot-inner">
        <div className="left">
          <h3>
            <a href="#">
              <img src="" alt="" />
            </a>
          </h3>

          <ul className="foot-lst-1">
            <li></li>

          </ul>

        </div>

        <div className="center">
          <div className="foot-menus">
          
              <div>
                <h4></h4>
                <ul>
                    <li >
                    </li>
                </ul>
              </div>
          </div>
        </div>
        {/* 오른쪽 영역(비워둠 / SNS 등 넣을 자리) */}
        <div className="right">

          {/* 고객센터 */}
          <div>
            <h4></h4>
            <p className='cs-box'>
              <a href="#">
              </a>
            </p>
            <p>hours</p>
            <p>notice</p>
            <a className='talk-btn' href="#">
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;