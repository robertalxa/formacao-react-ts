import { Component } from "react";
import Button from "../button";

class Form extends Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="tarefa"></label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required />
                </div>
                <div>
                    <label htmlFor="tempo"></label>
                    <input type="time" name="tempo" id="tempo" step={1} min="00:00:00" max="01:30:00" required />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;