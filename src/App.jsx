import { useEffect, useState } from "react";

import produtos from "./data/produtos";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import ListaProdutos from "./components/ListaProdutos";
import Carrinho from "./components/Carrinho";
import Beneficios from "./components/Beneficios";
import Footer from "./components/Footer";

function App() {

  // ==========================================
  // ESTADO DO LOGIN
  // ==========================================

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const fazerLogin = (tokenObtido) => {
    setToken(tokenObtido);
  }


  // ==========================================
  // ESTADO DO CARRINHO
  // ==========================================

  const [carrinho, setCarrinho] =
    useState([]);

  // ==========================================
  // ESTADO DA BUSCA
  // ==========================================

  const [busca, setBusca] =
    useState("");

  // ==========================================
  // ESTADO DA CATEGORIA
  // ==========================================

  const [categoria, setCategoria] =
    useState("Todos");

  // ==========================================
  // ABRIR/FECHAR CARRINHO
  // ==========================================

  const [mostrarCarrinho, setMostrarCarrinho] =
    useState(false);


  // ==========================================
  // USEEFFECT - CARREGAR CARRINHO
  // ==========================================

  useEffect(() => {

    const carrinhoSalvo =
      localStorage.getItem("carrinho");

    if (carrinhoSalvo) {

      setCarrinho(
        JSON.parse(carrinhoSalvo)
      );

    }

  }, []);

  // ==========================================
  // USEEFFECT - SALVAR CARRINHO
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

  }, [carrinho]);

  // ==========================================
  // ADICIONAR PRODUTO
  // ==========================================

  function adicionarCarrinho(produto) {

    const produtoExistente =
      carrinho.find(
        item => item.id === produto.id
      );

    if (produtoExistente) {

      setCarrinho(

        carrinho.map(item =>

          item.id === produto.id

            ? {
                ...item,
                quantidade:
                  item.quantidade + 1
              }

            : item

        )

      );

    } else {

      setCarrinho([

        ...carrinho,

        {
          ...produto,
          quantidade: 1
        }

      ]);

    }

  }

  // ==========================================
  // ALTERAR QUANTIDADE
  // ==========================================

  function alterarQuantidade(
    id,
    valor
  ) {

    setCarrinho(

      carrinho
        .map(item => {

          if (item.id === id) {

            return {

              ...item,

              quantidade:
                item.quantidade + valor

            };

          }

          return item;

        })

        .filter(
          item => item.quantidade > 0
        )

    );

  }

  // ==========================================
  // REMOVER PRODUTO
  // ==========================================

  function removerProduto(id) {

    setCarrinho(

      carrinho.filter(
        item => item.id !== id
      )

    );

  }

  // ==========================================
  // LOGOUT
  // ==========================================

  function logout() {

    localStorage.removeItem(
      "token"
    );

    setToken(null);

  }

  // ==========================================
  // FILTRAR PRODUTOS
  // ==========================================

  const produtosFiltrados =
    produtos.filter((produto) => {

      const correspondeBusca =
        produto.nome
          .toLowerCase()
          .includes(
            busca.toLowerCase()
          );

      const correspondeCategoria =
        categoria === "Todos" ||
        produto.categoria === categoria;

      return (
        correspondeBusca &&
        correspondeCategoria
      );

    });

  // ==========================================
  // QUANTIDADE DO CARRINHO
  // ==========================================

  const quantidadeCarrinho =
    carrinho.reduce(
      (total, item) =>
        total + item.quantidade,
      0
    );

  // ==========================================
  // SE NÃO ESTIVER LOGADO
  // ==========================================

  if (!token) {

    return (

      <Login
        // onLogin={() =>
        //   setToken("some-token")
        // }
        loginEnviado={fazerLogin}
      />

    );

  }

  // ==========================================
  // LOJA
  // ==========================================

  return (

    <>

      <NavBar

        busca={busca}

        setBusca={setBusca}

        quantidadeCarrinho={
          quantidadeCarrinho
        }

        abrirCarrinho={() =>
          setMostrarCarrinho(true)
        }

        logout={logout}

      />

      <Banner />

      <Categorias

        categoria={categoria}

        setCategoria={setCategoria}

      />

      <ListaProdutos

        produtos={produtosFiltrados}

        adicionarCarrinho={
          adicionarCarrinho
        }

      />

      <Beneficios />

      <Footer />

      {mostrarCarrinho && (

        <Carrinho

          carrinho={carrinho}

          alterarQuantidade={
            alterarQuantidade
          }

          removerProduto={
            removerProduto
          }

          fecharCarrinho={() =>
            setMostrarCarrinho(false)
          }

        />

      )}

    </>

  );
}

export default App;
