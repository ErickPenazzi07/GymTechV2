import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Registrar = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nomeCompleto: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("https://localhost:7182/api/Usuarios/CreateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          nomeCompleto: formData.nomeCompleto,
        }),
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
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
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
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

      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          Email
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

      <div className="mb-4">
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

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="form-label">
          Confirmar Senha
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          value={formData.confirmPassword}
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
  );
};

export default Registrar;