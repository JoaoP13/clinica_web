import { Router } from "express";

import pessoaRouter from "./pessoa.routes";
import pacienteRouter from "./paciente.routes";

const router: Router = Router();

router.use('/pessoa', pessoaRouter);
router.use('/paciente', pacienteRouter);

export default router;