import Logo from '../logo/Logo';
import styles from './Header.module.scss';
import Date from '../date/Date';

function header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <Logo />
                <h1>Bem-vindo de volta, Marcus</h1>
                <Date />
            </div>
        </header>
    )
}

export default header