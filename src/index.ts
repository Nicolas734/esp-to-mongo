import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connect, medidaCollection } from './config/db'; 
// import routes from "./routes";



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;


connect();

app.use(express.json());
app.use(cors());
// app.use(routes);


const buscar = async (req, res) => {
    try {
        const results = await medidaCollection.find().toArray();
        res.json(results);
    } catch (error) {
        res.json(error);
    }
}


const cadastrar = async (req, res) => {
    try{
        const dados = req.body;
        const result = await medidaCollection.insertOne(dados);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


const cadastrarMultiplo = async (req, res) => {
    try{
        const dados = req.body;
        const result = await medidaCollection.insertMany(dados);
        res.json(result);
    } catch (error) {
        res.json(error)
    }
}


app.get('/buscar', buscar);
app.post('/cadastrar', cadastrar);
app.post('/cadastrar-multiplos', cadastrarMultiplo);







app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
