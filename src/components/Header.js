import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png"
import "./Header.css";
import {useCart} from '../contexts/CartContext'

export const Header = () => {
  const {cartList}=useCart()
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="NOrZah Shopping Logo" />
        <span>NorZah Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
