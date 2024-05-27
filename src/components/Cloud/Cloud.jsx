import React from "react";
import styled from "styled-components";

const SmallCloud = styled.div`
  position: absolute;
  padding: 10px;
  animation: animateCloud 30s linear infinite;

  @keyframes animateCloud {
    0% {
        transform: translateX(-50%)
    }

    50% {
        transform: translateX(50%)
    }
    100% {
        transform: translateX(-50%)
    }
`;
const SmallBase = styled.div`
  position: relative;
  top: 50px;
  width: 300px;
  height: 20px;
  background: #ddd4d0;
  border-radius: 100px;
  /* background: radial-gradient(75% 110% at bottom, #ddd4d0 80%, #fff 100%); */
  background: linear-gradient(#fff, #ddd4d0 40%);
`;
const One = styled.div`
  content: "";
  position: absolute;
  top: -100px;
  left: 40px;
  width: 120px;
  height: 120px;
  background: #ddd4d0;
  border-radius: 50%;
  background: radial-gradient(
    100% 80% at bottom right,
    #ddd4d0 110%,
    #fff 130%
  );
  /* box-shadow: 100px -30px 0 30px #fff; */
`;
const Two = styled.div`
  content: "";
  position: absolute;
  top: -170px;
  left: 135px;
  width: 150px;
  height: 190px;
  background: #ddd4d0;
  border-top-left-radius: 45%;
  border-top-right-radius: 60%;
  border-bottom-right-radius: 40%;
  background: radial-gradient(75% 110% at bottom, #ddd4d0 85%, #fff 90%);
  /* background: linear-gradient( 145deg, #fff 10.5%, #ddd4d0 30%); */
`;
export default function Cloud({ style }) {
  return (
    <SmallCloud style={style}>
      <SmallBase>
        <One></One>
        <Two></Two>
      </SmallBase>
    </SmallCloud>
  );
}
