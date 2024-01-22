import  express  from "express";
import { PORT } from "./config.js";
import cors from "cors";
import {dirname, join} from "path"
import { fileURLToPath } from "url";

import indexRoute from "./routes/index.routes.js"
import taskRoutes from "./routes/tasks.routes.js"



const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))


app.use(cors())
app.use(express.json());
app.use(indexRoute);
app.use(taskRoutes);

app.use(express.static(join(__dirname, "../client/dist")))

app.listen(PORT);
console.log(`server is running on port ${PORT}`);