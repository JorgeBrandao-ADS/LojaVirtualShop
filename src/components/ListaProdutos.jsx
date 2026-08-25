import ProdutoCard from "./ProdutoCard";

function ListaProdutos({
  produtos,
  adicionarCarrinho
}) {

  return (

    <main
      className="produtos-container"
      id="produtos"
    >

      <div className="titulo-produtos">

        <div>

          <span>
            NOSSA SELEÇÃO
          </span>

          <h2>
            Produtos em destaque
          </h2>

        </div>

        <p>
          {produtos.length} produtos encontrados
        </p>

      </div>

      <div className="produtos-grid">

        {produtos.map((produto) => (

          <ProdutoCard
            key={produto.id}
            produto={produto}
            adicionarCarrinho={
              adicionarCarrinho
            }
          />

        ))}

      </div>

      {produtos.length === 0 && (

        <div className="sem-produtos">

          <span>
            🔎
          </span>

          <h3>
            Nenhum produto encontrado
          </h3>

          <p>
            Tente pesquisar por outro termo.
          </p>

        </div>

      )}

    </main>
  );
}

export default ListaProdutos;
