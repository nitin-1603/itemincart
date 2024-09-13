import { useState } from 'react';
import '../Navbar.css'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartItem = useSelector((state) => state.cart.items)

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

          <li><a href="/cart">Cart {cartItem.length === 0 ? '' : cartItem.length}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
