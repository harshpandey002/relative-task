/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        <img src="https://i.imgur.com/Bpsl1JM.png" alt="" />
        <p>Trending Assets</p>
      </span>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src="https://i.imgur.com/clW2k6S.png"
        alt=""
      />

      <div className={styles.icon}>
        <img src="https://i.imgur.com/CJJ9386.png" alt="" />
      </div>

      <div className={styles.cardContent}>
        <p id={styles.token}>Bitcoin (BTC)</p>
        <span className={styles.value}>
          <p>$31,812.80</p>
          <p id={styles.change}>+10%</p>
        </span>
        <p className={styles.label}>Price</p>
        <span className={styles.value}>
          <p>$60,000</p>
        </span>
        <p className={styles.label}>TVL</p>

        <span className={`${styles.value} ${styles.pairs}`}>
          <img src="https://i.imgur.com/lD26QGS.png" alt="" />
          <img src="https://i.imgur.com/nZsxBIV.png" alt="" />
          <img src="https://i.imgur.com/LRTPROz.png" alt="" />
        </span>
        <p className={styles.label}>Popular pairs</p>
      </div>
    </div>
  );
}

export default Home;
