import {Trash} from 'phosphor-react';
import { InputHTMLAttributes } from 'react';
import styles from './Task.module.css';

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  content: string;
  hasDone: boolean;
}

export function Task({id, content, hasDone = false }: TaskProps){
  return (
    <div className={`${styles.task} ${hasDone ? styles.hasDone : ''}`}>
      <input id={id} type="checkbox"  />
      <label htmlFor={id}/>

      <p>{content}</p>
      
      <button type='button'>
        <Trash size={24} />
      </button>
    </div>
  )
}