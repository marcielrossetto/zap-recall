import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaExclamationCircle, FaBolt } from "react-icons/fa"; // Importando os ícones

export default function Flashcard({ question, answer, index, onRespond }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [status, setStatus] = useState(null); // null, "incorrect", "almost", "zap"

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleRespond = (response) => {
    setStatus(response);
    setIsFlipped(false); // Fecha o cartão
    onRespond(); // Atualiza o contador
  };

  return (
    <Card>
      {!isFlipped ? (
        <Front>
          {status ? (
            <Answered status={status}>Pergunta {index + 1}</Answered>
          ) : (
            <>
              <p>{question}</p> {/* Exibe o texto de "question" no início */}
              <button onClick={handleFlip}>Play</button>
            </>
          )}
        </Front>
      ) : (
        <Back>
          <p>{answer}</p> {/* Exibe a resposta ao virar a carta */}
          {status ? (
            <Answered status={status}>Pergunta {index + 1}</Answered>
          ) : (
            <Actions>
              <button onClick={() => handleRespond("incorrect")}>
                <FaTimes /> Não lembrei
              </button>
              <button onClick={() => handleRespond("almost")}>
                <FaExclamationCircle /> Quase
              </button>
              <button onClick={() => handleRespond("zap")}>
                <FaBolt /> Zap!
              </button>
            </Actions>
          )}
        </Back>
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
`;

const Front = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Answered = styled.p`
  text-decoration: ${({ status }) =>
    status === "incorrect"
      ? "line-through"
      : status === "almost"
      ? "underline"
      : "none"};
  color: ${({ status }) =>
    status === "incorrect"
      ? "#FF3030"
      : status === "almost"
      ? "#FF922E"
      : "#2FBE34"};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button:hover {
    opacity: 0.8;
  }
`;

