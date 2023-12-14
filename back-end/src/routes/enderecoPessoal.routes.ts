/// <reference path="../types/main.d.ts" />
import express from 'express';
import EnderecoPessoalController from '../controller/endereco.controller';


const enderecoPessoalRouter: express.Router = express.Router();

enderecoPessoalRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoPessoalController: EnderecoPessoalController = new EnderecoPessoalController(request, response);
        const result = await enderecoPessoalController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoPessoalRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoPessoalController: EnderecoPessoalController = new EnderecoPessoalController(request, response);
        const result = await enderecoPessoalController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoPessoalRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoPessoalController: EnderecoPessoalController = new EnderecoPessoalController(request, response);
        const result = await enderecoPessoalController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


enderecoPessoalRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoPessoalController: EnderecoPessoalController = new EnderecoPessoalController(request, response);
        const result = await enderecoPessoalController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoPessoalRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const enderecoPessoalController: EnderecoPessoalController = new EnderecoPessoalController(request, response);
        const result = await enderecoPessoalController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default enderecoPessoalRouter;