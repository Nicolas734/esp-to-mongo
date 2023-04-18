import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connect, medidaCollection } from './config/db'; 
import routes from "./routes";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;


connect();

app.use(express.json());
app.use(cors());
app.use(routes);





app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
