import { useState } from "react";

import Beneficios from "./Beneficios";
import Footer from "./Footer";

function RodapeNewsletter() {

  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function cadastrarEmail(event) {

    event.preventDefault();

    if (!email) {
      setMensagem("Digite seu e-mail.");
      return;
    }

    setMensagem("E-mail cadastrado com sucesso!");
    setEmail("");
  }

  return (
    <>
      <Beneficios />

      <section className="newsletter">

        <h2>
          Receba nossas novidades!
        </h2>

        <p>
          Cadastre seu e-mail e receba atualizações,
          ofertas e novidades da ShopNow.
        </p>

        <form onSubmit={cadastrarEmail}>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />

          <button type="submit">
            Inscrever-se
          </button>

        </form>

        {mensagem && (
          <p className="newsletter-mensagem">
            {mensagem}
          </p>
        )}

      </section>

      <Footer />
    </>
  );
}

export default RodapeNewsletter;