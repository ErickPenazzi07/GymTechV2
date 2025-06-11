import { Link } from "react-router"
import { ShoppingBag, Zap, Shield, Truck } from "lucide-react"
import "bootstrap/dist/css/bootstrap.min.css"
import Suplemento from "../assets/suplementos.jpg"
import Roupas from "../assets/roupas.jpg"
import Equipamentos from "../assets/equipamentos.jpg"
import GymTech from "../assets/gymtech.jpg"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../App.css"

export default function Home() {
  return (
    <>
    <Header />
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Transforme seu corpo com os melhores produtos</h1>
              <p className="lead mb-4">
                Suplementos, equipamentos e roupas de qualidade para potencializar seus treinos e alcançar seus
                objetivos.
              </p>
              <div className="d-flex gap-3">
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={GymTech}
                alt="Produtos de Academia"
                className="img-thumbnail rounded shadow-lg ImagemBanner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Zap size={24} />
                </div>
                <h5>Entrega Rápida</h5>
                <p className="text-muted">Receba seus produtos em até 2 dias úteis</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Shield size={24} />
                </div>
                <h5>Qualidade Garantida</h5>
                <p className="text-muted">Produtos originais e certificados</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <Truck size={24} />
                </div>
                <h5>Frete Grátis</h5>
                <p className="text-muted">Em compras acima de R$ 199,00</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <ShoppingBag size={24} />
                </div>
                <h5>Melhor Preço</h5>
                <p className="text-muted">Preços competitivos do mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Nossas Categorias</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <Link to="/suplementos" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src={Suplemento}
                    className="card-img-top suplementosImg"
                    alt="Suplementos"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Suplementos</h5>
                    <p className="card-text text-muted">Whey, Creatina, BCAA e muito mais</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 mb-4">
              <Link to="/equipamentos" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src={Equipamentos}
                    className="card-img-top suplementosImg"
                    alt="Equipamentos"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Equipamentos</h5>
                    <p className="card-text text-muted">Halteres, barras, acessórios</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 mb-4">
              <Link to="/roupas" className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src={Roupas}
                    className="card-img-top suplementosImg"
                    alt="Roupas"
                    
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Roupas</h5>
                    <p className="card-text text-muted">Camisetas, shorts, tênis</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}
