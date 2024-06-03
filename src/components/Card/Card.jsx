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
    const selectedOption = e.target;
    const correctOption = Array.from(selectedOption.parentNode.children).find(
      (option) =>
        option.textContent ===
        questions[currentQuestion].options.find((option) => option.correct).text
    );

    if (correct) {
      setScore(score + 1);
    }

    selectedOption.style.background = correct ? "green" : "red";
    correctOption.style.background = "green";
    setIsDisabled(true);
    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setIsFinished(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsDisabled(false);
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
          <CustomOptionList>
            <CustomP>¿Querés jugar de vuelta?</CustomP>
            {/* Falta la img de resultado */}
            <ContainerScore>
              <Button
                text={"No"}
                onClick={() => {
                  console.log("salir")
                }}
                secondary
              />
              <Button
                text={"Si, mi brooodi"}
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
                  disabled={isDisabled}
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
