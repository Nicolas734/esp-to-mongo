import mongodb from 'mongodb';
import * as dotenv from 'dotenv';



dotenv.config();
const URI = process.env.URI || '';

const client = new mongodb.MongoClient(URI, { useUnifiedTopology: true });

let medidaCollection;

const connect = async () => {
    try{
        await client.connect();
        const db = client.db('EstacaoMeteorologia');
        medidaCollection = db.collection('medidas');
        console.log("Conexão ao banco de dados....");
        // createTrigger()
    }catch(error){
        console.error(error);
    }
}



// const createTrigger = () => {
//     const pipeline = [
//         {
//           $project: { documentKey: false }
//         }
//       ];
//     const changeStream = medidaCollection.watch(pipeline);
//     changeStream.on("change", function(change) {
//         console.log(change.fullDocument);
//       });
// }


export { connect, medidaCollection };