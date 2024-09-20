import { useState } from 'react';
import styles from './CreateTaskModal.module.scss';
import { useAppContext } from '@/todoContext';

function CreateTaskModal() {
    const { addTask, toggleModal, isModalOpen } = useAppContext();
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = (event: React.FormEvent) => {
        event.preventDefault();
        addTask(newTask);
        setNewTask(''); 
        toggleModal();
    };


    return (
        <>
            <div className={styles.overlay} onClick={toggleModal}></div>
            <form onSubmit={handleAddTask} className={styles.addTodoForm}>
                <h1 className={styles.newTaskTitle}>Nova Tarefa</h1>
                <form className={styles.form}>
                    <label className={styles.label} htmlFor='newTask'>Titulo</label>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.todoInput}
                        id='newTask'
                        placeholder='Digite'
                    />
                </form>
                <div className={styles.btWrapper}>
                    <button onClick={toggleModal} className={styles.cancelBtn}>
                        Cancelar
                    </button>
                    <button type="submit" className={styles.addButton}>
                        Adicionar
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateTaskModal;
