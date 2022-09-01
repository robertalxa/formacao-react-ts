import ITask from '../../types/Task';
import Item from './item';
import style from './list.module.scss';

interface Props {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void,
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;