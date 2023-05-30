import { Tasks } from "../interfaces/Task";

interface Props{
    task:Tasks;
    deleteATaks: (id: number) => void
}


export  function TaskCard({task, deleteATaks}: Props){
    return(
        <div className="card card-body bg-secondary rounded-0 text-black">
            <h2>{task.title}</h2>
            
            <p>{task.description}</p>
            <button className="btn btn-danger" onClick={()=> task.id && deleteATaks(task.id)}>
                Borrar
            </button>
        </div>
    )
}