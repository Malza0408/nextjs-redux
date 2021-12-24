import type { NextPage } from "next";
import styled, { css } from "styled-components";
// import { decreaseNum, increaseNum } from "../redux/modules/count";

interface StyledCricleProps {
  huge?: boolean;
}

const Circle = styled.div<StyledCricleProps>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.darkCyan || "aqua"};
    `;
  }}

  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const Home: NextPage = () => {
  return (
    <>
      <h1>테스트는 성공이에요!</h1>
      <Circle />
      <Circle huge />
    </>
  );
};

export default Home;
