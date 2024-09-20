import styles from './TodoWrapper.module.scss'
import Todo from '../todo/Todo'
import AddBtn from '../addTaskBtn/AddBtn'
import { useAppContext } from '@/todoContext'

function TodoWrapper() {

    const {  } = useAppContext();

    return (
        <div className={styles.todoWrapper}>
            <Todo />
            <AddBtn />
        </div>
    )
}

export default TodoWrapper