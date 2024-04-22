"use client";
import axios from "axios";
import style from "./styles.module.css";
export default function login() {
    const nome = "Selipe"
    const submit = async() => {
        console.log("Meu nome é", nome)
        try{
            const data = await axios.get("https://swapi.py4e.com/api/people");
            console.log(data)
        } 
        catch (error){
            console.log (error)
        }
    }
    return (
        <main>
            <form action={() => submit()} className={style.form}>

                {/* <!-- TÍTULO DA DIV --> */}
                <div className={style.login}>
                    <h2>Login</h2>
                </div>

                {/* <!-- DIV DE USUARIO --> */}
                <div className={style.input_box_1}>
                    {/* <!-- LABEL - ETIQUETA DO USUARIO --> */}
                    <label htmlFor="user">Usuário</label>
                    <input
                        id="user"
                        className={style.input_box_2}
                        type="text"
                        placeholder="Digite seu usuário"
                        required>
                    </input>
                </div>

                {/* <!-- DIV DA SENHA --> */}
                <div className={style.input_box_1}>
                    {/* <!-- LABEL - ETIQUETA DA SENHA --> */}
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        className={style.input_box_2}
                        type="password"
                        placeholder="Digite sua senha"
                        required>
                    </input>
                </div>

                <div className={style.remember_forgot}>
                    {/* <!-- BOTÃO LEMBRAR SENHA --> */}
                    <label>
                        <input type="checkbox"></input>
                        <b>Lembrar senha </b>

                    </label>

                    {/* <!-- BOTÃO ESQUECI A SENHA / BOTÃO LEMBRAR SENHA --> */}
                    <a href="#">Esqueci a senha</a>
                </div>

                {/* <!-- ENVIAR DADOS --> */}
                <div className={style.btn_send}>
                    <input type="submit" value="Entrar"></input>
                </div>
            </form>
        </main>
    );
}
