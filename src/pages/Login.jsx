import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await fetch(
        "http://gymtechv2.somee.com/Usuario/login?useCookies=false&useSessionCookies=false",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (response.ok) {
        // Salva os dados do usuário no localStorage
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userPassword", formData.password);

        alert("Login realizado com sucesso!");
        navigate("/"); // Redireciona para a tela de Home
      } else {
        const errorData = await response.json();
        console.error("Erro ao realizar login:", errorData);
        alert("E-mail ou senha inválidos. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Ocorreu um erro ao realizar o login. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Entrar</h2>

                <form onSubmit={handleSubmit}>
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

                  <div className="mb-4 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberMe"
                      >
                        Lembrar-me
                      </label>
                    </div>
                    <a href="/forgot-password">Esqueceu a senha?</a>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Entrar
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <p>
                    Não tem uma conta? <a href="/registrar">Cadastre-se</a>
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-center mb-3">Ou entre com</p>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-outline-dark flex-grow-1">
                      <i className="bi bi-google me-2"></i> Google
                    </button>
                    <button className="btn btn-outline-primary flex-grow-1">
                      <i className="bi bi-facebook me-2"></i> Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;