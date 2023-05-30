import { Tasks } from "../interfaces/Task"
import { TaskCard } from "./TaskCard"


interface Props {
    tasks: Tasks[]
}


export function TaskList({ tasks }: Props) {
    return (
        <>
            {tasks.map((task) =>(
                <div className="col-md-4">
                    <TaskCard task={task} />
                </div>
            ))}
        </>
    );
}