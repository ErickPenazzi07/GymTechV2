import { Link } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Login = () => {
  return (
    <>
    <Header />
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4">Entrar</h2>
    
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        E-mail
                      </label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
    
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Senha
                      </label>
                      <input type="password" className="form-control" id="password" required />
                    </div>
    
                    <div className="mb-4 d-flex justify-content-between">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Lembrar-me
                        </label>
                      </div>
                      <a href="#" className="text-decoration-none">
                        Esqueceu a senha?
                      </a>
                    </div>
    
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Entrar
                      </button>
                    </div>
                  </form>
    
                  <div className="mt-4 text-center">
                    <p>
                      Não tem uma conta? <Link to="/registrar">Cadastre-se</Link>
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
  )
}

export default Login