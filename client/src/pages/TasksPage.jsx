import TaskCard from "../components/taskCard"
import { useTask } from "../context/TasksProvider"
import { useEffect } from "react";

function TasksPage() {
  const {tasks,loadTasks} = useTask();



  useEffect(() => {

    loadTasks();

  }, [])

  function renderMain(){
    if ( tasks.length === 0) return <h1>no task yet</h1>
    return tasks.map((task) => <TaskCard task={task} key={task.id} />)
  }


  return (
  
   <div>
<h1 className="text-5xl text-yellow-200 font-bold text-center ">Tasks</h1>
     <div className="grid grid-cols-3 gap-2">
{renderMain()}

    </div>
   </div>

  )
}

export default TasksPage
