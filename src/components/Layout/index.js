import React from 'react';

// Components
import Menu from '../Menu';

// Styles
import './styles.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;
