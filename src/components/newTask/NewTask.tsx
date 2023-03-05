import { PlusCircle, WarningCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

import styles from './NewTask.module.css';

interface NewTaskProps {
  newTask: string;
  handleCreateNewTask: (event: FormEvent) => void;
  handleOnChangeTask: (event: ChangeEvent<HTMLInputElement>) => void;  
}

export function NewTask({newTask, handleCreateNewTask, handleOnChangeTask}: NewTaskProps) {
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!newTask) {      
      return setError(true);
    }

    handleCreateNewTask(event)
  }

  useEffect(() => {
    newTask && setError(false);
  },[newTask])

  return (
    <form className={styles.newTask} onSubmit={handleSubmit}>
      {error && (
        <div className={styles.error}>
          <WarningCircle size={16} />
          <p>A tarefa não pode ser criada sem descrição!</p>
        </div>
      )}

      <Input value={newTask} placeholder="Adicione uma nova tarefa" onChange={handleOnChangeTask}/>

      <Button text="Criar" type="submit" >
        <PlusCircle size={16} />
      </Button>
    </form>
  )
}