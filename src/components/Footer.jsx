import React from "react";

const Footer = ({footerText = "This is a footer."}) => {
  return (
    <>
      <p>{footerText}</p>
    </>
  );
};

export default Footer;
