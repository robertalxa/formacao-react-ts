import Button from '../button';
import Watch from './watch';
import style from './cronometer.module.scss';
import { timeToSecs } from '../../common/utils/date';

export default function Cronometer() {
    console.log('Conversion: ', timeToSecs('01:01:01'));
    
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