import React from "react";
import styled from "styled-components";

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
`;
const CustomOption = styled.li`
  background: #f79310;
  list-style: none;
  width: 100%;
  display: inline-block;
  padding: 1rem;
  border-radius: 4px;
  background: #70b2d4;
`;
const CustomTitle = styled.h2`
  font-size: 28px;
  text-align: center;
`;
const ContainerOptions = styled.div`
  width: 100%;
`;
const CustomOptionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function Card() {
  return (
    <CustomCard>
      <CustomTitle>Title</CustomTitle>
      <ContainerOptions>
        <CustomOptionList>
          <CustomOption>option 1</CustomOption>
          <CustomOption>option 2</CustomOption>
          <CustomOption>option 3</CustomOption>
          <CustomOption>option 4</CustomOption>
        </CustomOptionList>
      </ContainerOptions>
    </CustomCard>
  );
}
