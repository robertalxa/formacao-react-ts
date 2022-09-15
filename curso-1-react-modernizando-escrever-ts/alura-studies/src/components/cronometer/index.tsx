import Button from '../button';
import Watch from './watch';
import style from './cronometer.module.scss';
import { timeToSecs } from '../../common/utils/time';
import ITask from '../../types/Task';
import { useEffect, useState } from 'react';

interface Props {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Cronometer({ selected, finishTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSecs(selected.time));
        }
    }, [selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                const newCounter = counter - 1;
                setTime(newCounter);
                return regressive(newCounter);;
            }
            finishTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch time={time}/>
            </div>
            <Button texto="Começar!" onClick={()=> regressive(time)} />
        </div>
    );
}