import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

/*
1.Logo
2.HOME
3.Browse
4.Searchbar
5.Cart icon
*/

function Navbar() {
  

  const toggleSearchBar = () => {
     // funktion för att toggla sökfunktion
  };

  return (
    <div className="navbar">
    <div className="nav-left">{/* Logo */}</div>

    <div className="nav-right">
      <Link to="/" className="nav-link">HOME</Link>
      <Link to="/browse" className="nav-link">BROWSE</Link>
      <Link to="/contact" className="nav-link">CONTACT</Link>
    </div>

    <div className="nav-icons">
      <div className="search-icon" onClick={toggleSearchBar}>
        <SearchIcon />
      </div>
      <Link to="/cart" className="cart-icon">
        <ShoppingCartIcon />
      </Link>
    </div>
  </div>
  );
}
export default Navbar;
