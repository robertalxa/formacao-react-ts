import { Component } from 'react';
import style from './botao.module.scss';

class Button extends Component<{ texto: string }> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;