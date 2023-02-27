import styles from './Info.module.css';

interface InfoProps {
  text: string;
  counter: number;
  done?: number;
}

export function Info({text, counter, done}: InfoProps) {
  return (
    <div className={`${ styles.info} ${done && styles.done}`}>
      <p>{text}</p>
      <span>{`${done ? done + ' de ' + counter : counter}`}</span>
    </div>
  )
}