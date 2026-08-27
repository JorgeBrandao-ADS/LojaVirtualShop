import { useState } from "react";

export default function ItemProduto({
    produto,
    adicionarCarrinho
}) {

  console.log(produto);

  const [favorito, setFavorito] = useState(false);

  return (

    <div className="produto-card">

      <div className="produto-imagem-container">

        <img
          src={produto.image}
          alt={produto.title}
          className="produto-imagem"
        />

        <button
          className={
            favorito
            ? "favorito favoritado"
            : "favorito"
          }
          onClick={() =>
            setFavorito(!favorito)
          }
        >
        {favorito ? "❤️" : "♡"}
        </button>

        <span className="produto-badge">
          OFERTA
        </span>

      </div>


      <div className="produto-info">

        <span className="categoria">
          {produto.category}
        </span>

        <h3>
          {produto.title}
        </h3>

        <p className="descricao">
          {produto.description}
        </p>

        <div className="avaliacao">

          ⭐ {produto.rating.rate}

        <span className="avaliacao-texto">
          ({produto.rating.count} avaliações)
        </span>

      </div>


      <div className="preco-container">

        <strong className="preco">
          R$ {produto.price.toFixed(2)}
        </strong>

      </div>


      <button
        className="btn-carrinho"
        onClick={() =>
        adicionarCarrinho(produto)
        }
      >
        🛒 Adicionar ao carrinho
      </button>

    </div>

    </div>

  );
}