"use client";
import Header from '../components/header/Header';
import { AppProvider } from '@/todoContext';
import TodoWrapper from '@/components/todoWrapper/TodoWrapper';

export default function Home() {


  return (
    <AppProvider>
      <div className='content__wrapper'>
        <Header />
        <TodoWrapper />
      </div>
    </AppProvider>


  );
}
