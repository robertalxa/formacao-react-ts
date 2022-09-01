import Button from '../button';
import Watch from './watch';
import style from './cronometer.module.scss';
import { timeToSecs } from '../../common/utils/time';
import ITask from '../../types/Task';
import { useEffect, useState } from 'react';

interface Props {
    selected: ITask | undefined
}

export default function Cronometer({ selected }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSecs(selected.time));
        }
    }, [selected]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button texto="Começar!" />
        </div>
    );
}