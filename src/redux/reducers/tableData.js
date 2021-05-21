import { FETCH_TABLE } from "./constant";

export default (table = [], action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return Array.from(action.payload);
    default:
      return table;
  }
};
