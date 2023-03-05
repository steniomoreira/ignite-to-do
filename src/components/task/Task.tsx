import {Trash} from 'phosphor-react';
import { useState } from 'react';
import styles from './Task.module.css';

export interface TaskProps {
  id: number;
  content: string;
  hasDone: boolean;
  handleDoneTask?: (id: number) => void;
  handleDeleteTask?: (id: number) => void;
}

export function Task({ id, content, hasDone = false, handleDoneTask, handleDeleteTask }: TaskProps){
  const idAsString = String(id);
  const [checked, setChecked] = useState(hasDone)

  function handleCheckedTask() {
    setChecked(preState => !preState);
    handleDoneTask?.(id)
  }

  return (
    <div className={`${styles.task} ${checked ? styles.hasDone : ''}`}>
      <input id={idAsString} type="checkbox" checked={checked} onChange={() => handleCheckedTask()}  />
      <label htmlFor={idAsString}/>

      <p>{content}</p>
      
      <button type='button' onClick={() => handleDeleteTask?.(id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}