/// <reference path="../types/main.d.ts" />
import express from 'express';
import MedicoController from '../controller/medico.controller';


const medicoRouter: express.Router = express.Router();

medicoRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const medicoController: MedicoController = new MedicoController(request, response);
        const result = await medicoController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

medicoRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const medicoController: MedicoController = new MedicoController(request, response);
        const result = await medicoController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

medicoRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const medicoController: MedicoController = new MedicoController(request, response);
        const result = await medicoController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


medicoRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const medicoController: MedicoController = new MedicoController(request, response);
        const result = await medicoController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

medicoRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const medicoController: MedicoController = new MedicoController(request, response);
        const result = await medicoController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default medicoRouter;