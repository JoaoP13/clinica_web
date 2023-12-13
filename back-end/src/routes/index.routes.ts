import { Router } from "express";

import pessoaRouter from "./pessoa.routes";
import pacienteRouter from "./paciente.routes";
import enderecoRouter from "./endereco.routes";

const router: Router = Router();

router.use('/pessoa', pessoaRouter);
router.use('/paciente', pacienteRouter);
router.use('/endereco', enderecoRouter);
router.use('/especialidade', enderecoRouter);

export default router;