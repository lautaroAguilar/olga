"use client";
import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { questions } from "@/questions";
import dudoso from "../../../public/dudoso.png";
import collab from "../../../public/collab.png";
import Button from "../Button/Button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

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
    }, 1500);
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
    <div className={styles.card}>
      {isFinished ? (
        /*  */
        <>
          <h2 className={styles.title}>
            Hiciste {score} {score === 1 ? "punto" : "puntos"}
          </h2>
          {score > 3 ? (
            <div className={styles.image}>
              <Image
                src={collab}
                alt={"Imagen de Collab BRO"}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ) : (
            <div className={styles.image}>
              <Image
                src={dudoso}
                alt={"Imagen de DUDOOOSO"}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          )}
          <div className={styles.score}>
            <Button
              text={"Finalizar"}
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.title}>
            {questions[currentLevel][currentQuestion].title}
          </h2>
          <div className={styles.options}>
            <div className={styles.score}>
              <p className={styles.paragraph}>Puntuación {score}</p>
              <p className={styles.paragraph}>
                {currentQuestion + 1} / {questions[currentLevel].length}
              </p>
            </div>
            <div className={styles.optionsList}>
              {questions[currentLevel][currentQuestion].options.map(
                (question) => (
                  <Button
                    key={question.text}
                    onClick={(e) => handleAnswered(question.correct, e)}
                    text={question.text}
                  />
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
