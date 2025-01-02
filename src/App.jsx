import React, { useState } from "react";
import styled from "styled-components";
import Flashcard from "./components/Flashcard";

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
  ];

  const [answeredCount, setAnsweredCount] = useState(0);

  const handleRespond = () => {
    setAnsweredCount((prev) => prev + 1);
  };

  return (
    <Container>
      <Header>Zap Recall</Header>
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
  background-color: #FBFBFB;
  min-height: 100vh;
`;

const Header = styled.h1`
  margin: 20px;
  color: #FF922E;
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
