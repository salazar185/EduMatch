import style from "./styles.home.css"
export default function home() {
    return (
        <main>
            <nav class="sidenav">
                <header className={style.headerlogo}>
                    <img src="/Hat.svg"></img>
                </header>
                <div class="container">
                    <img src="/hat-home.svg"></img>
                    <ul class="main-buttons-1">
                        <li>
                            Usuários
                            <ul class="hidden">
                                <li>Cadastro de usuário</li>
                                <li>Acompanhamento de alunos</li>
                                <li>Acompanhamento de tutores</li>
                                <li>Acompanhamento de professores</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <img src="/statistic-home.svg"></img>
                    <ul class="main-buttons-2">
                        <li>

                            Estatísticas
                            <ul class="hidden">
                                <li>Estatísticas de alunos</li>
                                <li>Estatísticas de tutores</li>
                                <li>Estatísticas de matérias</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <img src="/book-home.svg"></img>
                    <ul class="main-buttons-3">
                        <li>

                            Matérias
                            <ul class="hidden">
                                <li>Adicionar matérias</li>
                                <li>Adicionar artigos</li>
                                <li>Adicionar livros</li>
                                <li>Adicionar trabalhos</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="container">
                    <img src="/engine-home.svg"></img>
                    <ul class="main-buttons-4">
                        <li>

                            Configurações
                            <ul class="hidden">
                                <li>Suporte</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </nav>
        </main >
    )
}