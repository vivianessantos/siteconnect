import s from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  return (
    <>
      <header className={s.header}>
        <Link to={"/"}>
          <img
            className={s.imgLogo}
            src={logo}
            alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        {!isMobile && (
          <nav className={s.nav}>
            <Link className={s.Link} to={"/doacao"}>
              Doação
            </Link>
            <Link className={s.Link} to={"/voluntariado"}>
              Voluntariado
            </Link>
            <Link className={s.Link} to={"/mentoria"}>
              Mentoria
            </Link>
            <Link className={s.Link} to={"/eventosEP"}>
              Eventos
            </Link>
          </nav>
        )}

        <img
          className={s.imgUser}
          src="https://media.licdn.com/dms/image/v2/D4D03AQFOGyZhBrvFVA/profile-displayphoto-shrink_400_400/B4DZb1yjKPHEAg-/0/1747880391777?e=1773273600&v=beta&t=VKgSuLyAzHBPS-VSwFE3cbgnKxC1YMZJx0pA8tppGiU"
          alt="Imagem do usuário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? s.navUser : s.closedNavUser}>
        <Link to={"/usuario"}  onClick={() => setMenuAberto(false)}>Viviane Santos</Link>
        <Link  onClick={() => setMenuAberto(false)}>Meu voluntariado</Link>
        <Link  onClick={() => setMenuAberto(false)}>Configurações da conta</Link>
        {isMobile && (
          <div>
            <Link className={s.Link} to={"/doacao"}  onClick={() => setMenuAberto(false)}>
              Doação
            </Link>
            <Link className={s.Link} to={"/voluntariado"}  onClick={() => setMenuAberto(false)}>
              Voluntariado
            </Link>
            <Link className={s.Link} to={"/mentoria"}  onClick={() => setMenuAberto(false)}>
              Mentoria
            </Link>
            <Link className={s.Link} to={"/eventosEP"}  onClick={() => setMenuAberto(false)}>
              Eventos
            </Link>
          </div>
        )}
        <Link  onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
};

export default Header;
