import style from "../home/styles.home.css"
export default function home() {
    return (
        <main>
            {/* DIV GERAL - CONTAINER */}
            <div className={style.container}>

                {/* ICONE EDUMATCH */}
                <div>
                    <img src="/Hat.svg" className={style.hat}></img>
                </div>

                {/* DIV DOS ICONES */}
                <div>

                    {/* OPÇÃO USUARIOS */}
                    <div>
                        <h2>Usuários</h2>
                        {/* LISTA DAS OPÇÕES */}
                        <ul>
                            <li>Cadastro de usuários</li>
                            <li>Acompanhamento de alunos</li>
                            <li>Acompanhamento de tutores</li>
                            <li>Acompanhamento de professores</li>
                        </ul>
                    </div>

                    {/* OPÇÃO ESTATÍSTICAS */}
                    <div>
                        <h3>Estatísticas</h3>
                        {/* LISTA DAS OPÇÕES */}
                        <ul>
                            <li>Estatísticas de alunos</li>
                            <li>Estatísticas de tutores</li>
                            <li>Estatísticas de matérias</li>
                        </ul>
                    </div>

                    {/* OPÇÃO CONTEÚDOS */}
                    <div>
                        <h4>Conteúdos</h4>
                        {/* LISTA DAS OPÇÕES */}
                        <ul>
                            <li>Adicionar matérias</li>
                            <li>Adicionar artigos</li>
                            <li>Adicionar livros</li>
                            <li>Adicionar trabalhos</li>
                        </ul>
                    </div>

                    {/* OPÇÃO CONFIGURAÇÕES */}
                    <div>
                        <h5>Configurações</h5>
                        {/* LISTA DAS OPÇÕES */}
                        <ul>
                            <li>Adicionar matérias</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}