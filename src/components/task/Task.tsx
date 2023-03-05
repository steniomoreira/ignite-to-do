import {Trash} from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  done?: boolean;
}

export function Task({done = false}: TaskProps){
  return (
    <div className={`${styles.task} ${done ? styles.done : ''}`}>
      <input id='tempID' type="checkbox" />
      <label htmlFor='tempID'  />

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      
      <button type='button'>
        <Trash size={24} />
      </button>
    </div>
  )
}