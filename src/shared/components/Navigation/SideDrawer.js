import React from 'react';
import './SideDrawer.css';

const SideDrawer = ({ children, show, onClick }) => {
  return (
    <>
      {show && <div className="backdrop" onClick={onClick} />}
      <aside className={`side-drawer ${show ? 'open' : ''}`}>
        {children}
      </aside>
    </>
  );
};

export default SideDrawer;