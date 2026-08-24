import "../App.css" 

export default function Header({busca, setBusca, quantidadeCarrinho, abrirCarrinho,logout}){
    return(
        <header className="header"> 
            <div className="logo">
                 🛍️ ShopNow

                 <div className="barra-pesquisa">
                    <input
                        type="text"
                        placeholder="O que você está procurando?"
                        value={busca}
                        onChange={(e=> setBusca(e.target.value))}                                                   
                    />

                    <button>
                        🔍
                    </button>

                 </div>
                 <div className="acoes-header">
                    <button header-button>
                        👤
                        <span>
                           Olá. admin 
                        </span>
                    </button>

                    <button className="header-button" onClick={abrirCarrinho}>
                         🛒
                         {quantidadeCarrinho > 0 && (
                            <span className="contador"> 
                                {quantidadeCarrinho}
                            </span>
                         )}
                    </button>
                    <button onClick= {logout} className="logout">
                        Sair
                    </button>
                 </div>
            </div>
        </header>
    );
}