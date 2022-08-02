import {createLogger, format, transports} from "winston";

export const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.json(),
    format.timestamp(),
  )
})
