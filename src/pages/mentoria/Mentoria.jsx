

import S from "../Style.module.scss"
import InfoCard from "../../components/infoCard/InfoCard"
import imgMentoria from "../../assets/imagens/mentoria.png"
import Experiencia from "../../assets/imagens/experiencia.png"
import Acompanhamento from "../../assets/imagens/acompanhamento.png" 

const Mentoria = () => {
  return (
    <main className={S.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
          img= {imgMentoria}
          alt= "Imagem de mãos gesticulando, documentos em uma mesa"
          subtitulo= "Mentoria de Carreira e Emprego"
          paragrafo= "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
          textoBotao= "Quero Participar"
          />
        </article>
        <article>
            <InfoCard
            img= {Experiencia}
          alt= "Imagem de um grupo de pessoas olhando para o computador"
          subtitulo= "Compartilhe Experiência"
          paragrafo= "Oriente jovens e profissionais iniciantes em sua área."
          textoBotao= "Quero Participar"
          />
        </article>
        <article>
            <InfoCard
          img= {Acompanhamento}
          alt= "Imagem de duas pessoas, uma delas mostrando algo no notebook"
          subtitulo= "Acompanhamento"
          paragrafo= "Participe como guia em jornadas de aprendizado e desenvolvimento."
          textoBotao= "Quero Participar" 
          />
        </article>
      </section>
    </main>
  )
}

 export default Mentoria


