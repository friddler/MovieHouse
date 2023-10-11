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
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/movies" className="nav-link">
          MOVIES
        </Link>
        <Link to="/series" className="nav-link">
          SERIES
        </Link>

        <div className="nav-icons">
          <div className="search-bar">
            <input type="text" name="search" placeholder="Search.." />
            <SearchIcon className="input-search-icon" />
          </div>
          <Link to="/cart" className="cart-icon">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
