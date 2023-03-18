import bunyan from 'bunyan';

export const logger = bunyan.createLogger({
	name: 'backend',
	stream: process.stdout,
	level: 'info',
});
