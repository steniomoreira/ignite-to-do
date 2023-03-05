import styles from './Info.module.css';

interface InfoProps {
  text: string;
  counter: number;
  done?: number;
}

export function Info({text, counter, done}: InfoProps) {

  function isDone() {
    return `${done} de ${counter}`;
  }

  return (
    <div className={`${ styles.info} ${done && styles.done}`}>
      <p>{text}</p>
      <span>{`${done && counter > 0 ? isDone() : counter}`}</span>
    </div>
  )
}