import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/home.module.scss";

const Tiles = dynamic(() => import("../components/Tiles"), {
  ssr: false,
});

const Twisty = dynamic(() => import("../components/Twisty"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.info}>
          <span className={styles.caption}>the meaning</span>
          <p className={styles.copy}>
            Work &
            <br /> Display
          </p>
          <p className={styles.copy}>
            [GALLERY]
            <br />
            2022
          </p>
          <h1 className={styles.title}>一</h1>
        </div>
        <div className={styles.content}>
          <Tiles />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.info}>
          <span className={styles.caption}>simultaion</span>
          <p className={styles.copy}>
            Physical &
            <br />
            Digital Spaces
          </p>
          <p className={styles.copy}>
            NY Founder
            <br />
            Group ©
          </p>
          <h1 className={styles.title}>二</h1>
        </div>
        <div className={styles.content}>
          <Twisty />
        </div>
      </div>
    </div>
  );
};

export default Home;
