import express from 'express';
import PessoaController from '../controller/pessoa.controller';

const pessoaRouter: express.Router = express.Router();

pessoaRouter.get('/list', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const pessoaController: PessoaController = new PessoaController(request, response);

        const result = await pessoaController.teste()
    
        response.status(200).send(result);

    } catch(error) {
        response.status(404).send({ error });
    }
});


export default pessoaRouter;