import {useState} from "react";

function Footer(){
  const[email, setEmail] = useState("");
  const[mensagem, setMensagem] = useState("");

  function assinarNewsletter(e) {
    e.preventDefault();

    if (!email.trim()) {
      setMensagem("Digite um e-mail para assinar newsletter.");
      return;
    }

    setMensagem("Inscrição realizada com sucesso!");
    setEmail("");
  }

  return (
    <footer>
      <div className="newsletter">
        <h2>Receba nossas novidades</h2>
        <p>Cadastre seu e-mail e fique por dentro das novidades, ofertas e lançamentos da VirtualShop.</p>
        <form onSubmit={assinarNewsletter}>
          <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit"> Assinar </button>
        </form>
        {mensagem && (<p className="newsletter-mensagem">{mensagem}</p>)}
      </div>
      <hr />
      <div className="footer-conteudo">
        <div className="footer-logo">
          🛍️VirtualShop
        </div>
        <p>Sua loja virtual de tecnologia, acessórios e muito mais.</p>
        <div className="footer-links">
          <a href="#">Sobre nós</a>
          <a href="#">Atendimento</a>
          <a href="#">Privacidade</a>
          <a href="#">Termos de uso</a>
          <a href="#">Contato</a>
        </div>
      </div>
      <hr />
      <small>
        © 2026 VirtualShop. Todos os direitos reservados.
      </small>
    </footer>
  );
}

export default Footer;