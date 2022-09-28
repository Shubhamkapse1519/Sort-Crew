import React, { Fragment } from "react";
import { useViewport } from "../context/viewport";

const Footer = () => {
  const { width } = useViewport();
  return (
    <footer className="footer">
      {width > 480 ? (
        <Fragment>
          <p className="footer-item">© 2022 All Rights Reserved</p>
          <p className="footer-item">contact@storcrew.com</p>
          <p className="footer-item">+917378403117</p>
        </Fragment>
      ) : (
        <Fragment>
          <p>© 2022 All Rights Reserved</p>
          <div className="footer-item-mobile-wrapper">
            <p className="footer-item-mobile">contact@storcrew.com</p>
            <p className="footer-item-mobile">+917378403117</p>
          </div>
        </Fragment>
      )}
    </footer>
  );
};

export default Footer;
