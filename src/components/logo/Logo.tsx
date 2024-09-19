import Image from 'next/image';
import styles from './Logo.module.scss';
import logoMark from '../../assets/Logomark.svg';
import logoType from '../../assets/Logotype.svg';

function Logo() {
    return (
        <div className={styles.container}>
            <Image src={logoMark} alt='Logomark' width={33.17} height={33} />
            <Image src={logoType} alt='Logotype' width={106.14} height={15.5} />
        </div>
    )
}

export default Logo