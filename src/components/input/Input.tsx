import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({type = 'text', ...props}: InputProps) {
  return (
    <input className={styles.input } type={type} {...props} />
  )
}