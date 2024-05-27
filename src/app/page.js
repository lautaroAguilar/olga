"use client";
import Card from "@/components/Card/Card";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/soñe-que-volaba.png";
import Cloud from "@/components/Cloud/Cloud";
const CustomMain = styled.main`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #016cb2;
  padding: 2rem;
  position: relative;
`;
const Clouds = [
  {
    id: 1,
    styles: {
      position: "absolute",
      top: "10%",
      left: "60%",
      scale: "10%",
      zIndex: 10,
    },
  },
  {
    id: 2,
    styles: {
      position: "absolute",
      top: "90%",
      left: "50%",
      scale: "50%",
      zIndex: 10,
    },
  },
  {
    id: 3,
    styles: {
      position: "absolute",
      top: "70%",
      left: "1%",
      scale: "30%",
      zIndex: 10,
    },
  },
  {
    id: 4,
    styles: {
      position: "absolute",
      top: "90%",
      left: "10%",
      scale: "10%",
      zIndex: 10,
    },
  },
  {
    id: 5,
    styles: {
      position: "absolute",
      top: "50%",
      left: "85%",
      scale: "50%",
      zIndex: 10,
    },
  },
  {
    id: 6,
    styles: {
      position: "absolute",
      top: "10%",
      left: "15%",
      scale: "40%",
      zIndex: 10,
    },
  },
  {
    id: 7,
    styles: {
      position: "absolute",
      top: "25%",
      left: "60%",
      scale: "20%",
      zIndex: 10,
    },
  },
  {
    id: 8,
    styles: {
      position: "absolute",
      top: "48%",
      left: "10%",
      scale: "60%",
      zIndex: 10,
    },
  },
  {
    id: 9,
    styles: {
      position: "absolute",
      top: "75%",
      left: "75%",
      scale: "60%",
      zIndex: 10,
    },
  },
  {
    id: 10,
    styles: {
      position: "absolute",
      top: "50%",
      left: "45%",
      scale: "80%",
      zIndex: 10,
    },
  },
  {
    id: 11,
    styles: {
      position: "absolute",
      top: "30%",
      left: "-15%",
      scale: "80%",
      zIndex: 10,
    },
  },
  {
    id: 12,
    styles: {
      position: "absolute",
      top: "70%",
      left: "25%",
      scale: "45%",
      zIndex: 10,
    },
  },
  {
    id: 13,
    styles: {
      position: "absolute",
      top: "10%",
      left: "85%",
      scale: "55%",
      zIndex: 10,
    },
  },
];
export default function Home() {
  return (
    <CustomMain>
      <Image src={logo} alt="Logo de Olga" style={{zIndex: 50}}/>
      <Card />

      {Clouds.map((cloud) => (
        <Cloud style={cloud.styles} />
      ))}
    </CustomMain>
  );
}
