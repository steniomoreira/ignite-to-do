import { Empty } from '../empty/Empty';
import { Info } from '../info/Info';

import styles from './TaskContainer.module.css';
import { Task } from '../task/Task';
import { useState } from 'react';
import { data } from '../../mock/todoMock';

export function TaskContainer() {
  const [tasks, setTasks] = useState(data);  

  const counter = tasks.length;

  const counterDone = tasks.reduce(( acc, cur ) =>  cur.hasDone ? ++acc : acc, 0);
   
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Info text='Tarefas criadas' counter={counter} />
        <Info text='Concluídas' counter={counter} done={counterDone}/>
      </div>

      {counter > 0 ? 
        <div className={styles.list}>
          {tasks.map( ({id, content, hasDone}) => (
            <Task 
              key={id} 
              id={String(id)} 
              content={content}
              hasDone={hasDone}
            />
          ))}
        </div>
        :
        <Empty />      
      }
    </div>
  )
}