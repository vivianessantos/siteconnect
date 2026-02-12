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
            src="https://media.licdn.com/dms/image/v2/D4D03AQFOGyZhBrvFVA/profile-displayphoto-shrink_200_200/B4DZb1yjKPHEAY-/0/1747880391777?e=1771459200&v=beta&t=GCNM_4NFa2aoXwiTfIj07ADebG_8Hiaj5d4cLiXDP0E"
            alt="Imagem do perfil do usuário"
          />
        </div>

        <div>
          <h1>Viviane Santos</h1>
          <h2 className={s.status}>Voluntário Ativo</h2>

          <p>
            Tenho vontade de contribuir para um mundo mais justo e colaborativo. Acredito que o voluntariado é uma forma de aprender, compartilhar experiências e ajudar pessoas a alcançarem novas oportunidades.
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