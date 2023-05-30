import { useState } from 'react';
import { Tasks } from './interfaces/Task';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';



export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: 1,
      title: "hola",
      description: "rodri",
      completed: false,

    }
  ])

  return (
    <div className=' navbar-dark' style={{ height: "100vh" }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href="/" className='navbar-brand'>
            React
          </a>

        </div>
      </nav>

      <main className='container p-4'>
        <div className='row'>
          <div className='col-md-4'>
            <TaskForm/>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


