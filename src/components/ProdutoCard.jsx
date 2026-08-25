import { useState } from "react";

function ProdutoCard({
  produto,
  adicionarCarrinho
}) {

  const [favorito, setFavorito] =
    useState(false);

  return (

    <div className="produto-card">

      <div className="produto-imagem-container">

        <img
          src={produto.imagem}
          alt={produto.nome}
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
          {produto.categoria}
        </span>

        <h3>
          {produto.nome}
        </h3>

        <p className="descricao">
          {produto.descricao}
        </p>

        <div className="avaliacao">

          ⭐ {produto.avaliacao}

          <span className="avaliacao-texto">
            avaliações
          </span>

        </div>

        <div className="preco-container">

          <span className="preco-antigo">
            R$ {(produto.preco * 1.15).toFixed(2)}
          </span>

          <strong className="preco">
            R$ {produto.preco.toFixed(2)}
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

export default ProdutoCard;
