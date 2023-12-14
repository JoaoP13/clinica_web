/// <reference path="../types/main.d.ts" />
import express from 'express';
import ConsultaController from '../controller/endereco.controller';


const enderecoRouter: express.Router = express.Router();

enderecoRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const consultaController: ConsultaController = new ConsultaController(request, response);
        const result = await consultaController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const consultaController: ConsultaController = new ConsultaController(request, response);
        const result = await consultaController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const consultaController: ConsultaController = new ConsultaController(request, response);
        const result = await consultaController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


enderecoRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const consultaController: ConsultaController = new ConsultaController(request, response);
        const result = await consultaController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const consultaController: ConsultaController = new ConsultaController(request, response);
        const result = await consultaController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default enderecoRouter;