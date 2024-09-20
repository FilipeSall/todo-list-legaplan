import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    // Função para obter o valor do localStorage ou retornar o valor inicial
    const getStoredValue = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Erro ao ler do localStorage', error);
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(getStoredValue);

    // Efeito para atualizar o localStorage quando o valor mudar
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Erro ao escrever no localStorage', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;
