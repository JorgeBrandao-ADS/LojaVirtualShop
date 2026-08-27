import { useEffect, useState } from "react";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias";
import Vitrine from "./components/Vitrine";
import CarrinhoLateral from "./components/CarrinhoLateral";
import Beneficios from "./components/Beneficios";
import Footer from "./components/Footer";

function App() {

  // ==========================================
  // ESTADO DO LOGIN
  // ==========================================

  const [token, setToken] =
    useState(localStorage.getItem("token") || null);

  function fazerLogin(tokenObtido) {
    setToken(tokenObtido);
  }


  // ==========================================
  // ESTADO DOS PRODUTOS
  // ==========================================

  const [produtos, setProdutos] = useState([]);


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
  // ESTADO DE CARREGAMENTO DOS PRODUTOS
  // ==========================================

  const [carregandoProdutos, setCarregandoProdutos] =
    useState(true);


  // ==========================================
  // ESTADO DE ERRO DOS PRODUTOS
  // ==========================================

  const [erroProdutos, setErroProdutos] =
    useState("");


  // ==========================================
  // BUSCAR PRODUTOS DA FAKESTORE API
  // ==========================================

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")

      .then(response => {

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }

        return response.json();

      })

      .then(dados => {

        setProdutos(dados);
        setCarregandoProdutos(false);

      })

      .catch(erro => {

        console.log("Erro ao buscar produtos:", erro);

        setErroProdutos(
          "Não foi possível carregar os produtos."
        );

        setCarregandoProdutos(false);

      });

  }, []);


  // ==========================================
  // CARREGAR CARRINHO DO LOCALSTORAGE
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
  // SALVAR CARRINHO NO LOCALSTORAGE
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

  }, [carrinho]);


  // ==========================================
  // ADICIONAR PRODUTO AO CARRINHO
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

  function alterarQuantidade(id, valor) {

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

    localStorage.removeItem("token");

    setToken(null);

  }


  // ==========================================
  // FILTRAR PRODUTOS
  // ==========================================

  const produtosFiltrados =
    produtos.filter((produto) => {

      const correspondeBusca =
        produto.title
          .toLowerCase()
          .includes(
            busca.toLowerCase()
          );

      const correspondeCategoria =
        categoria === "Todos" ||
        produto.category === categoria;

      return (
        correspondeBusca &&
        correspondeCategoria
      );

    });


  // ==========================================
  // QUANTIDADE TOTAL DO CARRINHO
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

        setCategoria={setCategoria}

      />


      <Banner />


      <Categorias

        categoria={categoria}

        setCategoria={setCategoria}

      />


      {carregandoProdutos ? (

        <div className="carregando">
          <h2>Carregando produtos...</h2>
        </div>

      ) : erroProdutos ? (

        <div className="erro-produtos">
          <h2>{erroProdutos}</h2>
        </div>

      ) : (

        <Vitrine

          produtos={produtosFiltrados}

          adicionarCarrinho={
            adicionarCarrinho
          }

        />

      )}


      <Beneficios />


      <Footer />


      {mostrarCarrinho && (

        <CarrinhoLateral

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