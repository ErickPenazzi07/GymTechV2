import React from 'react'
import { useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'

const Equipamentos = () => {
// Estado para os filtros
const [priceRange, setPriceRange] = useState([0, 500])
const [selectedTypes, setSelectedTypes] = useState([])
const [selectedBrands, setSelectedBrands] = useState([])
const [sortBy, setSortBy] = useState("popularity")

// Dados de exemplo para os produtos de equipamentos
const equipmentProducts = [
  {
    id: 1,
    name: "Kit Halteres 10kg",
    price: 199.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Musculação",
    brand: "Polimet",
    types: ["Musculação", "Treino em Casa"],
    rating: 4.7,
    discount: 0,
    description: "Kit com dois halteres de 5kg cada, ideal para treinos em casa.",
  },
  {
    id: 2,
    name: "Corda de Pular Profissional",
    price: 49.9,
    oldPrice: 79.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Cardio",
    brand: "Vollo",
    types: ["Cardio", "Treino em Casa"],
    rating: 4.5,
    discount: 38,
    description: "Corda de pular com rolamento para treinos de alta intensidade.",
  },
  {
    id: 3,
    name: "Bola de Pilates",
    price: 69.9,
    oldPrice: 99.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Pilates",
    brand: "Acte",
    types: ["Pilates", "Treino em Casa"],
    rating: 4.3,
    discount: 30,
    description: "Bola para exercícios de pilates e fortalecimento do core.",
  },
  {
    id: 4,
    name: "Kit Elásticos de Resistência",
    price: 79.9,
    oldPrice: 129.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Funcional",
    brand: "Acte",
    types: ["Funcional", "Treino em Casa"],
    rating: 4.6,
    discount: 38,
    description: "Kit com 5 elásticos de diferentes resistências para treino funcional.",
  },
  {
    id: 5,
    name: "Banco de Supino",
    price: 399.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Musculação",
    brand: "Polimet",
    types: ["Musculação", "Treino em Casa"],
    rating: 4.8,
    discount: 0,
    description: "Banco de supino ajustável para diversos exercícios de musculação.",
  },
  {
    id: 6,
    name: "Colchonete de Exercícios",
    price: 89.9,
    oldPrice: 119.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Yoga",
    brand: "Vollo",
    types: ["Yoga", "Pilates", "Treino em Casa"],
    rating: 4.4,
    discount: 25,
    description: "Colchonete confortável para exercícios no chão.",
  },
  {
    id: 7,
    name: "Kettlebell 12kg",
    price: 149.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Musculação",
    brand: "Polimet",
    types: ["Musculação", "Funcional", "Treino em Casa"],
    rating: 4.7,
    discount: 0,
    description: "Kettlebell de 12kg para treinos funcionais e de força.",
  },
  {
    id: 8,
    name: "Step para Aeróbica",
    price: 129.9,
    oldPrice: 159.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Cardio",
    brand: "Acte",
    types: ["Cardio", "Treino em Casa"],
    rating: 4.2,
    discount: 19,
    description: "Step com altura ajustável para treinos aeróbicos.",
  },
  {
    id: 9,
    name: "Barra Fixa de Porta",
    price: 99.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Musculação",
    brand: "Vollo",
    types: ["Musculação", "Treino em Casa"],
    rating: 4.3,
    discount: 0,
    description: "Barra fixa para porta, ideal para exercícios de puxada.",
  },
  {
    id: 10,
    name: "Roda de Exercício Abdominal",
    price: 59.9,
    oldPrice: 79.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Funcional",
    brand: "Acte",
    types: ["Funcional", "Treino em Casa"],
    rating: 4.1,
    discount: 25,
    description: "Roda para exercícios abdominais e fortalecimento do core.",
  },
  {
    id: 11,
    name: "Anilhas Kit 20kg",
    price: 249.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Musculação",
    brand: "Polimet",
    types: ["Musculação", "Treino em Casa"],
    rating: 4.8,
    discount: 0,
    description: "Kit com anilhas totalizando 20kg para diversos exercícios.",
  },
  {
    id: 12,
    name: "Escada de Agilidade",
    price: 89.9,
    oldPrice: 119.9,
    image: "https://placehold.co/300x300",
    category: "Equipamentos",
    subcategory: "Funcional",
    brand: "Vollo",
    types: ["Funcional", "Treino em Casa"],
    rating: 4.4,
    discount: 25,
    description: "Escada para treinos de agilidade e coordenação motora.",
  },
]

// Lista de tipos de equipamentos disponíveis
const types = ["Musculação", "Cardio", "Funcional", "Pilates", "Yoga", "Treino em Casa"]

// Lista de marcas disponíveis
const brands = ["Polimet", "Vollo", "Acte"]

// Lista de subcategorias
const subcategories = ["Musculação", "Cardio", "Funcional", "Pilates", "Yoga"]

// Função para alternar a seleção de tipo
const toggleType = (type) => {
  if (selectedTypes.includes(type)) {
    setSelectedTypes(selectedTypes.filter((t) => t !== type))
  } else {
    setSelectedTypes([...selectedTypes, type])
  }
}

// Função para alternar a seleção de marca
const toggleBrand = (brand) => {
  if (selectedBrands.includes(brand)) {
    setSelectedBrands(selectedBrands.filter((b) => b !== brand))
  } else {
    setSelectedBrands([...selectedBrands, brand])
  }
}

// Filtrar produtos com base nos filtros selecionados
const filteredProducts = equipmentProducts
  .filter((product) => {
    // Filtro de preço
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    // Filtro de tipo
    if (selectedTypes.length > 0 && !selectedTypes.some((type) => product.types.includes(type))) {
      return false
    }
    // Filtro de marca
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
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
          <p className="text-secondary small mb-2">{product.brand}</p>
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
          <div className="mb-2">
            {product.types.map((type) => (
              <span key={type} className="badge bg-light text-secondary me-1 mb-1">
                {type}
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
      {/* Banner de Equipamentos */}
      <div
        className="banner rounded d-flex align-items-center justify-content-center text-white mb-5"
        style={{
            backgroundImage:
            "linear-gradient(rgba(108, 117, 125, 0.8), rgba(108, 117, 125, 0.8)), url(https://placehold.co/1920x400)",
            height: "300px",
        }}
        >
        <div className="text-center">
          <h1 className="display-4 fw-bold">Equipamentos Esportivos</h1>
          <p className="lead">Tudo o que você precisa para montar seu espaço de treino</p>
          <div className="mt-4">
            <span className="badge bg-light text-secondary me-2 p-2">DURABILIDADE</span>
            <span className="badge bg-light text-secondary me-2 p-2">QUALIDADE PREMIUM</span>
            <span className="badge bg-light text-secondary p-2">TREINO COMPLETO</span>
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
                <h6>Categoria</h6>
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
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  />
              </div>

              {/* Filtro de Marca */}
              <div className="mb-4">
                <h6>Marca</h6>
                {brands.map((brand) => (
                  <div className="form-check" key={brand}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      />
                    <label className="form-check-label" htmlFor={`brand-${brand}`}>
                      {brand}
                    </label>
                  </div>
                ))}
              </div>

              {/* Filtro de Tipo */}
              <div className="mb-4">
                <h6>Tipo de Treino</h6>
                <div className="d-flex flex-wrap gap-2">
                  {types.map((type) => (
                      <button
                      key={type}
                      className={`btn btn-sm ${
                          selectedTypes.includes(type) ? "btn-secondary" : "btn-outline-secondary"
                        } mb-1`}
                        onClick={() => toggleType(type)}
                        >
                      {type}
                    </button>
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
                    setPriceRange([0, 500])
                    setSelectedTypes([])
                    setSelectedBrands([])
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

export default Equipamentos