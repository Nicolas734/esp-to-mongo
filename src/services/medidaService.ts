import { medidaCollection } from "../config/db";


const inserirMedida = async (medida) => {
    try{
        const result = await medidaCollection.insertOne(medida);
        return result.ops;
    }catch(error){
        console.log(error);
        throw error;
    }
}


const buscarMedidas = async ()  => {
    try{
        const results = await medidaCollection.find().toArray();
        return results
    }catch(error){
        console.log(error);
        throw error;
    }
}

export { buscarMedidas, inserirMedida };