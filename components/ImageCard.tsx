/* eslint-disable @next/next/no-img-element */
import React from "react";
import { assetMap, assetType } from "../helper/assets";
import styles from "../styles/ImageCard.module.css";

export default function ImageCard({ asset }: { asset: assetType }) {
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
            pairs.map((pair: string) => (
              <img src={assetMap[pair].image} alt={assetMap[pair].symbol} />
            ))
          )}
        </span>
        <p className={styles.label}>Popular pairs</p>
      </div>
    </div>
  );
}
