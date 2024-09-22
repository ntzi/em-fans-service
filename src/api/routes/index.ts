import { Router } from 'express';

import fansRoutes from './fans.js';

const rootRouter = Router();

rootRouter.use('/api', fansRoutes);

export default rootRouter;
