import styles from './ErrorMessage.module.css';
interface ErrorMessageProps {
  message: string;
}

//! 🔹 ErrorMessage
export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className={styles.text} role="alert">
      {message}
    </p>
  );
}
