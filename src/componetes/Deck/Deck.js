import { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/img/logo.png";
import Flashcard from "../Flashcard/Flashcard";
export default function Deck() {
  const perguntas = [
    {
      Q: "O que é JSX?",
      R: "Uma extensão de linguagem do JavaScript",
    },
    {
      Q: "O React é __",
      R: "uma biblioteca JavaScript para construção de interfaces",
    },

    { Q: "Componentes devem iniciar com __", R: "letra maiúscula" },

    { Q: "Podemos colocar __ dentro do JSX", R: "expressões" },

    {
      Q: "O ReactDOM nos ajuda __",
      R: "interagindo com a DOM para colocar componentes React na mesma",
    },

    {
      Q: "Usamos o npm para __",
      R: "gerenciar os pacotes necessários e suas dependências",
    },

    {
      Q: "Usamos props para __",
      R: "passar diferentes informações para componentes",
    },

    {
      Q: "Usamos estado (state) para __",
      R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  const [respostas, setRespostas] = useState([]);

  return (
    <Container>
      <header>
        <img src={Logo} />
        <h1>ZapRecall</h1>
      </header>

      <div className="flashcard">
        {perguntas.map((p, indice) => {
          return (
            <Flashcard
              key={p.Q + indice}
              pergunta={p.Q}
              resposta={p.R}
              indice={indice + 1}
              aoResponder={(resposta) => setRespostas([...respostas, resposta])}
            />
          );
        })}
      </div>

      <footer>
        <p>
          {respostas.length}/{perguntas.length} Concluídos!
        </p>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 0;
  justify-content: center;
  align-items: center;
  overflow: auto;
  position: absolute;

  .flashcard {
    margin-top: 0px;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 36px;
    color: white;
    z-index: 1;
    padding: 20px;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
  }
  header img {
    width: 52px;
    height: 60px;
  }

  footer {
    width: 100%;
    min-height: 70px;
    padding: 26px 116px;
    font-size: 18px;
    background-color: white;
    color: black;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    position: fixed;
  }
`;
