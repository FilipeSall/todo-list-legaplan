"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { TodoProps } from '@/interfaces';
import initialTodos from '@/components/todo/initialTodos';

interface AppContextType {
    todos: TodoProps[];
    addTask: (task: string) => void;
    removeTask: (task: string) => void;
    toggleCompleteTask: (task: string) => void;
    
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<TodoProps[]>(initialTodos);

    const addTask = (task: string) => {
        if (task.trim() === '') return;
        setTodos(prevTodos => [
            ...prevTodos,
            { task, isCompleted: false }
        ]);
    };

    const removeTask = (task: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.task !== task));
    };

    const toggleCompleteTask = (task: string) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.task === task
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    return (
        <AppContext.Provider value={{ todos, addTask, removeTask, toggleCompleteTask }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext deve ser usado dentro de um AppProvider');
    }
    return context;
};
