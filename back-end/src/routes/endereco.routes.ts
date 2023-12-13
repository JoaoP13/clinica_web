/// <reference path="../types/main.d.ts" />
import express from 'express';
import EnderecoController from '../controller/endereco.controller';


const enderecoRouter: express.Router = express.Router();

enderecoRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoController: EnderecoController = new EnderecoController(request, response);
        const result = await enderecoController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoController: EnderecoController = new EnderecoController(request, response);
        const result = await enderecoController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoController: EnderecoController = new EnderecoController(request, response);
        const result = await enderecoController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


enderecoRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoController: EnderecoController = new EnderecoController(request, response);
        const result = await enderecoController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoController: EnderecoController = new EnderecoController(request, response);
        const result = await enderecoController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default enderecoRouter;