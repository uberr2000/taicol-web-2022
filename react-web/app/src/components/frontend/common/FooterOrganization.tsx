import React from 'react';

const FooterOrganization: React.VFC = () => {

  return (
    <div className="two-related">
        <div className="itembox">
            <p>指導單位</p>
            <a href="https://www.forest.gov.tw">
                <img src="/images/footer-logo1.png"/>
            </a>
        </div>
        <div className="itembox">
            <p>維護單位</p>
            <a href="https://portal.taibif.tw">
                <img src="/images/footer-logo2.png"/>
            </a>
        </div>
    </div>
  )
}

export default FooterOrganization