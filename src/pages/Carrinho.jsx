import React from 'react'
import { Link } from "react-router"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Carrinho = () => {
    const cartItems = [
        {
          id: 1,
          name: "Tênis de Corrida Pro",
          price: 299.9,
          image: "https://placehold.co/100x100",
          quantity: 1,
        },
        {
          id: 5,
          name: "Shorts de Treino",
          price: 89.9,
          image: "https://placehold.co/100x100",
          quantity: 2,
        },
        {
          id: 6,
          name: "Creatina 300g",
          price: 99.9,
          image: "https://placehold.co/100x100",
          quantity: 1,
        },
      ]

        // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 15.9
  const discount = 30.0
  const total = subtotal + shipping - discount

  return (
    <>
    <Header />
     <div className="container py-5">
      <h1 className="mb-4">Meu Carrinho</h1>

      <div className="row">
        <div className="col-lg-8">
          {/* Itens do carrinho */}
          <div className="card mb-4">
            <div className="card-body">
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="row mb-4 align-items-center">
                      <div className="col-md-2 col-4">
                        <img src={item.image || "/placeholder.svg"} alt={item.name} className="img-fluid rounded" />
                      </div>
                      <div className="col-md-5 col-8">
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted small mb-0">
                          Código: PROD-{item.id}00{item.id}
                        </p>
                      </div>
                      <div className="col-md-2 col-4 mt-3 mt-md-0">
                        <div className="d-flex align-items-center">
                          <button className="btn btn-sm btn-outline-secondary">-</button>
                          <span className="mx-2">{item.quantity}</span>
                          <button className="btn btn-sm btn-outline-secondary">+</button>
                        </div>
                      </div>
                      <div className="col-md-2 col-4 text-end mt-3 mt-md-0">
                        <span className="fw-bold">R$ {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="col-md-1 col-4 text-end mt-3 mt-md-0">
                        <button className="btn btn-sm text-danger">
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                      {item !== cartItems[cartItems.length - 1] && (
                        <div className="col-12">
                          <hr className="my-3" />
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-cart-x display-1 text-muted"></i>
                  <h3 className="mt-3">Seu carrinho está vazio</h3>
                  <p className="text-muted">Adicione produtos para continuar suas compras</p>
                  <Link to="/" className="btn btn-primary mt-3">
                    Continuar Comprando
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Cupom de desconto */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="mb-3">Cupom de Desconto</h5>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Digite seu cupom" />
                <button className="btn btn-outline-primary" type="button">
                  Aplicar
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <Link to="/" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i> Continuar Comprando
            </Link>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-arrow-clockwise me-2"></i> Atualizar Carrinho
            </button>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          {/* Resumo da compra */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Resumo da Compra</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} itens)</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Frete</span>
                <span>R$ {shipping.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2 text-success">
                <span>Desconto</span>
                <span>- R$ {discount.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold fs-5">R$ {total.toFixed(2)}</span>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary btn-lg">Finalizar Compra</button>
              </div>

              <div className="mt-3 text-center">
                <small className="text-muted">
                  <i className="bi bi-shield-lock me-1"></i> Pagamento 100% seguro
                </small>
              </div>

              <div className="mt-3 d-flex justify-content-center">
                <img src="https://placehold.co/40x25" alt="Visa" className="mx-1" />
                <img src="https://placehold.co/40x25" alt="Mastercard" className="mx-1" />
                <img src="https://placehold.co/40x25" alt="PayPal" className="mx-1" />
                <img src="https://placehold.co/40x25" alt="Pix" className="mx-1" />
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

export default Carrinho