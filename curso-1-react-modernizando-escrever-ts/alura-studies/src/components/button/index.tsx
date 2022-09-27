import { Component } from 'react';
import style from './botao.module.scss';

interface Props {
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

function Button ({ texto, onClick, type }: Props) {
    return (
        <button onClick={onClick} className={style.botao} type={type}>
            {texto}
        </button>
    );
}

export default Button;