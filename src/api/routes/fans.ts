import { Router } from 'express';

import { getFansOfArtists } from '../controllers/fans.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import isAuthenticated from '../middleware/auth/authenticated.js';

const router = Router();

router.get(
	'/v1/fans/relevant-artists/:artistIds',
	isAuthenticated,
	asyncHandler(getFansOfArtists)
);

export default router;
