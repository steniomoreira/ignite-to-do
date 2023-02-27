import { ButtonHTMLAttributes, Children } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
}

export function Button({text, children, type = 'button', ...props}: ButtonProps) {
  return (
    <button className={styles.button } type={type} {...props}>
      {text}
      {children} 
    </button>
  )
}