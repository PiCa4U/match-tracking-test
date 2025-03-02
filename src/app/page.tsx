import styles from "./page.module.css"
import {Matches} from "@/app/components/matches";

export default function Home() {
  return (
    <div className={styles.main}>
      <Matches/>
    </div>
  );
}
