/// <reference path="../types/main.d.ts" />
import express from 'express';
import EspecialidadeController from '../controller/especialidade.controllers';


const enderecoRouter: express.Router = express.Router();

enderecoRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const especialidadeController: EspecialidadeController = new EspecialidadeController(request, response);
        const result = await especialidadeController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const especialidadeController: EspecialidadeController = new EspecialidadeController(request, response);
        const result = await especialidadeController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.get('/getByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const especialidadeController: EspecialidadeController = new EspecialidadeController(request, response);
        const result = await especialidadeController.getByFilters()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


enderecoRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const especialidadeController: EspecialidadeController = new EspecialidadeController(request, response);
        const result = await especialidadeController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

enderecoRouter.delete('/deleteByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const especialidadeController: EspecialidadeController = new EspecialidadeController(request, response);
        const result = await especialidadeController.delete();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default enderecoRouter;