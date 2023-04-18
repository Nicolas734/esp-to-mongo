import { Router } from "express";
import { buscarMedidas, inserirMedida } from "../services/medidaService";
import MedidaController from "../controllers/MedidaController";



const routes = Router();


routes.get('/buscar', MedidaController.buscar);
routes.post('/cadastrar', MedidaController.cadastrar);

export default routes;