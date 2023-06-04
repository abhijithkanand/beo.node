import express from 'express';
import { sumOfEvenNumbers } from './controller/operations.controller.js';

const router = express.Router();

router.get('/hello', (req, res) => {res.status(200).send('Hello World!') });
router.post('/sumOfEvenNumbers',sumOfEvenNumbers);

export default router
