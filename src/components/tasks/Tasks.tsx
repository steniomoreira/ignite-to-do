import { Info } from '../info/Info';
import styles from './Tasks.module.css';

const counter = 10;
const done = 6;

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <Info text='Tarefas criadas' counter={counter} />
        <Info text='Concluídas' counter={counter} done={done}/>
      </div>

      <p>empty</p>
    </div>
  )
}