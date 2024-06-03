import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  background: #f79310;
  width: 100%;
  display: inline-block;
  padding: 1rem;
  border-radius: 4px;
  border: none;
  background: #70b2d4;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      cursor: pointer;
      background: #0087bf;
    }
  }
  &:active {
    background: #005994;
  }
`;
export default function Button({ onClick, text, secondary }) {
  return (
    <CustomButton
      onClick={onClick}
      style={{
        background: secondary ? "transparent" : "",
        color: secondary ? "#F79310" : "",
        border: secondary ? "1px solid #F79310" : ""
      }}
    >
      {text}
    </CustomButton>
  );
}
