import Form from "./form";
import style from "./styles.module.css";
export default function login() {

    return (
        <div>
            <header>
                <img src="/Logo.png"></img>
            </header>
            <div className={style.form_content}>
                <div className={style.welcome}>
                    <h2>
                        Seja Bem-Vindo!
                    </h2>
                    <p>
                        Vamos começar? <span>Faça Login</span> para explorar
                        todos os recursos exclusivos!
                    </p>
                </div>
                <Form />
            </div>
        </div>
    );
}
