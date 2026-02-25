import S from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import pfEscola from "../../assets/imagens/pfEscola.png";
import reciclagem from "../../assets/imagens/reciclagem.png";
import inclusao from "../../assets/imagens/inclusao.png";

const Voluntariado = () => {
  return (
    <main className={S.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard
            img={reciclagem}
            alt="Imagem de pessoas mexendo no computador"
            subtitulo="Mutirão de reciclagem"
            paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={pfEscola}
            alt="Imagem de livros em uma biblioteca"
            subtitulo="Aulas de Tecnologia"
            paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={inclusao}
            alt="Imagem de jovens consertando computador"
            subtitulo="Esporte e Inclusão"
            paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            textoBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
};

export default Voluntariado;
