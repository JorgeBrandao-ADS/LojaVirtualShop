import '../App.css';
import { Categorias } from '../Services/Api';
import { useEffect, useState } from 'react';

export default function NavBar({
  busca,
  setBusca,
  quantidadeCarrinho,
  abrirCarrinho,
  logout,
  setCategoria,
  setOfertas,
}) {
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    const carregarCategorias = async () => {
      const dados = await Categorias();
      if (dados) {
        setListaCategorias(dados);
      }
    };
    carregarCategorias();
  }, []);

  return (
    <nav className="header">
      <div
        className="logo"
        onClick={() => {
          setCategoria('Todos');
          setBusca('');
        }}
      >
        🛍️ VirtualShop
      </div>

      <div className="barra-pesquisa">
        <input
          type="text"
          placeholder="O que você está procurando?"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button>🔍</button>
      </div>

      <ul className="Menu-Principal">
        <li className="Dropdown">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategoria('Todos');
            }}
          >
            Categorias ▾
          </a>
          <ul className="dropdown-conteudo">
            {listaCategorias.map((categoria, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOfertas(false);
                    setCategoria(categoria);
                  }}
                >
                  {categoria}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <a href="#">Contato</a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOfertas(true);
              setCategoria('Todos');
              setBusca('');
            }}
          >
            Ofertas
          </a>
        </li>

        <li className="Dropdown">
          <a href="#">Conta ▾</a>
          <ul className="dropdown-conteudo">
            <li>
              <a href="#">Minha Conta</a>
            </li>
            <li onClick={logout} className="btn-logout">
              <a href="#">Sair</a>
            </li>
          </ul>
        </li>
      </ul>

      <button className="header-button" onClick={abrirCarrinho}>
        {' '}
        🛒
        {quantidadeCarrinho > 0 && (
          <span className="contador">{quantidadeCarrinho}</span>
        )}
      </button>
    </nav>
  );
}
