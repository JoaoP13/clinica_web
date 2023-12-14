import { Router } from "express";

import pessoaRouter from "./pessoa.routes";
import pacienteRouter from "./paciente.routes";
import enderecoRouter from "./endereco.routes";
import clinicaRouter  from "./clinica.routes";
import consultaRouter  from "./consulta.routes";
import medicoRouter  from "./medico.routes";
import funcionarioRouter  from "./funcionario.routes";
import especialidadeRouter  from "./especialidade.routes";

const router: Router = Router();

router.use('/pessoa', pessoaRouter);
router.use('/paciente', pacienteRouter);
router.use('/endereco', enderecoRouter);
router.use('/especialidade', especialidadeRouter);
router.use('/clinica', clinicaRouter);
router.use('/consulta', consultaRouter);
router.use('/medico', medicoRouter);
router.use('/funcionario', funcionarioRouter);

export default router;