/// <reference path="../types/main.d.ts" />
import express from 'express';
import ClinicaController from '../controller/clinica.controller';


const clinicaRouter: express.Router = express.Router();

clinicaRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const clinicaController: ClinicaController = new ClinicaController(request, response);
        const result = await clinicaController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

clinicaRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const clinicaController: ClinicaController = new ClinicaController(request, response);
        const result = await clinicaController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

clinicaRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const clinicaController: ClinicaController = new ClinicaController(request, response);
        const result = await clinicaController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


clinicaRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const clinicaController: ClinicaController = new ClinicaController(request, response);
        const result = await clinicaController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

clinicaRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const clinicaController: ClinicaController = new ClinicaController(request, response);
        const result = await clinicaController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default clinicaRouter;