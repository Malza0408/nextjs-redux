import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseNum, increaseNum } from "../redux/modules/count";
// import { RootState } from "../redux/modules";
// import { decreaseLike, increaseLike } from "../redux/modules/count";
import styles from "../styles/Home.module.css";
import { RootState } from "../types/types";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const value = useSelector<RootState, number>((state) => state.counter.value);

  const increase = useCallback(() => {
    dispatch(increaseNum());
  }, [dispatch]);

  const decrease = useCallback(() => {
    dispatch(decreaseNum());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <div>{value}</div>
    </div>
  );
};

export default Home;
