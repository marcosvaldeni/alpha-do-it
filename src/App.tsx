import { Header } from './components/header/Header';
import { NewTask } from './components/newtask/NewTask';
import './global.css';

import styles from './App.module.css';
import { TaskList } from './components/tasklist/TaskList';
import { useState, ChangeEvent, FormEvent } from 'react';
import { ITask } from './models/models';

export function App() {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTask] = useState<ITask[]>([]);

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('');
    
    setNewTaskText(e.target.value);
  }

  function handleCreatingNewTask(e: FormEvent, text: string) {
    e.preventDefault();
    const id = Math.floor(Math.random() * Date.now()).toString(16);

    const newTask: ITask = {
      id,
      text,
      createdAt: new Date(),
      finishedAt: null
    }

    setTask((state) => [...state, newTask]);
    setNewTaskText('');
  }

  function handleSettingDone(id: string) {
    tasks.forEach(task => {
      if (task.id === id) task.finishedAt = new Date();
    });
    setTask((state) => [...state]);
  }

  function handleSettingUndone(id: string) {
    tasks.forEach(task => {
      if (task.id === id) task.finishedAt = null;
    });
    setTask((state) => [...state]);
  }

  function handleDeletingTask(id: string) {
    setTask((state) => [...state.filter(n => n.id !== id)]);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <NewTask 
        handleCreatingNewTask={handleCreatingNewTask} 
        handleNewTaskChange={handleNewTaskChange} 
        newTaskText={newTaskText} 
        />
      <TaskList 
        handleDeletingTask={handleDeletingTask} 
        handleSettingDone={handleSettingDone} 
        handleSettingUndone={handleSettingUndone}
        tasks={tasks} 
      />
    </div>
  )
}
