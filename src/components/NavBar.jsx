import { Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/">
          <span className="logo">CocktailChronicles</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.nav``;

export default NavBar;
