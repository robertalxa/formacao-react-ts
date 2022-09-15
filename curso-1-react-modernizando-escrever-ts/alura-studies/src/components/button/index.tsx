import { Component } from 'react';
import style from './botao.module.scss';

class Button extends Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined, onClick?: ()=> void }> {
    render() {
        const { texto, type = 'button', onClick } = this.props;
        return (
            <button onClick={onClick} className={style.botao} type={type}>
                {texto}
            </button>
        )
    }
}

export default Button;