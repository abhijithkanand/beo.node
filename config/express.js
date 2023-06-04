import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from '../server/routes.js';
import dotenv from 'dotenv'
// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config()



const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//logging HTTP requests and responses in development mode
app.use(logger('dev'));

// Get API Version from .env (or else assume 1.0)
const baseUrl = `/api/v${process.env.VERSION || 1.0}`;

// mount all routes on /api path
app.use(`${baseUrl}`, routes);


export default app;