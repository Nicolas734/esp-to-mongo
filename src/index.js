import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongodb from 'mongodb';

dotenv.config()
const app = express();

const URI = process.env.URI || '';
const PORT = process.env.PORT || 5001

const client = new mongodb.MongoClient(URI, { useUnifiedTopology: true });

try {
    await client.connect();
    console.log('Conectado ao banco...');
} catch (error) {
    console.log(error);
}

const db = client.db('EstacaoMeteorologia');
const petsCollection = db.collection('medidas');

const buscar = async (req, res) => {
    try {
        const dados = await petsCollection.find().toArray();
        res.json(dados)
    } catch (error) {
        res.json(error)
    }
}

const cadastrar = async (req, res) => {
    try{
        const dados = await petsCollection.insertOne(req.body);
        res.json(dados.ops);
    } catch (error) {
        res.json(error)
    }
}

app.use(express.json());
app.use(cors());

app.get('/buscar', buscar);
app.post('/cadastrar', cadastrar);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
