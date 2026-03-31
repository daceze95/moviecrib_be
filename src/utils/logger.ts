import pino from 'pino';

const isProd = process.env.NODE_ENV === 'production';

export const logger = pino(
  isProd
    ? {} // production: plain JSON
    : {
        transport: {
          target: 'pino-pretty', // human-friendly output in dev
          options: {
            colorize: true,
            translateTime: 'HH:MM:ss',
            ignore: 'pid,hostname', // optional: hide less useful fields
          },
        },
      }
);