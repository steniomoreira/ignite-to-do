import { NewTask } from "../newTask/NewTask";
import { TaskContainer } from "../taskContainer/TaskContainer";
import styles from './Main.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <NewTask />
      <TaskContainer />
    </main>
  )
}