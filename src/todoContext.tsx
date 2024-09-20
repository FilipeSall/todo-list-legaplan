"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { TodoProps } from '@/interfaces';
import initialTodos from '@/components/todo/initialTodos';
import useLocalStorage from '@/hooks/useLocalStorage';

interface AppContextType {
    todos: TodoProps[];
    addTask: (task: string) => void;
    removeTask: (task: string) => void;
    toggleCompleteTask: (task: string) => void;
    isModalOpen: boolean;
    toggleModal: () => void;
    isDeleteModalOpen: boolean;  
    toggleDeleteModal: (task?: string) => void; 
    taskToDelete: string | null;  
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useLocalStorage<TodoProps[]>('todos', initialTodos);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);  
    const [taskToDelete, setTaskToDelete] = useState<string | null>(null); 

    // Função para adicionar nova tarefa
    const addTask = (task: string) => {
        if (task.trim() === '') return;
        setTodos(prevTodos => [
            ...prevTodos,
            { task, isCompleted: false }
        ]);
    };

    //função para remover a task
    const removeTask = (task: string) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter(todo => todo.task !== task);

            window.localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos; 
        });
        setIsDeleteModalOpen(false); 
    };

    // Função para alternar o estado de conclusão da tarefa
    const toggleCompleteTask = (task: string) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.task === task
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    // Função para abrir/fechar o modal de adição de tarefas
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Função para abrir/fechar o modal de exclusão e definir a tarefa a ser excluída
    const toggleDeleteModal = (task?: string) => {
        setTaskToDelete(task || null); 
        setIsDeleteModalOpen(prev => !prev); 
    };

    return (
        <AppContext.Provider value={{
            todos,
            addTask,
            removeTask,
            toggleCompleteTask,
            isModalOpen,
            toggleModal,
            isDeleteModalOpen,
            toggleDeleteModal,
            taskToDelete
        }}>
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
