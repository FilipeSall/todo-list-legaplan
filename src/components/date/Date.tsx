"use client";
import { useEffect, useState } from 'react';
import styles from './Date.module.scss';

function CurrentDate() {
    const [date, setDate] = useState<Date>(new Date());

    const updateDate = () => {
        setDate(new Date());
    };

    useEffect(() => {
        updateDate();
        const intervalId = setInterval(updateDate, 3600000); 

        return () => clearInterval(intervalId);
    }, []);

    const formattedDate = date.toLocaleDateString('pt-BR', {
        weekday: 'long', 
        day: '2-digit',  
        month: 'long',   
        year: 'numeric'  
    });

    return (
        <div className={styles.container}>
            <p>{formattedDate}</p>
        </div>
    )
}

export default CurrentDate;