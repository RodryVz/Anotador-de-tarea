import { Tasks } from "../interfaces/Task";

interface Props{
    task:Tasks;
}


export  function TaskCard({task}: Props){
    return(
        <div className="card card-body bg-secondary rounded-0 text-black">
            <h2>{task.title}</h2>
            <p>{task.id}</p>
            <p>{task.description}</p>
            <button className="btn btn-danger">
                Borrar
            </button>
        </div>
    )
}