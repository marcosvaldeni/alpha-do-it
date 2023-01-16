import { ClipboardText } from 'phosphor-react';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardText  size={56} />
      <p>You don't have tasks registered yet.</p>
      <p>Create tasks and organize your to-do items</p>
    </div>
  )
} 