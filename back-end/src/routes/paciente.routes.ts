/// <reference path="../types/main.d.ts" />
import express from 'express';
import PacienteController from '../controller/paciente.controller';


const pacienteRouter: express.Router = express.Router();

pacienteRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const pacienteController: PacienteController = new PacienteController(request, response);
        const result = await pacienteController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default pacienteRouter;