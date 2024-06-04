import React, { useState } from "react";
import styled from "styled-components";
import { questions } from "@/questions";
import Button from "../Button/Button";
const CustomCard = styled.div`
  width: 100%;
  height: 80%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #016cb2;
  border-radius: 20px;
  border: 10px solid #f79310;
  padding: 1rem;
  z-index: 100;
`;
const CustomOption = styled.li`
  list-style: none;
  width: 100%;
`;
const CustomTitle = styled.h2`
  font-size: 24px;
  text-align: center;
`;
const ContainerOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CustomOptionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const ContainerScore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const CustomP = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export default function Card() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswered = (correct, e) => {
    if (isDisabled) {
      return;
    }

    setIsDisabled(true);

    const selectedOption = e.target;
    const options = Array.from(selectedOption.parentNode.children);

    options.forEach((option) => {
      const isCorrect = questions[currentQuestion].options.find(
        (opt) => opt.text === option.textContent
      ).correct;
      if (isCorrect) {
        option.style.background = "#5AF710"; // Opción correcta en verde
      } else {
        option.style.background = "#CEE4F1"; // Opciones incorrectas en gris
      }
    });

    if (correct) {
      setScore(score + 1);
      selectedOption.style.background = "#5AF710"; // Opción seleccionada correcta en verde
    } else {
      selectedOption.style.background = "#F71010"; // Opción seleccionada incorrecta en rojo
    }

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setIsFinished(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsDisabled(false); // Volver a habilitar las opciones para la siguiente pregunta
      }
    }, 3000);
  };
  return (
    <CustomCard>
      {isFinished ? (
        <>
          <CustomTitle>
            Hiciste {score} {score === 1 ? "punto" : "puntos"}
          </CustomTitle>
          {/* foto de resultado */}
          <CustomOptionList>
            <ContainerScore>
              <Button
                text={"Finalizar"}
                onClick={() => {
                  setIsFinished(false);
                  setCurrentQuestion(0);
                }}
              />
            </ContainerScore>
          </CustomOptionList>
        </>
      ) : (
        <>
          <CustomTitle>{questions[currentQuestion].title}</CustomTitle>
          <ContainerOptions>
            <ContainerScore>
              <CustomP>Puntuación {score}</CustomP>
              <CustomP> {currentQuestion + 1} / 5</CustomP>
            </ContainerScore>
            <CustomOptionList>
              {questions[currentQuestion].options.map((question) => (
                <Button
                  key={question.text}
                  onClick={(e) => handleAnswered(question.correct, e)}
                  text={question.text}
                />
              ))}
            </CustomOptionList>
          </ContainerOptions>
        </>
      )}
    </CustomCard>
  );
}
