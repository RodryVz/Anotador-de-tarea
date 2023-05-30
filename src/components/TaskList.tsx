import { Tasks } from "../interfaces/Task"
import { TaskCard } from "./TaskCard"


interface Props {
    tasks: Tasks[];
    deleteATasks: (id: number) => void
}


export function TaskList({ tasks, deleteATasks }: Props) {
    return (
        <>
            {tasks.map((task) =>(
                <div className="col-md-4 pb-2" key={task.id}>
                    <TaskCard task={task} deleteATaks={deleteATasks} />
                </div>
            ))}
        </>
    );
}