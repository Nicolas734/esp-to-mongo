import { Router } from "express";
import { buscarMedidas, inserirMedida } from "../services/medidaService";



const routes = Router();

const buscar = async (req, res) => {
    try {
        const medidas = await buscarMedidas();
        res.json(medidas);
    } catch (error) {
        res.json(error);
    }
}


const cadastrar = async (req, res) => {
    try{
        const dados = await inserirMedida(req.body);
        res.json(dados);
    } catch (error) {
        res.json(error)
    }
}


routes.get('/buscar', buscar);
routes.post('/cadastrar', cadastrar);

export default routes;