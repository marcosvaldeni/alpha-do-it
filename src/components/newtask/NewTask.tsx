import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState, InvalidEvent } from 'react';
import styles from './NewTask.module.css';

interface Props {
  handleCreatingNewTask: (e: FormEvent, task: string) => void,
  handleNewTaskChange: (e: ChangeEvent<HTMLInputElement>) => void,
  newTaskText: string,
}

export function NewTask ({ handleCreatingNewTask, handleNewTaskChange, newTaskText }: Props) {

  function handleNewCommentInvalid(e: InvalidEvent<HTMLInputElement>) {
		e.target.setCustomValidity('This field is requered!');
	}

  return (
    <form className={styles.newtask} onSubmit={(e) => (handleCreatingNewTask(e, newTaskText))}>
      <input 
        onChange={handleNewTaskChange}
        value={newTaskText}
        type="text"
        placeholder="Add a new task"
        onInvalid={handleNewCommentInvalid}
        required
      />
      <button type='submit'>
        Create
        <PlusCircle size={16} />
      </button>
    </form>
  );
}