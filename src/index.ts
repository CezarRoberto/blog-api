import express from 'express';
import { createConnection } from 'typeorm';
import "reflect-metadata";
import { createUserRouter } from './routes/user/createUser';


const app = express();

async function main() {
  try{
    const connection = await createConnection()
    if(connection){
      console.log("Connected Sucessful")
    }
     app.use(express.json());
     app.use(createUserRouter);
  }catch(error){
    console.log(error)
  }

   app.listen(8000, () => {
    console.log('Now running on port 8000');
  })
}

main();

