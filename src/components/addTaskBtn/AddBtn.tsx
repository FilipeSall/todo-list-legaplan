import { AddBtnProps } from '@/interfaces';
import styles from './AddBtn.module.scss';

function AddBtn() {
    return (
        <button className={styles.btn}>Adicionar nova tarefa</button>
    )
}

export default AddBtn