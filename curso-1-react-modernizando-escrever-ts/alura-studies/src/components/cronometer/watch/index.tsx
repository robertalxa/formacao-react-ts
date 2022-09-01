import style from './watch.module.scss';

interface Props {
    time: number | undefined;
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const secs = time % 60;
    const [minDez, minUnit] = String(minutes).padStart(2, '0');
    const [secDez, secUnit] = String(secs).padStart(2, '0');
    return (
        <>
            <span className={style.relogioNumero}>{minDez}</span>
            <span className={style.relogioNumero}>{minUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secDez}</span>
            <span className={style.relogioNumero}>{secUnit}</span>
        </>
    );
}