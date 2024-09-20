import styles from './TodoWrapper.module.scss'
import Todo from '../todo/Todo'
import AddBtn from '../addTaskBtn/AddBtn'
import { useAppContext } from '@/todoContext'
import CreateTaskModal from '../createTaskModal/CreateTaskModal';

function TodoWrapper() {

    const { isModalOpen, toggleModal } = useAppContext();

    return (
        <div className={styles.todoWrapper}>
            <Todo />
            <AddBtn onClick={toggleModal} />
            {isModalOpen && <CreateTaskModal />}
        </div>
    )
}

export default TodoWrapper