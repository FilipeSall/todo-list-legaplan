import { useAppContext } from '@/todoContext';
import styles from './DeleteTaskModal.module.scss';

function DeleteTaskModal() {
    const { isDeleteModalOpen, toggleDeleteModal, taskToDelete, removeTask } = useAppContext();

    if (!isDeleteModalOpen) return null;

    const handleDelete = () => {
        
        if(taskToDelete) removeTask(taskToDelete);
    };

    return (
        <>
            <div className={styles.overlay} onClick={() => toggleDeleteModal(undefined)} />
            <div className={styles.container}>
                <h1 className={styles.title}>Deletar tarefa</h1>
                <p className={styles.text}>Tem certeza que quer deletar essa tarefa?</p>
                <div className={styles.btnWrapper}>
                <button 
                        className={styles.cancelBtn}
                        onClick={() => toggleDeleteModal(undefined)} 
                    >
                        Cancelar
                    </button>
                    <button type="button" onClick={handleDelete} className={styles.deleteBtn}>
                        Deletar
                    </button>
                </div>
            </div>
        </>
    );
}

export default DeleteTaskModal;


