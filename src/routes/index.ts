import { Router } from "express";
import { buscarMedidas, inserirMedida } from "../services/medidaService";
import MedidaController from "../controllers/MedidaController";



const routes = Router();


routes.get('/buscar', MedidaController.buscar);
routes.post('/cadastrar', MedidaController.cadastrar);
routes.post('/cadastrar-multiplos', MedidaController.insertMany);

export default routes;