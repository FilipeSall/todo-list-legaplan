import styles from './TodoWrapper.module.scss'
import Todo from '../todo/Todo'
import AddBtn from '../addTaskBtn/AddBtn'
import { useAppContext } from '@/todoContext'
import CreateTaskModal from '../createTaskModal/CreateTaskModal';
import DeleteTaskModal from '../deleteTaskModal/DeleteTaskModal';
import { useEffect } from 'react';

function TodoWrapper() {

    const { isModalOpen, toggleModal, isDeleteModalOpen } = useAppContext();

    useEffect(() =>{
        console.log(isDeleteModalOpen);

    },[isDeleteModalOpen])

    return (
        <div className={styles.todoWrapper}>
            <Todo />
            <AddBtn onClick={toggleModal} />
            {isModalOpen && <CreateTaskModal />}
            {isDeleteModalOpen && <DeleteTaskModal />}
        </div>
    )
}

export default TodoWrapper