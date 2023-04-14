import { pino } from "pino";

export const logger = pino({
  formatters: {
    level: (label) => {
      return { severity: label.toUpperCase() };
    },
  },
  serializers: {
    ...pino.stdSerializers
  },
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
});