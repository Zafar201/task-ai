import React from 'react';

const Navbar = ({ toggleSidebar }) => (
  <nav className="navbar">
    <div className="navbar-left">
      <button className="menu-button" onClick={toggleSidebar}>☰</button>
      <button className="create-character">Create a Character</button>
    </div>
    <div className="logo">Logo</div>
    <div className="navbar-right">
      <button className="sign-up">Sign Up</button>
      <button className="sign-in">Sign In</button>
    </div>
  </nav>
);

export default Navbar;