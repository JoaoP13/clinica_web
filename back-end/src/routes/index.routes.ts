import { Router } from "express";

import pessoaRouter from "./pessoa.routes";

const router: Router = Router();

router.use('/pessoa', pessoaRouter);

export default router;