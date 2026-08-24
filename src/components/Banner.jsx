function Banner() {
    function irParaProdutos() {

        Document
            .getElementById("produtos")
            .scrollIntoView({
                behavior: "smooth"
            });
    }
    return (
        <section className="banner">
            <div className="banner-content">
                <span className="banner-small">
                    OFERTAS ESPECIAIS
                </span>
                <h1>
                    Tecnologia para
                    <br />
                    transformar seu dia
                </h1>

                <p>
                    Encontre os melhores produtos
                    com preços incríveis.
                </p>

                <button onClick={irParaProdutos}>
                    Comprar agora →
                </button>


            </div>
            <div className = "banner-emoji">
                💻
            </div>
        </section>
    )
}

export default Banner;