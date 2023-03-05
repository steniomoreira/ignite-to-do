import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

import styles from './NewTask.module.css';

interface NewTaskProps {
  newTask: string;
  handleCreateNewTask: (event: FormEvent) => void;
  handleOnChangeTask: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function NewTask({newTask, handleCreateNewTask, handleOnChangeTask}: NewTaskProps) {

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTask}>
     <Input value={newTask} placeholder="Adicione uma nova tarefa" onChange={handleOnChangeTask} required/>

      <Button text="Criar" type="submit" >
        <PlusCircle size={16} />
      </Button>
    </form>
  )
}