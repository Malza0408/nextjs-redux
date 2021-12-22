import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
// import { decreaseNum, increaseNum } from "../redux/modules/count";
import styles from "../styles/Home.module.css";
import { RootState } from "../types/types";

interface StyledCricleProps {
  color: string;
  huge: boolean;
}

const Circle = styled.div<StyledCricleProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${(props) => props.color || "aqua"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

const BackgroundTheme = styled.div`
  width: 100%;
  height: 100rem;
  background-color: ${(props) => props.theme.black.backgroundColor};
`;

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    <>
      <BackgroundTheme />
      <Circle color="red" huge />
    </>
    // </div>
  );
};

export default Home;
