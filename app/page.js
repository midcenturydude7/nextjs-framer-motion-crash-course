import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* <BasicsOfMotion /> */}
      <Gestures />
    </div>
  );
}
