import type { Logger, LogLevelDesc } from "loglevel";
import loglevel from "loglevel";

const level: LogLevelDesc =
  (__LOGLEVEL__ as LogLevelDesc | undefined) || "info";

const logger: Logger = loglevel.getLogger("wallet");

logger.setLevel(level);

export { logger };
