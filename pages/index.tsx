import type { NextPage } from "next";
import styled, { css } from "styled-components";
// import { decreaseNum, increaseNum } from "../redux/modules/count";
import styles from "../styles/Home.module.css";

interface StyledCricleProps {
  huge: boolean;
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

const TestFontSize = styled.div`
  width: 100%;
  height: 100%;
`;

const customP = styled.p``;

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <>
      <Circle huge />
      <TestFontSize>
        <h1>H1 Almost before we knew</h1>
        <h2>H2 Almost before we knew</h2>
        <h3>H3 Almost before we knew</h3>
        <h4>H4 Almost before we knew</h4>
        <h5>H5 Almost before we knew</h5>
        <p>P Almost before we knew</p>
      </TestFontSize>
      <button>DefaultBtn</button>
    </>
    // </div>
  );
};

export default Home;
