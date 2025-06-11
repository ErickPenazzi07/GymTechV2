import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Verifica se o e-mail do usuário está armazenado no localStorage
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleLogout = () => {
    // Remove o e-mail do usuário do localStorage e atualiza o estado
    localStorage.removeItem("userEmail");
    setUserEmail(null);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            GymTech
          </NavLink>
          <div className="collapse navbar-collapse">
            <form className="d-flex me-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
            <div className="d-flex">
              <NavLink to="/carrinho" className="btn btn-outline-light me-2">
                <i className="bi bi-cart"></i> Carrinho
              </NavLink>
              {userEmail ? (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light dropdown-toggle"
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle"></i> {userEmail}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                    <li>
                      <NavLink to="/perfil" className="dropdown-item">
                        Meu Perfil
                      </NavLink>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outline-light me-2">
                    Login
                  </NavLink>
                  <NavLink to="/registrar" className="btn btn-outline-light">
                    Registrar
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;