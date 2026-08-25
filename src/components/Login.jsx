import {useState} from "react";
import "../App.css"



export default function Login({loginEnviado}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState("");

    async function realizarLogin(e) {
        e.preventDefault();

        const user = {
            username,
            password
        }

        const resposta = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        
        if (resposta.ok) {
            const dados = await resposta.json();
            const tokenObtido = dados.token;

            localStorage.setItem("token", tokenObtido);
            loginEnviado(tokenObtido);
            setErro("");
        } else {
            setErro("Usuário ou senha inválidos");
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                 <label>
                    Senha
                </label>
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {erro && (
                    <p className="erro">{erro}</p>
                )}

                <button type = "submit" className="login-button" onClick={realizarLogin}>
                    Entrar
                </button>
            </form>
            <div className="login-info">
                <strong>
                    Login para teste
                </strong>

                <span>
                    Usuário: mor_2314
                </span>

                <span>
                    Senha: 83r5^_
                </span>
            </div>
        </div>
    </div>   
);
}