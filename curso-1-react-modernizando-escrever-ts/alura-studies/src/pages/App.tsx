import React, { useState } from 'react';
import Cronometer from '../components/cronometer';
import Form from '../components/form';
import List from '../components/list';
import ITask from '../types/Task';
import style from './app.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks(previousTasks => previousTasks.map(task => (
      {
        ...task,
        selected: task.id === taskSelected.id
      }
    )));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(previousTasks => 
        previousTasks.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task;
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask} />
      <Cronometer 
      selected={selected} 
      finishTask={finishTask}
      />
    </div>
  );
}

export default App;
