import { TaskProps } from '@/interfaces';
import styles from './Task.module.scss';
import trash from '../../assets/trash.svg';
import Image from 'next/image';
import completedImg from '../../assets/Checkbox.svg';
import incompletedImg from '../../assets/Uncheck.svg';
import { useAppContext } from '@/todoContext';

const Task: React.FC<TaskProps> = ({ task, isCompleted, onComplete }) => {
    const { toggleDeleteModal } = useAppContext();

    return (
        <div className={styles.container} onClick={onComplete}>
            <div className={styles.wrapper}>
                {isCompleted ?
                    <Image src={completedImg} alt='Tarefa completa' /> :
                    <Image src={incompletedImg} alt='Tarefa incompleta' />
                }
                <span className={isCompleted ? styles.taskCompleted : styles.taskText}>
                    {task}
                </span>
            </div>
            <button
                type="button"
                onClick={() => {
                    toggleDeleteModal(task);
                }}
                className={styles.taskRemoveButton}
            >
                <Image src={trash} alt='Deletar tarefa' />
            </button>
        </div>
    );
};

export default Task;
