import ITask from '../../../types/Task'
import style from './item.module.scss'

interface Props extends ITask {
    selectTask: (taskSelected: ITask) => void,
}

export default function Item(
    {
        name,
        time,
        selected,
        completed,
        id,
        selectTask
    }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
            
            onClick={() => !completed && selectTask(
                {
                    name,
                    time,
                    completed,
                    id,
                    selected
                }
            )}>
            <h3>
                {name}
            </h3>
            <span>
                {time}
            </span>
            {completed && <span className={style.concluido} aria-label="tarefa-completada"></span>}
        </li>
    )
}