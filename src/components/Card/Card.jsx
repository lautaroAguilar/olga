"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { questions } from "@/questions";
import dudoso from "../../../public/dudoso.png";
import collab from "../../../public/collab.png";
import Button from "../Button/Button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

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
const ContainerImage = styled.div`
  width: 100%;
  height: auto;
  @media (min-width: 380px){
    width: 70%;
  }
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
  const router = useRouter();
  const [currentLevel, setCurrentLevel] = useState("easy");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const searchParams = useSearchParams();

  const handleAnswered = (correct, e) => {
    if (isDisabled) {
      return;
    }

    setIsDisabled(true);
    /* get options and set color for correct question and the others */
    const selectedOption = e.target;
    const options = Array.from(selectedOption.parentNode.children);

    options.forEach((option) => {
      const isCorrect = questions[currentLevel][currentQuestion].options.find(
        (opt) => opt.text === option.textContent
      ).correct;
      if (isCorrect) {
        option.style.background = "#5AF710";
      } else {
        option.style.background = "#CEE4F1";
      }
    });
    /* set colors for correct and incorrect questions */
    if (correct) {
      setScore(score + 1);
      selectedOption.style.background = "#5AF710";
    } else {
      selectedOption.style.background = "#F71010";
    }

    setTimeout(() => {
      if (currentQuestion === questions[currentLevel].length - 1) {
        setIsFinished(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsDisabled(false);
      }
    }, 3000);
  };
  /* get level questions */
  useEffect(() => {
    const level = searchParams.get("level");
    if (level && questions[level]) {
      setCurrentLevel(level);
    } else {
      /* set error and show error screen or something */
      console.error("Nivel no encontrado");
    }
  }, [searchParams]);

  return (
    <CustomCard>
      {isFinished ? (
        /*  */
        <>
          <CustomTitle>
            Hiciste {score} {score === 1 ? "punto" : "puntos"}
          </CustomTitle>
          {score > 3 ? (
            <ContainerImage>
              <Image src={collab} alt={"Imagen de Collab BRO"} style={{width: "100%", height: "auto"}}/>
            </ContainerImage>
          ) : (
            <ContainerImage>
              <Image src={dudoso} alt={"Imagen de DUDOOOSO"} style={{ width: "100%", height: "auto" }}/>
            </ContainerImage>
          )}
          <CustomOptionList>
            <ContainerScore>
              <Button
                text={"Finalizar"}
                onClick={() => {
                  router.push("/");
                }}
              />
            </ContainerScore>
          </CustomOptionList>
        </>
      ) : (
        <>
          <CustomTitle>
            {questions[currentLevel][currentQuestion].title}
          </CustomTitle>
          <ContainerOptions>
            <ContainerScore>
              <CustomP>Puntuación {score}</CustomP>
              <CustomP>
                {currentQuestion + 1} / {questions[currentLevel].length}
              </CustomP>
            </ContainerScore>
            <CustomOptionList>
              {questions[currentLevel][currentQuestion].options.map(
                (question) => (
                  <Button
                    key={question.text}
                    onClick={(e) => handleAnswered(question.correct, e)}
                    text={question.text}
                  />
                )
              )}
            </CustomOptionList>
          </ContainerOptions>
        </>
      )}
    </CustomCard>
  );
}
