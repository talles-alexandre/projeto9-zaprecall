import { useState } from "react";
import styled from "styled-components";
import seta_play from "../../assets/img/seta_play.png";
import seta_virar from "../../assets/img/seta_virar.png";
import certo from "../../assets/img/icone_certo.png";
import erro from "../../assets/img/icone_erro.png";
import quase from "../../assets/img/icone_quase.png";

export default function Flashcard(props) {
  const { pergunta, resposta, indice, aoResponder } = props;

  const [estado, setEstado] = useState({ fase: 0, resultado: "" });
  const { fase, resultado } = estado;
  const botoes = [
    { texto: "Não lembrei", resultado: "erro" },
    { texto: "Quase não lembrei", resultado: "quase" },
    { texto: "Zap!", resultado: "certo" },
  ];

  function renderizarFlashCards() {
    if (fase === 0) {
      return (
        <Container>
          <div className="pergunta-fechada">
            <p onClick={() => setEstado({ ...estado, fase: 1 })}>
              Pergunta {indice}
            </p>
            <img src={seta_play} />
          </div>
        </Container>
      );
    }

    if (fase === 1) {
      return (
        <Container>
          <div className="pergunta-aberta">
            <p> {pergunta}</p>
            <img
              onClick={() => setEstado({ ...estado, fase: 2 })}
              src={seta_virar}
            />
          </div>
        </Container>
      );
    }

    if (fase === 2) {
      return (
        <Container>
          <div className="pergunta-aberta1">
            <p>{resposta}</p>
            <div className="container-botoes">
              {botoes.map(({ texto, resultado }) => {
                return (
                  <button
                    key={resultado}
                    className={resultado}
                    onClick={() => {
                      setEstado({ fase: 3, resultado });
                      aoResponder(resultado);
                    }}
                  >
                    {texto}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      );
    }

    if (fase === 3) {
      return (
        <Container>
          <div className="pergunta-fechada finalizada">
            <p className={resultado}>Pergunta {indice}</p>
            <img src={resultado} />
          </div>
        </Container>
      );
    }
  }

  const renderFlashCard = renderizarFlashCards();
  return <div className="container">{renderFlashCard}</div>;
}
const Container = styled.div`
  overflow: auto;

  .pergunta-fechada.finalizada p {
    text-decoration: line-through;
  }
  .pergunta-fechada.finalizada p.quase {
    color: #ff922e;
  }
  .pergunta-fechada.finalizada p.certo {
    color: #2fbe34;
  }
  .pergunta-fechada.finalizada p.erro {
    color: #ff3030;
  }

  .pergunta-fechada {
    margin-top: 50px;
    width: 300px;
    height: 35px;
    background-color: #ffffff;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pergunta-fechada > p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  .pergunta-aberta {
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }

  .pergunta-aberta > img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .pergunta-aberta1 {
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #ffffd5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
  }
  .container-botoes {
    display: flex;
  }
  .container-botoes button {
    margin-left: 3px;
    margin-top: 65px;
    margin-bottom: 0;
    color: #ffffff;
    width: 85px;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-family: "Recursive";
    font-size: 12px;
  }
  .container-botoes button.erro {
    background-color: #ff3030;
  }
  .container-botoes button.quase {
    background-color: #ff922e;
  }
  .container-botoes button.certo {
    background-color: #2fbe34;
  }
`;
