import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Registrar = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://gymtechv2.somee.com/api/Usuarios/CreateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify({
          nomeCompleto: formData.nomeCompleto,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Salva os dados do usuário no localStorage
        localStorage.setItem("userName", formData.nomeCompleto);
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userPassword", formData.password);

        alert("Usuário cadastrado com sucesso!");
        navigate("/login"); // Redireciona para a página de login
      } else {
        const errorData = await response.json();
        console.error("Erro ao cadastrar usuário:", errorData);
        alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow">
              <h2 className="text-center mb-4">Registrar</h2>
              <form onSubmit={handleSubmit}>
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

                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="termsCheck" required />
                  <label className="form-check-label" htmlFor="termsCheck">
                    Concordo com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>
                  </label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Criar Conta
                  </button>
                </div>
              </form>

              <div className="mt-4 text-center">
                <p>
                  Já tem uma conta? <a href="/login">Faça login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registrar;