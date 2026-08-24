import {useState} from "react";
import "../App.css"

const usuarioCorreto = "admin";
const senhaCorreta = "123456";

export default function Login({onLogin}){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    function realizarLogin(event) {
        event.preventDefault();

        if(
            usuario === usuarioCorreto &&
            senha === senhaCorreta
        ){
            localStorage.setItem(
                "usuarioLogado",
                "true"
            );

            onLogin();

        } else{
            setErro("Usuário ou senha incorreto!");
        }
    }

return(
    <div className="login-page">
        <div className="login-card">
            <div className="login-logo">
                 🛍️
            </div>

            <h1>ShopNow</h1>

            <p className="login-subtitle">
                Sua loja online favorita    
            </p>

            <form onSubmit={realizarLogin}>
                <label>
                    Usuário
                </label>
                <input
                    type="text"
                    placeholder="Digite seu usuário"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />

                 <label>
                    Senha
                </label>
                <input
                    type="text"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                {erro && (
                    <p className="erro">{erro}</p>
                )}

                <button type = "submit" className="login-button">
                    Entrar
                </button>
            </form>
            <div className="login-info">
                <strong>
                    Login para teste
                </strong>

                <span>
                    Usuário: admin
                </span>

                <span>
                    Senha: 123456
                </span>
            </div>
        </div>
    </div>   
);
}