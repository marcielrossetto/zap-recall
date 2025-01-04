import React, { useState } from "react";
import styled from "styled-components";
import Flashcard from "./Flashcard.jsx";
import logo from "./assets/logo.png"; 

function App() {
  const deck = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM" },
    { question: "Usamos o npm para __", answer: "gerenciar pacotes e dependências" },
    { question: "Usamos props para __", answer: "passar informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "renderizar informações atualizadas" },
    { question: "O que é um hook no React?", answer: "Uma função que permite acessar estado e ciclo de vida de um componente" },
  { question: "Qual é o propósito do método componentDidMount?", answer: "Executar código após o componente ser renderizado" },
  { question: "O que é uma chave (key) em um componente React?", answer: "Um identificador único para cada elemento em um array" },
  { question: "Qual é o benefício de usar o React Fragment?", answer: "Permite retornar múltiplos elementos de um componente sem precisar de um elemento pai" },
  ];

  const [answeredCount, setAnsweredCount] = useState(0);

  const handleRespond = () => {
    setAnsweredCount((prev) => prev + 1);
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Title>Zap Recall</Title>
      </Header>
      <MainContent>
        {deck.map((card, index) => (
          <Flashcard
            key={index}
            index={index}
            question={card.question}
            answer={card.answer}
            onRespond={handleRespond}
          />
        ))}
      </MainContent>
      <Footer>{answeredCount}/{deck.length} Concluídos</Footer>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FB6B6B;
  min-height: 100vh;
  width: 60vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  color: aliceblue;
`;

const Title = styled.h1`
  color: #FFF;
  font-size: 34px;
  font-family: Righteous;
font-size: 36px;
font-weight: 400;
line-height: 44.7px;
letter-spacing: -0.012em;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;

`;

const MainContent = styled.div`
  width: 90%;
  max-width: 500px;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 10px;
  background-color: #FF922E;
  color: #FFF;
  text-align: center;
  width: 100%;
`;

export default App;