import React from 'react';
import Helmet from 'react-helmet'
import CustomNavbar from './CustomNavbar';

const Header = ({titleText = 'Awesome Title', brand}) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{titleText}</title>
      </Helmet>
      <CustomNavbar brandName={brand}/>
      <h1 className='mb-5'>{titleText}</h1>
    </>
  );
};

export default Header;
