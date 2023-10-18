import "./navbar.css";
import { Link } from "react-router-dom";
import { BiSearch, BiFilter, BiHome, BiMessage } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <section className="nav_general">
        <section className="nav">
          <section className="nav-header">
            <section className="nav-title">
              <Link to="/">ExoticMagic </Link>
            </section>
          </section>

          <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <BiSearch className="search-icon" size={30} />
            <BiFilter className="filter-icon" size={30} />
          </div>
        </section>
        <section className="nav_icons">
          <BiMessage size={30} color="orange" />
          <Link to="/">
            <BiHome size={30} color="blue" />
          </Link>
          <Link to="/profile">
            <div className="x"></div>
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
