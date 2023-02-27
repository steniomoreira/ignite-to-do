import { NewTask } from "../newTask/NewTask";
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <NewTask />
    </main>
  )
}