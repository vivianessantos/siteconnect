import s from "./usuario.module.scss";
import { MdOutlinePlace } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFOGyZhBrvFVA/profile-displayphoto-shrink_400_400/B4DZb1yjKPHEAg-/0/1747880391777?e=1773273600&v=beta&t=VKgSuLyAzHBPS-VSwFE3cbgnKxC1YMZJx0pA8tppGiU"
            alt="Imagem do perfil do usuário"
          />
        </div>

        <div>
          <h1>Viviane Santos</h1>
          <h2 className={s.status}>Voluntário Ativo</h2>

          <p>
            Acredito que o voluntariado é uma forma de aprender, compartilhar
            experiências e ajudar pessoas a alcançarem novas oportunidades.
          </p>

          <ul className={s.infoList}>
            <li>
              <MdOutlinePlace className={s.icon} />
              Guarulhos, SP
            </li>
            <li>
              <FaRegEnvelope className={s.icon} />
              viviane@gmail.com
            </li>
            <li>
              <CiCalendar className={s.icon} />
              Membro desde Janeiro 2022
            </li>
          </ul>

          <div className={s.tags}>
            <span className={s.tag}>Educação</span>
            <span className={s.tag}>Inclusão Social</span>
            <span className={s.tag}>Comunidade</span>
            <span className={s.tag}>Sustentabilidade</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Usuario;
