import { Empty } from '../empty/Empty';
import { Info } from '../info/Info';
import styles from './Tasks.module.css';
import {Trash} from 'phosphor-react';

const counter = 10;
const done = 6;

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <Info text='Tarefas criadas' counter={counter} />
        <Info text='Concluídas' counter={counter} done={done}/>
      </div>

      <div className={styles.list}>
        <div className={styles.taskContent}>
          <input id='tempID' type="checkbox" />
          <label htmlFor='tempID'  />

          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          
          <button type='button'>
            <Trash size={24} />
          </button>
        </div>
      </div>

      <Empty />
    </div>
  )
}