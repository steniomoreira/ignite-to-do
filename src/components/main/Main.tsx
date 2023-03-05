import { ChangeEvent, FormEvent, useState } from "react";
import {TaskProps} from '../task/Task';
import { data } from "../../mock/todoMock";
import { NewTask } from "../newTask/NewTask";
import { TaskContainer } from "../taskContainer/TaskContainer";
import styles from './Main.module.css';

const listTasks: TaskProps[] =  data;

export function Main() {
  const [tasks, setTasks] = useState(listTasks);
  const [newTask, setNewTask] = useState('');  

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks(prevState => [...prevState, {
      id: new Date().getTime(),
      content: newTask,
      hasDone: false,
    }]);

    setNewTask('');
  }

  function handleOnChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);    
  }

  return (
    <main className={styles.main}>
      <NewTask newTask={newTask} handleCreateNewTask={handleCreateNewTask} handleOnChangeTask={handleOnChangeTask} />
      <TaskContainer tasks={tasks} />
    </main>
  )
}