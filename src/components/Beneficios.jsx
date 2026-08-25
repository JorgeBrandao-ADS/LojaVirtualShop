function Beneficios() {

    const beneficios = [
      {
        icone: "🚚",
        titulo: "Frete grátis",
        descricao: "Para compras acima de R$ 199"
      },
      {
        icone: "🔒",
        titulo: "Compra segura",
        descricao: "Seus dados protegidos"
      },
      {
        icone: "↩️",
        titulo: "7 dias para trocar",
        descricao: "Compra sem preocupação"
      },
      {
        icone: "💳",
        titulo: "Até 12x sem juros",
        descricao: "No cartão de crédito"
      }
    ];
  
    return (
  
      <section className="beneficios">
  
        {beneficios.map((beneficio) => (
  
          <div key={beneficio.titulo}>
  
            <span>
              {beneficio.icone}
            </span>
  
            <div>
  
              <strong>
                {beneficio.titulo}
              </strong>
  
              <p>
                {beneficio.descricao}
              </p>
  
            </div>
  
          </div>
  
        ))}
  
      </section>
    );
  }
  
  export default Beneficios;
  