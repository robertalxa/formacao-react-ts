import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

export default function Ordenador() {
    const [status, setStatus] = useState(false);
    return (
    <button 
        className={styles.ordenador} 
        onClick={() => setStatus(!status)}
        onBlur={() => setStatus(false)} // evento de click fora do elemento
    >
        <span>Ordenar Por</span>
        {status ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
        <div className={classNames({
            [styles.ordenador__options] : true,
            [styles["ordenador__options--ativo"]] : status
        })}>
            {opcoes.map(opcao => (
                <div className={styles.ordenador__option} key={opcao.value}>
                    {opcao.nome}
                </div>
            ))}
        </div>
    </button>
    )
}