import React from 'react'
import { useState } from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'


const Suplementos = () => {
    // Estado para os filtros
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedGoals, setSelectedGoals] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState("popularity")

  // Dados de exemplo para os produtos de suplementos
  const supplementsProducts = [
    {
      id: 1,
      name: "Whey Protein 900g",
      price: 149.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Proteínas",
      brand: "Growth",
      goals: ["Ganho de Massa", "Recuperação Muscular"],
      rating: 4.8,
      discount: 0,
      description: "Suplemento proteico para recuperação muscular pós-treino.",
    },
    {
      id: 2,
      name: "Creatina 300g",
      price: 99.9,
      oldPrice: 129.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Creatina",
      brand: "Integral Médica",
      goals: ["For��a", "Resistência", "Ganho de Massa"],
      rating: 4.7,
      discount: 23,
      description: "Suplemento para aumento de força e desempenho nos treinos.",
    },
    {
      id: 3,
      name: "BCAA 2:1:1 - 90 cápsulas",
      price: 59.9,
      oldPrice: 89.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Aminoácidos",
      brand: "Max Titanium",
      goals: ["Recuperação Muscular", "Resistência"],
      rating: 4.5,
      discount: 33,
      description: "Aminoácidos essenciais para recuperação muscular.",
    },
    {
      id: 4,
      name: "Pré-Treino 300g",
      price: 89.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Pré-Treino",
      brand: "Darkness",
      goals: ["Energia", "Foco", "Bomba"],
      rating: 4.6,
      discount: 0,
      description: "Pré-treino para mais energia e foco durante os exercícios.",
    },
    {
      id: 5,
      name: "Albumina 500g",
      price: 69.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Proteínas",
      brand: "Growth",
      goals: ["Ganho de Massa", "Definição Muscular"],
      rating: 4.3,
      discount: 0,
      description: "Proteína de alto valor biológico para ganho de massa magra.",
    },
    {
      id: 6,
      name: "Glutamina 300g",
      price: 79.9,
      oldPrice: 99.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Aminoácidos",
      brand: "Integral Médica",
      goals: ["Recuperação Muscular", "Imunidade"],
      rating: 4.5,
      discount: 20,
      description: "Aminoácido para recuperação muscular e fortalecimento do sistema imunológico.",
    },
    {
      id: 7,
      name: "Multivitamínico - 90 cápsulas",
      price: 49.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Vitaminas",
      brand: "Max Titanium",
      goals: ["Saúde", "Imunidade", "Bem-estar"],
      rating: 4.4,
      discount: 0,
      description: "Complexo vitamínico para suprir as necessidades diárias de nutrientes.",
    },
    {
      id: 8,
      name: "Hipercalórico 3kg",
      price: 129.9,
      oldPrice: 159.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Hipercalóricos",
      brand: "Darkness",
      goals: ["Ganho de Massa", "Ganho de Peso"],
      rating: 4.2,
      discount: 19,
      description: "Suplemento hipercalórico para ganho de peso e massa muscular.",
    },
    {
      id: 9,
      name: "Colágeno Hidrolisado - 300g",
      price: 69.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Colágeno",
      brand: "Growth",
      goals: ["Saúde Articular", "Pele", "Cabelo e Unhas"],
      rating: 4.7,
      discount: 0,
      description: "Colágeno para saúde das articulações, pele, cabelo e unhas.",
    },
    {
      id: 10,
      name: "Termogênico - 60 cápsulas",
      price: 89.9,
      oldPrice: 109.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Termogênicos",
      brand: "Integral Médica",
      goals: ["Emagrecimento", "Energia", "Definição Muscular"],
      rating: 4.1,
      discount: 18,
      description: "Termogênico para aceleração do metabolismo e queima de gordura.",
    },
    {
      id: 11,
      name: "Ômega 3 - 120 cápsulas",
      price: 59.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Ômega 3",
      brand: "Max Titanium",
      goals: ["Saúde Cardiovascular", "Anti-inflamatório", "Saúde Cerebral"],
      rating: 4.6,
      discount: 0,
      description: "Ômega 3 para saúde cardiovascular e função cerebral.",
    },
    {
      id: 12,
      name: "Barra de Proteína - Caixa com 12",
      price: 79.9,
      oldPrice: 99.9,
      image: "https://placehold.co/300x300",
      category: "Suplementos",
      subcategory: "Barras Proteicas",
      brand: "Darkness",
      goals: ["Ganho de Massa", "Lanche Saudável"],
      rating: 4.3,
      discount: 20,
      description: "Barras proteicas para lanche saudável e prático.",
    },
  ]

  // Lista de objetivos disponíveis
  const goals = [
    "Ganho de Massa",
    "Recuperação Muscular",
    "Força",
    "Resistência",
    "Energia",
    "Definição Muscular",
    "Emagrecimento",
    "Saúde",
    "Imunidade",
  ]

  // Lista de marcas disponíveis
  const brands = ["Growth", "Integral Médica", "Max Titanium", "Darkness"]

  // Lista de subcategorias
  const subcategories = [
    "Proteínas",
    "Creatina",
    "Aminoácidos",
    "Pré-Treino",
    "Vitaminas",
    "Hipercalóricos",
    "Termogênicos",
    "Colágeno",
    "Ômega 3",
    "Barras Proteicas",
  ]

  // Função para alternar a seleção de objetivo
  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal))
    } else {
      setSelectedGoals([...selectedGoals, goal])
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
  const filteredProducts = supplementsProducts
    .filter((product) => {
      // Filtro de preço
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }
      // Filtro de objetivo
      if (selectedGoals.length > 0 && !selectedGoals.some((goal) => product.goals.includes(goal))) {
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
            <p className="text-primary small mb-2">{product.brand}</p>
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
              {product.goals.map((goal) => (
                <span key={goal} className="badge bg-light text-primary me-1 mb-1">
                  {goal}
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
    {/* Banner de Suplementos */}
    <div
      className="banner rounded d-flex align-items-center justify-content-center text-white mb-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(25, 135, 84, 0.8), rgba(25, 135, 84, 0.8)), url(https://placehold.co/1920x400)",
        height: "300px",
      }}
    >
      <div className="text-center">
        <h1 className="display-4 fw-bold">Suplementos</h1>
        <p className="lead">Potencialize seus resultados com os melhores suplementos</p>
        <div className="mt-4">
          <span className="badge bg-light text-success me-2 p-2">QUALIDADE GARANTIDA</span>
          <span className="badge bg-light text-success me-2 p-2">RESULTADOS COMPROVADOS</span>
          <span className="badge bg-light text-success p-2">MARCAS PREMIUM</span>
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
              <h6>Tipo de Suplemento</h6>
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

            {/* Filtro de Objetivo */}
            <div className="mb-4">
              <h6>Objetivo</h6>
              <div className="d-flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    className={`btn btn-sm ${
                      selectedGoals.includes(goal) ? "btn-success" : "btn-outline-success"
                    } mb-1`}
                    onClick={() => toggleGoal(goal)}
                  >
                    {goal}
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
                setPriceRange([0, 300])
                setSelectedGoals([])
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

export default Suplementos