import React, { useState } from "react";
import styled from "styled-components";
import iconeCerto from "./assets/icone_certo.png"; // Caminho correto para a imagem
import iconeErrado from "./assets/icone_erro.png"; // Caminho correto para a imagem
import iconeQuase from "./assets/icone_quase.png"; // Caminho correto para a imagem
import iconePlay from "./assets/seta_play.png"; // Caminho correto para a imagem
import iconeVirar from "./assets/seta_virar.png"; // Caminho correto para a imagem

export default function Flashcard({ question, answer, index, onRespond }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [status, setStatus] = useState(null); // null, "incorrect", "almost", "zap"

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleStart = () => setHasStarted(true);

  const handleRespond = (response) => {
    setStatus(response);
    setIsFlipped(false); // Retorna ao estado inicial com status atualizado
    setHasStarted(false); // Volta para a frente inicial do cartão
    onRespond(); // Atualiza o contador
  };

  return (
    <Card>
      {!hasStarted ? (
        <Front>
          <QuestionContainer>
            <Answered status={status}>
              Pergunta {index + 1}
            </Answered>
            {status ? (
              <ImagePlaceholder
                src={
                  status === "incorrect"
                    ? iconeErrado
                    : status === "almost"
                    ? iconeQuase
                    : iconeCerto
                }
                alt="Estado da resposta"
              />
            ) : (
              <ImagePlaceholder
                src={iconePlay}
                alt="Play"
                onClick={handleStart}
              />
            )}
          </QuestionContainer>
        </Front>
      ) : (
        <>
          {!isFlipped ? (
            <Front>
              <QuestionContainer>
                <p>{question}</p>
                <ImagePlaceholder
                  src={iconeVirar}
                  alt="Virar"
                  onClick={handleFlip}
                />
              </QuestionContainer>
            </Front>
          ) : (
            <Back>
              <p>{answer}</p>
              <Actions>
                <button onClick={() => handleRespond("incorrect")}>
                 
                  Não lembrei
                </button>
                <button onClick={() => handleRespond("almost")}>
                 
                  Quase não lembrei
                </button>
                <button onClick={() => handleRespond("zap")}>
                  Zap!
                </button>
              </Actions>
            </Back>
          )}
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  align-items: center;
  min-height: 40px;
`;

const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ;
`;

const Answered = styled.span`
  text-decoration: ${({ status }) =>
    status === "incorrect" ? "line-through" : "none"};
  font-weight: bold;
  border-radius: 50px;
  color: ${({ status }) =>
    status === "incorrect"
      ? "#FF3030"
      : status === "almost"
      ? "#FF922E"
      : status === "zap"
      ? "#2FBE34"
      : "#000"};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 45px;
  width: 90px;
  font-size: 15px;
}

    &:hover {
      opacity: 0.8;
    
  }

  button:nth-child(1) {
    background-color: #ff3030;
    color: #fff;
  }

  button:nth-child(2) {
    background-color: #ff922e;
    color: #fff;
  }

  button:nth-child(3) {
    background-color: #2fbe34;
    color: #fff;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #FFFFFF;
  
  
`;

const ImagePlaceholder = styled.img`
  width: 20px;
  height: 23px;
  object-fit: contain;
  cursor: pointer;
  
`;
