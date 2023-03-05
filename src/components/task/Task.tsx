import {Trash} from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
  id: number;
  content: string;
  hasDone: boolean;
}

export function Task({ id, content, hasDone = false }: TaskProps){
  const idAsStrng = String(id);
  
  return (
    <div className={`${styles.task} ${hasDone ? styles.hasDone : ''}`}>
      <input id={idAsStrng} type="checkbox"  />
      <label htmlFor={idAsStrng}/>

      <p>{content}</p>
      
      <button type='button'>
        <Trash size={24} />
      </button>
    </div>
  )
}