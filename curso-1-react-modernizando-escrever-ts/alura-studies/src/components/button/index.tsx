import { Component } from 'react';
import style from './botao.module.scss';

class Button extends Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined }> {
    render() {
        const { texto, type = 'button' } = this.props;
        return (
            <button className={style.botao} type={type}>
                {texto}
            </button>
        )
    }
}

export default Button;