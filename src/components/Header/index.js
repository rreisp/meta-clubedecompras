import './Header.css'

function Header() {
    return (
        <div class='navbar'>
            <ul>
                <li><a href="#home"><i class="fa fa-home"></i> Home</a></li>
                <li><a href="#news"><i class="fa fa-users"></i> Clubes</a></li>
                <li><a href="#register"><i class="fa fa-user-plus"></i> Cadastro</a></li>
                <li><a href="#signin"><i class="fa fa-sign-in-alt"></i> Entrar</a></li>
            </ul>
        </div>
    )
}

export default Header