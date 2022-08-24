import { Component } from "react";
import Button from "../button";
import style from './form.module.scss'

class Form extends Component {
    render() {
        return (
            <form action="" className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Nome da tarefa</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" name="tempo" id="tempo" step={1} min="00:00:00" max="01:30:00" required />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;