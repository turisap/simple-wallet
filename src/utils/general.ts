export const filterFulfilled = (
  result: PromiseSettledResult<unknown>
): boolean => result && result.status === "fulfilled";
