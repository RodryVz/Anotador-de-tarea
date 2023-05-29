import { useState } from 'react';



interface Tasks {
  id: number,
  title: string,
  description: string,
  completed: boolean,
}

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
    <div className='bg-dark' style={{height:"100vh"}}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href="/" className='navbar-brand'>
            React
          </a>

        </div>
      </nav>

      <main>
        {tasks.map(task => (
          <div>
            <h2>{task.title}</h2>
          </div>
        ))}
      </main>
    </div>
  )
}


