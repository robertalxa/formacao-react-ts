import ITask from '../../../types/Task'
import style from '../list.module.scss'

export default function Item({ name, time, selected, completed, id }: ITask) {
    return (
        <li className={style.item}>
            <h3>
                {name}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}