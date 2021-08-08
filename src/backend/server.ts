import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import globalRouter from './routes';








const app = express();




console.log(`La aplicación está corriendo en el entorno: <<< ${ process.env.NODE_ENV } >>>`);






const initServer = () => {
  
	
  app.use('/', globalRouter);



  
	app.listen(process.env.PORT, () => {
		console.log(`El template está corriendo en: <<< port ${process.env.PORT} >>> `);
  });
  
};
  
initServer();