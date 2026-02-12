

import S from "../Style.module.scss"
import InfoCard from "../../components/InfoCard/infoCard"
import jovensFuturo from "../../assets/imagens/jovensFuturo.png"
import tecTransforma from "../../assets/imagens/tecTransforma.png"
import Acompanhamento from "../../assets/imagens/acompanhamento.png" 

const EventosEP = () => {
  return (
    <main className={S.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
          img= {jovensFuturo}
          alt= "Imagem de jovens sentados em circulo "
          subtitulo= "Empoderando Jovens para o Futuro"
          paragrafo= "Atividade: Palestra motivacional sobre liderança jovem e transformação social."
          segParagrafo="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
          textoBotao= "Quero Participar"
          />
        </article>
        <article>
            <InfoCard
            img= {tecTransforma}
          alt= "Imagem de um grupo de pessoas olhando para o computador"
          subtitulo= "Tecnologia que Transforma"
          paragrafo= "Atividade: Workshop de introdução à programação e inovação digital."
          segParagrafo= "Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
          textoBotao= "Quero Participar"
          />
        </article>
        <article>
            <InfoCard
          img= {Acompanhamento}
          alt= "Imagem de duas pessoas, uma delas mostrando algo no notebook"
          subtitulo= "Carreira e Primeiro Emprego"
          paragrafo= "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
          segParagrafo= "Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
          textoBotao= "Quero Participar" 
          />
        </article>
      </section>
    </main>
  )
}

 export default EventosEP


