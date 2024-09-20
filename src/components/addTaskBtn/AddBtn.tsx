import { AddBtnProps } from '@/interfaces';
import styles from './AddBtn.module.scss';


function AddBtn({ onClick }:AddBtnProps) {

    return (
        <button className={styles.btn} onClick={onClick} >Adicionar nova tarefa</button>
    )
}

export default AddBtn