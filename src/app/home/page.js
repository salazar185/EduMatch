import style from "./styles.home.css"
export default function home() {
    return (
        <nav class="sidenav">
            <ul class="main-buttons">
                <li>
                    <i class="fa fa-circle fa-2x"></i>
                    Usuários
                    <ul class="hidden">
                        <li>Cadastro de usuário</li>
                        <li>Acompanhamento de alunos</li>
                        <li>Acompanhamento de tutores</li>
                        <li>Acompanhamento de professores</li>
                    </ul>
                </li>
                <li>
                    <i class="fa fa-circle fa-2x"></i>
                    Estatísticas
                    <ul class="hidden">
                        <li>Estatísticas de alunos</li>
                        <li>Estatísticas de tutores</li>
                        <li>Estatísticas de matérias</li>
                    </ul>
                </li>
                <li>
                    <i class="fa fa-circle fa-2x"></i>
                    Matérias
                    <ul class="hidden">
                        <li>Adicionar matérias</li>
                        <li>Adicionar artigos</li>
                        <li>Adicionar livros</li>
                        <li>Adicionar trabalhos</li>
                    </ul>
                </li>
                <li>
                    <i class="fa fa-circle fa-2x"></i>
                    Configurações
                    <ul class="hidden">
                        <li>Suporte</li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}