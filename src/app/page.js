"use client"
import Card from "@/components/Card/Card";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/soñe-que-volaba.png"
const CustomMain = styled.main`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #016CB2;
  padding: 2rem;
`;

export default function Home() {
  return (
    <CustomMain>
      <Image src={logo} alt="hola olga"/>
      <Card />
    </CustomMain>
  );
}
