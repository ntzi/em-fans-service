import app from './api/loaders/appLoader.js';
import { postgresLoad } from './api/loaders/dbLoader.js';
import { ResponseI } from './api/types/responses/responsesTypes.js';
import config from './config/config.js';

const {
	api: { port },
} = config;

await postgresLoad();

app.listen(port, () => {
	console.log(`Gateway-service is listening on port ${port}`);
});

app.get('/', async (_req, res: ResponseI) => {
	console.log('Fans-Service is running...');
	return res.ok('Fans-Service is running...');
});

export default app;
