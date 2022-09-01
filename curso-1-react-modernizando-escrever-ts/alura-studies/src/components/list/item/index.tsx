import ITask from '../../../types/Task'
import style from '../list.module.scss'

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
            className={`${style.item} ${selected ? style.itemSelecionado : ''}`}
            onClick={() => selectTask(
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
        </li>
    )
}