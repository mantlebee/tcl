import { Exception } from "./types";

export const NotImplementedException: Exception = message => ({
  message,
  name: "Not Implemented."
});
