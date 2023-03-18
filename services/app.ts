import express from 'express';
// import { connectToDb } from './configs/database';
// import { appRoute } from './routes';
import { logger } from './utils/logger';

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({status: "RUNNING"}))

app.listen(process.env.BACKEND_PORT || 8000, () => {
	// connectToDb().then(() => {
		logger.info('Connected to db');
		logger.info('app running on port ' + process.env.BACKEND_PORT);
	// });
});
