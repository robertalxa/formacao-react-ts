import React, { useState } from 'react';
import Cronometer from '../components/cronometer';
import Form from '../components/form';
import List from '../components/list';
import ITask from '../types/Task';
import style from './app.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Cronometer />
    </div>
  );
}

export default App;
