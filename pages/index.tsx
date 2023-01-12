/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import React from "react";
import CssCard from "../components/CssCard";
import ImageCard from "../components/ImageCard";
import { assets, assetType } from "../helper/assets";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        <img src="https://i.imgur.com/Bpsl1JM.png" alt="" />
        <p>Css Cards</p>
      </span>
      <div className={styles.cards}>
        {React.Children.toArray(
          assets.map((asset: assetType) => <CssCard asset={asset} />)
        )}
      </div>

      <span className={styles.heading}>
        <img src="https://i.imgur.com/Bpsl1JM.png" alt="" />
        <p>Image Cards</p>
      </span>
      <div className={styles.cards}>
        {React.Children.toArray(
          assets.map((asset: assetType) => <ImageCard asset={asset} />)
        )}
      </div>
    </div>
  );
};

export default Home;
