/// <reference path="../types/main.d.ts" />
import express from 'express';
import PessoaController from '../controller/pessoa.controller';


const pessoaRouter: express.Router = express.Router();

pessoaRouter.post('/create', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const pacienteController: PessoaController = new PessoaController(request, response);
        const result = await pacienteController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

pessoaRouter.get('/get', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const pacienteController: PessoaController = new PessoaController(request, response);
        const result = await pacienteController.list();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

pessoaRouter.get('/getByCpf/:cpf', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const pacienteController: PessoaController = new PessoaController(request, response);
        const { cpf } = request.params
        console.log(cpf)
        const result = await pacienteController.getByCpf(cpf)
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


pessoaRouter.put('/update', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const pacienteController: PessoaController = new PessoaController(request, response);
        const result = await pacienteController.create();
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});

pessoaRouter.delete('/deleteByCpf/:cpf', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        
        const pacienteController: PessoaController = new PessoaController(request, response);
        const { cpf } = request.params
        const result = await pacienteController.delete(cpf);
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default pessoaRouter;