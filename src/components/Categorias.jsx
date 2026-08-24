function Categorias({
  categoria,
  setCategoria
}) {

  const categorias = [
    "Todos",
    "Eletrônicos",
    "Acessórios",
    "Esportes",
    "Casa"
  ];

  return (

    <section className="categorias">

      {categorias.map((item) => (

        <button
          key={item}
          className={
            categoria === item
              ? "categoria-ativa"
              : ""
          }
          onClick={() =>
            setCategoria(item)
          }
        >

          {item === "Todos" && "🛍️ "}
          {item === "Eletrônicos" && "💻 "}
          {item === "Acessórios" && "🎧 "}
          {item === "Esportes" && "⚽ "}
          {item === "Casa" && "🏠 "}

          {item}

        </button>

      ))}

    </section>
  );
}

export default Categorias;

