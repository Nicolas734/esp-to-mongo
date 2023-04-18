import { buscarMedidas, inserirMedida } from "../services/medidaService";


class MedidaController{
    public async buscar(req, res){
        try {
            const medidas = await buscarMedidas();
            res.json(medidas);
        } catch (error) {
            res.json(error);
        }
    }

    public async cadastrar (req, res){
        try{
            const dados = await inserirMedida(req.body);
            res.json(dados);
        } catch (error) {
            res.json(error)
        }
    }
}

export default new MedidaController();
