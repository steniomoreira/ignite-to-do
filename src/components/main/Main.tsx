import { ChangeEvent, FormEvent, useState } from "react";
import {TaskProps} from '../task/Task';
import { NewTask } from "../newTask/NewTask";
import { TaskContainer } from "../taskContainer/TaskContainer";
import styles from './Main.module.css';

export function Main() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
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

  function handleDoneTask(taskId: number) {
    const updateTaskByDone = tasks.map(task => task.id === taskId ? {...task, hasDone: !task.hasDone} : task);
    setTasks(updateTaskByDone);    
  }

  function handleDeleteTask(taskId: number) {
    const updatedTasks = tasks.filter( task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <main className={styles.main}>
      <NewTask
        newTask={newTask}
        handleCreateNewTask={handleCreateNewTask}
        handleOnChangeTask={handleOnChangeTask}        
      />
      <TaskContainer
        tasks={tasks}
        handleDoneTask={handleDoneTask}
        handleDeleteTask={handleDeleteTask}
      />
    </main>
  )
}