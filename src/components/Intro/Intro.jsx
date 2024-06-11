"use client";
import React, { useState } from "react";
import styles from "./Intro.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export default function Intro() {
  //const { setIntroduction } = useAppContext();;
  const router = useRouter();
  const handleEasy = () => {
    const level = "easy";
    router.push(`/game?level=${level}`);
  };
  const handleMedium = () => {
    const level = "medium";
    router.push(`/game?level=${level}`);
  };
  const handleHard = () => {
    const level = "hard";
    router.push(`/game?level=${level}`);
  };
  return (
    <div className={styles.intro}>
      <div className={styles.containerY}>
        <h2 className={styles.title}>Bienvenido a SQV Quiz</h2>
        <p className={styles.paragraph}>
          Este es un juego de preguntas y respuestas sobre Soñé Que Volaba.
          Demostrá cuanto sabes del show en los distintos niveles de juego.
        </p>
      </div>
      <div className={styles.containerY}>
        <Button
          text={"Nivel Fácil"}
          style={{
            border: "1.5px solid #5AF710",
            background: "transparent",
            color: "#5AF710",
            fontWeight: "600",
            textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
          }}
          onClick={() => handleEasy()}
        />
        <Button
          text={"Nivel Medio"}
          style={{
            border: "1.5px solid #F79310",
            background: "transparent",
            color: "#F79310",
            fontWeight: "600",
            textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
          }}
          onClick={() => handleMedium()}
        />
        <Button
          text={"Nivel Difícil"}
          style={{
            border: "1.5px solid #F71010",
            background: "transparent",
            color: "#F71010",
            fontWeight: "600",
            textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
          }}
          onClick={() => handleHard()}
        />
      </div>
    </div>
  );
}
