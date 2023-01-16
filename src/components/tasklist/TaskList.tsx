import { ITask } from '../../models/models';
import { Empty } from '../empty/Empty';
import { Task } from '../task/Task';
import styles from './TaskList.module.css';

interface Props {
  tasks: ITask[],
  handleDeletingTask: (id: string) => void,
  handleSettingDone: (id: string) => void,
  handleSettingUndone: (id: string) => void,
}

export function TaskList ({ tasks, handleDeletingTask, handleSettingDone, handleSettingUndone }: Props) {
  return (
    <div className={styles.tasklist}>
      <header>
        <h2><span className={styles.sub}>Created Task</span> <span className={styles.highlight}>{tasks.length}</span></h2>
        <h2><span className={styles.sub}>Concluded</span> <span className={styles.highlight}>{tasks.filter(n => n.finishedAt).length} out of {tasks.length}</span></h2>
      </header>
        {tasks.length 
          ? tasks.map(item => <Task 
            key={item.id} 
            task={item} 
            handleDeletingTask={handleDeletingTask} 
            handleSettingDone={handleSettingDone} 
            handleSettingUndone={handleSettingUndone}
          />) 
          : <Empty />
        }
    </div>
  );
}
