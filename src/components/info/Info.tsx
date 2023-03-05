import styles from './Info.module.css';

interface InfoProps {
  text: string;
  counter: number;
  done?: number;
}

export function Info({text, counter, done}: InfoProps) {
  const hasInfoDone = done !== undefined;

  function isDone() {
    return `${done} de ${counter}`;
  }
  
  return (
    <div className={`${ styles.info} ${ hasInfoDone && styles.done}`}>
      <p>{text}</p>
      <span>{`${ hasInfoDone && counter > 0 ? isDone() : counter}`}</span>
    </div>
  )
}