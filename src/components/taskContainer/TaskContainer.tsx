import { Empty } from '../empty/Empty';
import { Info } from '../info/Info';

import styles from './TaskContainer.module.css';
import { Task } from '../task/Task';

const counter = 10;
const done = 6;

export function TaskContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Info text='Tarefas criadas' counter={counter} />
        <Info text='Concluídas' counter={counter} done={done}/>
      </div>

      {counter > 0 ? 
        <div className={styles.list}>
          <Task />
          <Task />
          <Task />
        </div>
        :
        <Empty />      
      }
    </div>
  )
}