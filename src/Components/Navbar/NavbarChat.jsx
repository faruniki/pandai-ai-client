import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navchat.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <div>
          <p className="navbar-title">Pandai CHAT</p>
        </div>
        <p className="navbar-divider">|</p>
        <div>
          <p className="navbar-subtitle">Surat Menyurat</p>
        </div>
      </div>
      <div className="navbar-section">
        <p className="navbar-username">Username</p>
        <AccountCircleIcon style={{    fontSize: 32,}} className="navbar-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
