import { Router } from "express";

import pessoaRouter from "./pessoa.routes";
import pacienteRouter from "./paciente.routes";
import enderecoRouter from "./endereco.routes";
import clinicaRouter  from "./clinica.routes";

const router: Router = Router();

router.use('/pessoa', pessoaRouter);
router.use('/paciente', pacienteRouter);
router.use('/endereco', enderecoRouter);
router.use('/especialidade', enderecoRouter);
router.use('/clinica', clinicaRouter);

export default router;