import pino from 'pino';

const istDevelopment = process.env.NODE_ENV !== 'production';

const logger = pino({
    level: process.env.LOG_LEVE ?? 'info',
    transport: istDevelopment ? { target: 'pino-pretty' } : undefined
});

export default logger;