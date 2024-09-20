import { useState } from 'react';
import styles from './CreateTaskModal.module.scss'
import { useAppContext } from '@/todoContext';

function CreateTaskModal() {
    const { addTask } = useAppContext();
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = (event: React.FormEvent) => {
        event.preventDefault();
        addTask(newTask);
        setNewTask(''); 
    };

    return (
        <form onSubmit={handleAddTask} className={styles.addTodoForm}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Adicionar nova tarefa"
                className={styles.todoInput}
            />
            <button type="submit" className={styles.addButton}>
                Adicionar Tarefa
            </button>
        </form>
    );
};


export default CreateTaskModal