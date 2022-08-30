import Button from '../button';
import Watch from './watch';
import style from './cronometer.module.scss';

export default function Cronometer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch/>
            </div>
            <Button texto="Começar!"/>
        </div>
    );
}