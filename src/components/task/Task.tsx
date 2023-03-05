import {Trash} from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
  id: number;
  content: string;
  hasDone: boolean;
  handleDeleteTask?: (id: number) => void;
}

export function Task({ id, content, hasDone = false, handleDeleteTask }: TaskProps){
  const idAsStrng = String(id);

  return (
    <div className={`${styles.task} ${hasDone ? styles.hasDone : ''}`}>
      <input id={idAsStrng} type="checkbox"  />
      <label htmlFor={idAsStrng}/>

      <p>{content}</p>
      
      <button type='button' onClick={() => handleDeleteTask?.(id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}