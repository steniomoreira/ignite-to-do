import { useState } from 'react';
import { Empty } from '../empty/Empty';
import { Info } from '../info/Info';
import { Task, TaskProps } from '../task/Task';

import styles from './TaskContainer.module.css';

interface TaskContainerProps {
  tasks: TaskProps[];
}

export function TaskContainer({tasks}: TaskContainerProps) {

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
              id={id} 
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