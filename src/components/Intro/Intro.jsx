"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
//import { useAppContext } from "@/context/useContext";

const CustomIntro = styled.div`
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
const CustomP = styled.p`
  font-size: 1rem;
  font-weight: 450;
  text-align: center;
`;
const CustomY = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function Intro() {
  //const { setIntroduction } = useAppContext();;
  const router = useRouter();
  const handleEasy = () => {
    console.log("nivel Fácil");
    const level = "fácil"
    router.push(`/game?level=${level}`);
  };
  const handleMedium = () => {
    console.log("nivel Medio");
    const level = "medio"
    router.push(`/game?level=${level}`);
  };
  const handleHard = () => {
    console.log("nivel Difícil");
    const level = "díficil"
    router.push(`/game?level=${level}`);
  };
  return (
    <CustomIntro>
      <CustomY>
        <CustomTitle>Bienvenido a SQV Quiz</CustomTitle>
        <CustomP>
          Este es un juego de preguntas y respuestas sobre Soñé Que Volaba.
          Demostrá cuanto sabes del show en los distintos niveles de juego.
        </CustomP>
      </CustomY>
      <CustomY>
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
      </CustomY>
    </CustomIntro>
  );
}
