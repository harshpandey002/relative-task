/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import React from "react";
import { assetMap, assets } from "../helper/assets";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        <img src="https://i.imgur.com/Bpsl1JM.png" alt="" />
        <p>Trending Assets</p>
      </span>
      <div className={styles.cards}>
        {React.Children.toArray(assets.map((asset) => <Card asset={asset} />))}
      </div>
    </div>
  );
};

function Card({ asset }: any) {
  const { symbol, name, price, tvl, pairs, change } = asset;

  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src="https://i.imgur.com/clW2k6S.png"
        alt=""
      />

      <div
        style={{
          background: `linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,${assetMap[symbol].gradient} 100%)`,
        }}
        className={styles.icon}
      >
        <img src={assetMap[symbol].image} alt={assetMap[symbol].name} />
      </div>

      <div className={styles.cardContent}>
        <p id={styles.token}>
          {name} ({symbol})
        </p>
        <span className={styles.value}>
          <p>{price}</p>
          <p
            style={{
              color: change > 0 ? "#00ffa3" : "#FF4D4D",
            }}
            id={styles.change}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </p>
        </span>
        <p className={styles.label}>Price</p>
        <span className={styles.value}>
          <p>{tvl}</p>
        </span>
        <p className={styles.label}>TVL</p>

        <span className={`${styles.value} ${styles.pairs}`}>
          {React.Children.toArray(
            pairs.map((pair: any) => (
              <img src={assetMap[pair].image} alt={assetMap[pair].symbol} />
            ))
          )}
        </span>
        <p className={styles.label}>Popular pairs</p>
      </div>
    </div>
  );
}

export default Home;
