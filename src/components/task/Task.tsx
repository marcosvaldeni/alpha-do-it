import styles from './Task.module.css';

import done from '../../assets/done.svg';
import { Trash } from 'phosphor-react';
import { ITask } from '../../models/models';

interface Props {
  task: ITask,
  handleDeletingTask: (id: string) => void,
  handleSettingDone: (id: string) => void,
  handleSettingUndone: (id: string) => void,
}

export function Task({ handleDeletingTask, handleSettingDone, handleSettingUndone, task}: Props) {

  function handleTaskCheck() {
    if (!task.finishedAt) {
      handleSettingDone(task.id);
      return;
    }
    handleSettingUndone(task.id);
  }

  return (
    <div className={styles.task}>

      <div className={(!task.finishedAt ? styles.check : styles.checked)} onClick={handleTaskCheck}>
        {task.finishedAt ? (<img src={done} alt="" />) : ''}
      </div>

      <div className={(!task.finishedAt ? styles.undone : styles.done)}>
        <p>
          {task.text}
        </p>
      </div>
      <div className={styles.delete} onClick={() => (handleDeletingTask(task.id))}>
        <Trash size={24} />
      </div>
    </div>
  );
}