  
import dotenv from 'dotenv';
dotenv.config();


import express from "express";
import globalRouter from './routes';

//import { startWebpackCompilation } from './webpackUtilities';






const app = express();

const PORT = process.env.PORT || 2503;




console.log(`La aplicación está corriendo en el entorno: <<< ${ process.env.NODE_ENV } >>>`);






const initServer = () => {
  
  //startWebpackCompilation();
  
	
  app.use('/', globalRouter);
  
  
	app.listen(PORT, () => {
		console.log(`El template está corriendo en: <<< port ${PORT} >>> `);
  });
  
};
  
initServer();