import config from "../../config.json"

function Header(){
    return (
        <header>
            <img src="" alt="Foto de capa perfil" />
            <img src={`https://github.com/${config.github}.png`} alt="Foto de perfil" />
            {config.name}
            {config.job}
        </header>
    )
}

export default Header