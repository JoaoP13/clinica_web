/// <reference path="../types/main.d.ts" />
import express from 'express';
import FuncionarioController from '../controller/funcionario.controller';


const funcionarioRouter: express.Router = express.Router();

funcionarioRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const funcionarioController: FuncionarioController = new FuncionarioController(request, response);
        const result = await funcionarioController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

funcionarioRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const funcionarioController: FuncionarioController = new FuncionarioController(request, response);
        const result = await funcionarioController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

funcionarioRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const funcionarioController: FuncionarioController = new FuncionarioController(request, response);
        const result = await funcionarioController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


funcionarioRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const funcionarioController: FuncionarioController = new FuncionarioController(request, response);
        const result = await funcionarioController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

funcionarioRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const funcionarioController: FuncionarioController = new FuncionarioController(request, response);
        const result = await funcionarioController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default funcionarioRouter;