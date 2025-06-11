import { Link, NavLink } from "react-router"
import { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";




const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-4">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          GymTech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              </ul>
            </li>
            <li className="nav-item">
            </li>
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar produtos..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
          <div className="d-flex">
            <NavLink to="/carrinho" className="btn btn-outline-light me-2">
              <i className="bi bi-cart"></i> Carrinho
            </NavLink>
            <NavLink to="/login" className="btn btn-outline-light me-2">
              Login
            </NavLink>
            <NavLink to="/registrar" className="btn btn btn-outline-light">
              Registrar
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
