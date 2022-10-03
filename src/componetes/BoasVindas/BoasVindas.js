import { useState } from "react";
import Logo from "../../assets/img/logo.png";
import styled from "styled-components";

export default function BoasVindas() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Container>
        <div>
          <img src={Logo} />
          <h1>ZapRecall</h1>
          <button onClick={() => setShow(false)}>Iniciar Recall!</button>
        </div>
      </Container>
    );
  }

  return <></>;
}
const Container = styled.div`
  background-color: #fb6b6b;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  align-items: center;
  justify-content: center;

  * {
    margin-bottom: 30px;
  }

  img {
    width: 136px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    color: white;
    margin-left: 50px;
  }
  button {
    width: 246px;
    height: 54px;
    padding: 16px 22px;
    border-radius: 5px;
    color: #d70900;
    border: 1px;
    font-size: 18px;
    cursor: pointer;
  }
`;
