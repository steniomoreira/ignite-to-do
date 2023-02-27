import { PlusCircle } from "phosphor-react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.newTask}>
     <Input placeholder="Adicione uma nova tarefa"/>

      <Button text="Criar">
        <PlusCircle size={16} />
      </Button>
    </div>
  )
}