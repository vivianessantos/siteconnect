import S from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import igFamilia from "../../assets/imagens/igFamilia.png";
import pfEscola from "../../assets/imagens/pfEscola.png";
import icJovem from "../../assets/imagens/icJovem.png";

const Doacao = () => {
  return (
    <main className={S.main}>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
            img={igFamilia}
            alt="Imagem de uma pessoa carregando uma caixa com varios alimentos para doação"
            subtitulo="Instituto grande familia"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={pfEscola}
            alt="Imagem de livros em uma biblioteca"
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={icJovem}
            alt="Imagem de jovens consertando computador"
            subtitulo="Instituto Conecta Jovem"
            paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            textoBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
};

export default Doacao;
