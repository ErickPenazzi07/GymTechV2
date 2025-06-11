import React from 'react'
import { useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'

const Roupas = () => {
// Estado para os filtros
const [priceRange, setPriceRange] = useState([0, 300])
const [selectedSizes, setSelectedSizes] = useState([])
const [selectedColors, setSelectedColors] = useState([])
const [sortBy, setSortBy] = useState("popularity")

// Dados de exemplo para os produtos de roupas
const clothesProducts = [
  {
    id: 1,
    name: "Camiseta Dry-Fit",
    price: 79.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Camisetas",
    colors: ["Preto", "Branco", "Azul"],
    sizes: ["P", "M", "G", "GG"],
    rating: 4.5,
    discount: 0,
    description: "Camiseta com tecnologia que absorve o suor para maior conforto durante os treinos.",
  },
  {
    id: 2,
    name: "Short de Treino",
    price: 89.9,
    oldPrice: 119.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Shorts",
    colors: ["Preto", "Cinza"],
    sizes: ["P", "M", "G"],
    rating: 4.2,
    discount: 25,
    description: "Shorts leves e confortáveis para treinos intensos.",
  },
  {
    id: 3,
    name: "Legging de Compressão",
    price: 79.9,
    oldPrice: 119.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Calças",
    colors: ["Preto", "Azul"],
    sizes: ["P", "M", "G"],
    rating: 4.7,
    discount: 33,
    description: "Legging de compressão para melhor circulação durante os exercícios.",
  },
  {
    id: 4,
    name: "Regata Esportiva",
    price: 59.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Regatas",
    colors: ["Preto", "Branco", "Vermelho"],
    sizes: ["P", "M", "G", "GG"],
    rating: 4.0,
    discount: 0,
    description: "Regata leve e respirável para treinos de alta intensidade.",
  },
  {
    id: 5,
    name: "Jaqueta Corta-Vento",
    price: 149.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Jaquetas",
    colors: ["Preto", "Azul"],
    sizes: ["M", "G", "GG"],
    rating: 4.8,
    discount: 0,
    description: "Jaqueta leve e impermeável para proteção contra vento e chuva leve.",
  },
  {
    id: 6,
    name: "Camiseta Térmica",
    price: 99.9,
    oldPrice: 129.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Camisetas",
    colors: ["Preto", "Branco"],
    sizes: ["P", "M", "G"],
    rating: 4.6,
    discount: 23,
    description: "Camiseta térmica para treinos em baixas temperaturas.",
  },
  {
    id: 7,
    name: "Bermuda de Corrida",
    price: 69.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Shorts",
    colors: ["Preto", "Azul", "Cinza"],
    sizes: ["P", "M", "G", "GG"],
    rating: 4.3,
    discount: 0,
    description: "Bermuda leve com bolsos para corridas e caminhadas.",
  },
  {
    id: 8,
    name: "Top Esportivo",
    price: 59.9,
    oldPrice: 79.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Tops",
    colors: ["Preto", "Rosa", "Azul"],
    sizes: ["P", "M", "G"],
    rating: 4.4,
    discount: 25,
    description: "Top esportivo com suporte médio para diversos tipos de treino.",
  },
  {
    id: 9,
    name: "Calça Jogger",
    price: 119.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Calças",
    colors: ["Preto", "Cinza"],
    sizes: ["P", "M", "G", "GG"],
    rating: 4.5,
    discount: 0,
    description: "Calça jogger confortável para treinos e uso casual.",
  },
  {
    id: 10,
    name: "Moletom com Capuz",
    price: 149.9,
    oldPrice: 179.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Moletons",
    colors: ["Preto", "Cinza", "Azul"],
    sizes: ["M", "G", "GG"],
    rating: 4.7,
    discount: 17,
    description: "Moletom com capuz para dias frios, ideal para antes e depois dos treinos.",
  },
  {
    id: 11,
    name: "Camiseta de Compressão",
    price: 89.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Camisetas",
    colors: ["Preto", "Branco"],
    sizes: ["P", "M", "G", "GG"],
    rating: 4.6,
    discount: 0,
    description: "Camiseta de compressão para melhor suporte muscular durante os exercícios.",
  },
  {
    id: 12,
    name: "Shorts de Natação",
    price: 69.9,
    oldPrice: 89.9,
    image: "https://placehold.co/300x300",
    category: "Roupas",
    subcategory: "Shorts",
    colors: ["Azul", "Preto", "Verde"],
    sizes: ["P", "M", "G"],
    rating: 4.2,
    discount: 22,
    description: "Shorts de natação com secagem rápida e resistente ao cloro.",
  },
]

// Lista de tamanhos disponíveis
const sizes = ["P", "M", "G", "GG"]

// Lista de cores disponíveis
const colors = ["Preto", "Branco", "Azul", "Cinza", "Vermelho", "Rosa", "Verde"]

// Lista de subcategorias
const subcategories = ["Camisetas", "Shorts", "Calças", "Regatas", "Jaquetas", "Tops", "Moletons"]

// Função para alternar a seleção de tamanho
const toggleSize = (size) => {
  if (selectedSizes.includes(size)) {
    setSelectedSizes(selectedSizes.filter((s) => s !== size))
  } else {
    setSelectedSizes([...selectedSizes, size])
  }
}

// Função para alternar a seleção de cor
const toggleColor = (color) => {
  if (selectedColors.includes(color)) {
    setSelectedColors(selectedColors.filter((c) => c !== color))
  } else {
    setSelectedColors([...selectedColors, color])
  }
}

// Filtrar produtos com base nos filtros selecionados
const filteredProducts = clothesProducts
  .filter((product) => {
    // Filtro de preço
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    // Filtro de tamanho
    if (selectedSizes.length > 0 && !selectedSizes.some((size) => product.sizes.includes(size))) {
      return false
    }
    // Filtro de cor
    if (selectedColors.length > 0 && !selectedColors.some((color) => product.colors.includes(color))) {
      return false
    }
    return true
  })
  .sort((a, b) => {
    // Ordenação
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "discount":
        return (b.discount || 0) - (a.discount || 0)
      case "rating":
        return b.rating - a.rating
      case "popularity":
      default:
        return 0
    }
  })

// Componente de produto
const ProductCard = ({ product }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card card-product h-100">
        {product.discount > 0 && (
          <div className="badge bg-danger position-absolute top-0 end-0 m-2">-{product.discount}%</div>
        )}
        <img src={product.image || "/placeholder.svg"} className="card-img-top" alt={product.name} />
        <div className="card-body d-flex flex-column">
          <span className="text-muted small mb-1">{product.subcategory}</span>
          <h5 className="card-title">{product.name}</h5>
          <div className="mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <i
                key={index}
                className={`bi ${
                  index < Math.floor(product.rating)
                    ? "bi-star-fill"
                    : index < product.rating
                      ? "bi-star-half"
                      : "bi-star"
                } text-warning`}
              ></i>
            ))}
            <span className="ms-1 text-muted small">({product.rating})</span>
          </div>
          <p className="card-text text-muted small">{product.description}</p>
          <div className="d-flex mb-2">
            {product.colors.map((color) => (
              <div
                key={color}
                className="me-1 rounded-circle"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color.toLowerCase(),
                  border: "1px solid #ddd",
                }}
                title={color}
              ></div>
            ))}
          </div>
          <div className="mb-2">
            {product.sizes.map((size) => (
              <span key={size} className="badge bg-light text-dark me-1">
                {size}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            {product.oldPrice ? (
              <div>
                <span className="text-decoration-line-through text-muted me-2">R$ {product.oldPrice.toFixed(2)}</span>
                <span className="fw-bold text-danger">R$ {product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="fw-bold">R$ {product.price.toFixed(2)}</span>
            )}
            <button className="btn btn-primary w-100 mt-3">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </div>
  )
}

  return (
    <>
    <Header />
    <div className="container py-5">
      {/* Banner de Roupas */}
      <div
        className="banner rounded d-flex align-items-center justify-content-center text-white mb-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13, 110, 253, 0.8), rgba(13, 110, 253, 0.8)), url(https://placehold.co/1920x400)",
          height: "300px",
        }}
      >
        <div className="text-center">
          <h1 className="display-4 fw-bold">Roupas Esportivas</h1>
          <p className="lead">Conforto e performance para todos os seus treinos</p>
          <div className="mt-4">
            <span className="badge bg-light text-primary me-2 p-2">ALTA PERFORMANCE</span>
            <span className="badge bg-light text-primary me-2 p-2">TECNOLOGIA DRY-FIT</span>
            <span className="badge bg-light text-primary p-2">CONFORTO MÁXIMO</span>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Filtros */}
        <div className="col-lg-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Filtros</h5>

              {/* Filtro de Subcategoria */}
              <div className="mb-4">
                <h6>Subcategorias</h6>
                {subcategories.map((subcategory) => (
                  <div className="form-check" key={subcategory}>
                    <input className="form-check-input" type="checkbox" id={`subcategory-${subcategory}`} />
                    <label className="form-check-label" htmlFor={`subcategory-${subcategory}`}>
                      {subcategory}
                    </label>
                  </div>
                ))}
              </div>

              {/* Filtro de Preço */}
              <div className="mb-4">
                <h6>Faixa de Preço</h6>
                <div className="d-flex align-items-center mb-2">
                  <span>R$ {priceRange[0]}</span>
                  <span className="mx-2">-</span>
                  <span>R$ {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="300"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                />
              </div>

              {/* Filtro de Tamanho */}
              <div className="mb-4">
                <h6>Tamanho</h6>
                <div className="d-flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`btn btn-sm ${selectedSizes.includes(size) ? "btn-primary" : "btn-outline-primary"}`}
                      onClick={() => toggleSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro de Cor */}
              <div className="mb-4">
                <h6>Cor</h6>
                <div className="d-flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`rounded-circle d-flex align-items-center justify-content-center ${
                        selectedColors.includes(color) ? "border border-primary border-2" : ""
                      }`}
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: color.toLowerCase(),
                        cursor: "pointer",
                        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                      }}
                      onClick={() => toggleColor(color)}
                      title={color}
                    >
                      {selectedColors.includes(color) && (
                        <i className="bi bi-check-lg text-white" style={{ textShadow: "0 0 2px #000" }}></i>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtro de Avaliação */}
              <div className="mb-4">
                <h6>Avaliação</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rating-4" />
                  <label className="form-check-label" htmlFor="rating-4">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <span className="ms-1">ou mais</span>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rating-3" />
                  <label className="form-check-label" htmlFor="rating-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <span className="ms-1">ou mais</span>
                  </label>
                </div>
              </div>

              {/* Botão para limpar filtros */}
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => {
                  setPriceRange([0, 300])
                  setSelectedSizes([])
                  setSelectedColors([])
                }}
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="col-lg-9">
          {/* Cabeçalho com contagem e ordenação */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0">
              Mostrando <strong>{filteredProducts.length}</strong> produtos
            </p>
            <div className="d-flex align-items-center">
              <label htmlFor="sort" className="me-2">
                Ordenar por:
              </label>
              <select id="sort" className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popularity">Mais Populares</option>
                <option value="rating">Melhor Avaliados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="discount">Maior Desconto</option>
              </select>
            </div>
          </div>

          {/* Grid de Produtos */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="col-12 text-center py-5">
                <i className="bi bi-emoji-frown display-1 text-muted"></i>
                <h3 className="mt-3">Nenhum produto encontrado</h3>
                <p className="text-muted">Tente ajustar seus filtros para encontrar o que procura.</p>
              </div>
            )}
          </div>

          {/* Paginação */}
          {filteredProducts.length > 0 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                    Anterior
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Próxima
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Roupas