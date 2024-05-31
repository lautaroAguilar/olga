"use client";
import Card from "@/components/Card/Card";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/soñe-que-volaba.png";
import Cloud from "@/components/Cloud/Cloud";
import { Clouds } from "@/components/Clouds/Clouds";
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

export default function Home() {
  return (
    <CustomMain>
      <Image src={logo} alt="Logo de Olga" style={{ zIndex: 50 }} />
      <Card />

      {Clouds.map((cloud) => (
        <Cloud key={cloud.id} style={cloud.styles} />
      ))}
    </CustomMain>
  );
}
