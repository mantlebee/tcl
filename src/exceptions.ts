import { Exception } from "./types";

export const NotImplementedException: Exception = message => ({
  message,
  name: "Not implemented."
});

export const NotExpectedCaseException: Exception = message => ({
  message,
  name: "Not expected Ccse."
});
