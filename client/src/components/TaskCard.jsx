/* eslint-disable react/prop-types */
import { useTask } from "../context/TasksProvider"
import { useNavigate } from "react-router-dom"

function TaskCard({task}) {

  const {deleteTask, toggleTaskDone} = useTask()
  const navigate = useNavigate()

  const handleDone = async() => {
    await toggleTaskDone(task.id)
        
  }
    
    


  return (
    <div className="bg-slate-500 text-white rounded-md p-4">
      <header className="flex justify-between ">
      <h2 className="text-sm font-bold">{task.title}</h2>
      <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-2">
      <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>delete</button>
      <button className="bg-green-500 px-2 py-1 text-white" onClick={() => navigate(`/edit/${task.id}`) }>editar</button>
      <button className="bg-blue-500 px-2 py-1 text-white" onClick={() => handleDone(task.done)}>togleTask</button>

      </div>
      
    </div>
  )
}

export default TaskCard
