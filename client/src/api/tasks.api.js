// import axios from "axios"

// export const getTasksRequest = async () => {
//   return  await axios.get("http://localhost:4000/tasks")
// }

// export const createTaskRequest = async (task) =>{
//   return  await axios.post("http://localhost:4000/tasks", task)
// }

// export const deleteTaskRequest = async (id) =>{
//     return  await axios.delete(`http://localhost:4000/tasks/${id}`)
//   }

// export const getTaskRequest = async (id) => {
//   return await axios.get(`http://localhost:4000/tasks/${id}`)
// }  

// export const updateTaskRequest = async (id, newFields) => {
//   return await axios.put(`http://localhost:4000/tasks/${id}`, newFields)
// }

// export const toggleDoneTaskRequest = async (id,done) => {
//   return await axios.put(`http://localhost:4000/tasks/${id}`,{
//     done,
//   })}




// api/index.js

import axios from "axios";

// Utiliza la URL del backend desplegado proporcionada por Netlify
const baseURL = "https://server-itg6ju61n-aldovelacasas.vercel.app/";

const api = axios.create({
  baseURL,
});

export const getTasksRequest = async () => {
  return await api.get("/tasks");
};

export const createTaskRequest = async (task) => {
  return await api.post("/tasks", task);
};

export const deleteTaskRequest = async (id) => {
  return await api.delete(`/tasks/${id}`);
};

export const getTaskRequest = async (id) => {
  return await api.get(`/tasks/${id}`);
};

export const updateTaskRequest = async (id, newFields) => {
  return await api.put(`/tasks/${id}`, newFields);
};

export const toggleDoneTaskRequest = async (id, done) => {
  return await api.put(`/tasks/${id}`, {
    done,
  });
};
