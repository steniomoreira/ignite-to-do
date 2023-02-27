import { NewTask } from "../newTask/NewTask";
import { Tasks } from "../tasks/Tasks";
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <NewTask />
      <Tasks />
    </main>
  )
}