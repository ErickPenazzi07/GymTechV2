import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Perfil = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Carrega os dados do localStorage ao montar o componente
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    setFormData({
      nomeCompleto: storedName || "",
      email: storedEmail || "",
      password: storedPassword || "",
    });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSave = () => {
    // Salva os dados atualizados no localStorage
    localStorage.setItem("userName", formData.nomeCompleto);
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);

    alert("Dados atualizados com sucesso!");
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <h2 className="text-center mb-4">Meu Perfil</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="nomeCompleto" className="form-label">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleSave}
                  >
                    Salvar Alterações
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        
    </>

  );
};

export default Perfil;