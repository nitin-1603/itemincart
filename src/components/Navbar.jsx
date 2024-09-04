import { useState } from 'react';
import '../Navbar.css'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">MyLogo</a>
        <button className="navbar-toggler" onClick={toggleNav}>
          ☰
        </button>
      </div>
      <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          
          <li><a href="/cart">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
