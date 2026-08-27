function Carrinho({
    carrinho,
    alterarQuantidade,
    removerProduto,
    fecharCarrinho
  }) {
  
    const total = carrinho.reduce(
      (soma, item) =>
        soma + item.price * item.quantidade,
      0
    );
  
    const quantidadeTotal = carrinho.reduce(
      (soma, item) =>
        soma + item.quantidade,
      0
    );
  
    return (
  
      <div className="carrinho-overlay">
  
        <div className="carrinho">
  
          <div className="carrinho-header">
  
            <div>
  
              <h2>
                Seu carrinho
              </h2>
  
              <span>
                {quantidadeTotal} item(s)
              </span>
  
            </div>
  
            <button
              className="fechar"
              onClick={fecharCarrinho}
            >
              ✕
            </button>
  
          </div>
  
          {carrinho.length === 0 ? (
  
            <div className="carrinho-vazio">
  
              <span className="carrinho-icon">
                🛒
              </span>
  
              <h3>
                Seu carrinho está vazio
              </h3>
  
              <p>
                Adicione alguns produtos para começar.
              </p>
  
            </div>
  
          ) : (
  
            <>
  
              <div className="carrinho-produtos">
  
                {carrinho.map((item) => (
  
                  <div
                    className="item-carrinho"
                    key={item.id}
                  >
  
                    <img
                      src={item.image}
                      alt={item.title}
                    />
  
                    <div className="item-info">
  
                      <h4>
                        {item.title}
                      </h4>
  
                      <span>
                        R$ {item.price.toFixed(2)}
                      </span>
  
                      <div className="quantidade">
  
                        <button
                          onClick={() =>
                            alterarQuantidade(
                              item.id,
                              -1
                            )
                          }
                        >
                          -
                        </button>
  
                        <strong>
                          {item.quantidade}
                        </strong>
  
                        <button
                          onClick={() =>
                            alterarQuantidade(
                              item.id,
                              1
                            )
                          }
                        >
                          +
                        </button>
  
                      </div>
  
                    </div>
  
                    <button
                      className="remover"
                      onClick={() =>
                        removerProduto(item.id)
                      }
                    >
                      🗑️
                    </button>
  
                  </div>
  
                ))}
  
              </div>
  
              <div className="resumo">
  
                <div>
  
                  <span>
                    Subtotal
                  </span>
  
                  <strong>
                    R$ {total.toFixed(2)}
                  </strong>
  
                </div>
  
                <div>
  
                  <span>
                    Frete
                  </span>
  
                  <strong className="frete">
                    GRÁTIS
                  </strong>
  
                </div>
  
                <hr />
  
                <div className="total">
  
                  <span>
                    Total
                  </span>
  
                  <strong>
                    R$ {total.toFixed(2)}
                  </strong>
  
                </div>
  
                <button className="finalizar">
                  Finalizar compra
                </button>
  
              </div>
  
            </>
  
          )}
  
        </div>
  
      </div>
    );
  }
  
  export default Carrinho;
  