import { Router } from "express";
import { getTasks,createTask,updateTask,getTask,deleteTask } from "../controllers/task.controllers.js";

const router = Router()

router.get("/tasks", getTasks)

router.post("/tasks", createTask)

router.put("/tasks/:id", updateTask)

router.get("/tasks/:id", getTask)

router.delete("/tasks/:id", deleteTask)


export default router;