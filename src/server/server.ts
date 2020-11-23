  
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import globalRouter from './routes';







const app = express();

const PORT = process.env.PORT || 2503;

console.log(process.env.LAMAMADA);


console.log(`La aplicación está corriendo en el entorno: <<< ${ process.env.NODE_ENV } >>>`);






const initServer = () => {
  
  
	
  app.use('/', globalRouter);


  
  
	app.listen(PORT, () => {
		console.log(`El template está corriendo en: <<< port ${PORT} >>> `);
  });
  
};
  
initServer();