import {Form, Formik} from "formik"
import { useTask } from "../context/TasksProvider";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function TaskForm() {


  const {createTask,getTask,updateTask} = useTask()
  const [task,setTask] = useState({
    title:"",
    description:""
  })
  
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const loadTask = async() => {

    
if(params.id) {
 await getTask(params.id)
 setTask({
  title: task.title,
  description: task.description
 })
}
    }
    loadTask()
  }, [])


  
  return (
    <div>

     <Formik
     initialValues={task}
     enableReinitialize={true}
     onSubmit={async(values, actions) => {
       console.log(values);
       
       if(params.id) {
         
         await updateTask(params.id, values)
        } else{
          await createTask(values)
        }
        navigate("/")
        actions.resetForm()
        
      }}
     >
      {({handleChange, handleSubmit,values, isSubmitting}) => (
        <Form onSubmit={handleSubmit} className="bg-slate-400 rounded-md px-20 py-5 max-w-sm mx-auto mt-10">
        <h1 className="text-xl font-bold uppercase text-center">{params.id ? "Edit Task": "New Task"}</h1>
        <label className="block font-bold px-1 py-1 text-center">Title</label>
        <input className="px-4 py-1 rounded-sm"
        type="text" 
        name="title" 
        placeholder="Write a title" 
        onChange={handleChange}
        value={values.title}
        />
        <label className="block font-bold px-1 py-1 text-center"> Description</label>
        <textarea className="px-6 py-1 rounded-sm"
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
        value={values.description}
        ></textarea>
        
        <button className="block bg-blue-600 px-5 py-1 rounded-xl text-white w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "saving..." : "Save"}
        </button>

      </Form>
      )}
     </Formik>
    </div>
  )
}

export default TaskForm
