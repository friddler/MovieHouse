import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";

/*
1.Logo
2.HOME
3.Browse
4.Searchbar
5.Cart icon
*/

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="nav-left">{/* Logo */}</div>

      <div className="nav-right">
        <Link to="/" className="nav-link">
          <HomeIcon className="nav-icon" />
          HOME
        </Link>
        <Link to="/movies" className="nav-link">
          <MovieIcon className="nav-icon" />
          MOVIES
        </Link>
        <Link to="/series" className="nav-link">
          <LiveTvIcon className="nav-icon" />
          SERIES
        </Link>
        <Link to="/search" className="nav-link">
          <SearchIcon className="nav-icon" />
          SEARCH
        </Link>
        <Link to="/cart" className="nav-link">
          <ShoppingCartIcon className="nav-icon" />
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
