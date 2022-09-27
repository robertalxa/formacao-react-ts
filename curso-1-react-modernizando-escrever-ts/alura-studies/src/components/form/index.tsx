import React, { Component } from "react";
import ITask from "../../types/Task";
import Button from "../button";
import style from './form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

/*function Form ( {setTasks} : Props ){
    const [name, setName] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    name,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setName('');
        setTime('00:00');
    }

    return (
        <form action="" className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Nome da tarefa</label>
                <input type="text"
                    name="tarefa"
                    id="tarefa"
                    onChange={(event) => { setTasks setState({ ...this.state, name: event.target.value }) }}
                    value={name}
                    placeholder="O que você quer estudar"
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    name="tempo"
                    onChange={(event) => { this.setState({ ...this.state, time: event.target.value }) }}
                    value={this.state.time}
                    id="tempo"
                    step={1}
                    min="00:00:00"
                    max="01:30:00"
                    required />
            </div>
            <Button type="submit"
                texto="Adicionar" />
        </form>
    );
}*/

class Form extends Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        name: '',
        time: '00:00:00'
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        this.setState({
            name: '',
            time: '00:00:00'
        })
        console.log('state', this.state);
    }

    render() {
        return (
            <form action="" className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Nome da tarefa</label>
                    <input type="text"
                        name="tarefa"
                        id="tarefa"
                        onChange={(event) => { this.setState({ ...this.state, name: event.target.value }) }}
                        value={this.state.name}
                        placeholder="O que você quer estudar"
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        name="tempo"
                        onChange={(event) => { this.setState({ ...this.state, time: event.target.value }) }}
                        value={this.state.time}
                        id="tempo"
                        step={1}
                        min="00:00:00"
                        max="01:30:00"
                        required />
                </div>
                <Button type="submit"
                    texto="Adicionar" />
            </form>
        )
    }
}

export default Form;