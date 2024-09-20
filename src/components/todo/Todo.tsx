import React from 'react';
import { useAppContext } from '../../todoContext';
import styles from './Todo.module.scss';
import Task from '../task/Task';
import { MagicMotion } from "react-magic-motion";

const Todo: React.FC = () => {
    const { todos, removeTask, toggleCompleteTask } = useAppContext();

    const completedTodos = todos.filter(todo => todo.isCompleted);
    const incompletedTodos = todos.filter(todo => !todo.isCompleted);

    return (
        <MagicMotion>
            <div className={styles.container}>
                <h1 className={styles.todoTitle}>Sua lista de hoje</h1>
                {incompletedTodos.map((todo, i) => (
                    <Task
                        key={i}
                        isCompleted={todo.isCompleted}
                        task={todo.task}
                        onComplete={() => toggleCompleteTask(todo.task)}
                        onRemove={() => removeTask(todo.task)}
                    />
                ))}
                <h1 className={styles.todoTitle}>Tarefas finalizadas</h1>
                {completedTodos.map((todo, i) => (
                    <Task
                        key={i}
                        isCompleted={todo.isCompleted}
                        task={todo.task}
                        onComplete={() => toggleCompleteTask(todo.task)}
                        onRemove={() => removeTask(todo.task)}
                    />
                ))}
            </div>
        </MagicMotion>
    );
};

export default Todo;
