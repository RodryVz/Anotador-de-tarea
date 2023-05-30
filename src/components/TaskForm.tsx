import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Tasks } from "../interfaces/Task";


interface Props{
    addANewTask: (task:Tasks)=> void
}

type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;


const inicialState = {
    title:"",
    description:"",
}

export function TaskForm({addANewTask}: Props) {
    const [task, setTaks] = useState(inicialState)

    const handleInputChange = ({ target: { name, value } }: handleInputChange) => {
        setTaks({ ...task, [name]: value });
    };

    const handleNewTask = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        addANewTask(task)
        setTaks(inicialState)
    }


    return (
        <div className="card card-body bg-secondary text-black">
            <h1>Agregar Tarea</h1>

            <form onSubmit={handleNewTask}>
                <input type="text"
                    placeholder="Escribe un titulo"
                    name="title"
                    className="form-control mb-3 rounded-0 shadow-none border-0 "
                    onChange={handleInputChange}
                    value={task.title}
                />

                <textarea
                    name="description"
                    rows={2}
                    placeholder="Escribe una Descripcion"
                    className="form-control mb-3 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.description}>
                </textarea>

                <button className="btn btn-primary">
                    Guardar
                    <AiOutlinePlus />
                </button>
            </form>
        </div>
    )
}