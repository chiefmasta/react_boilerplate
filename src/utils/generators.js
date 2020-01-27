export const actionGenerator = (action, type) => {
  switch (type) {
    case "req":
      return action + "_REQUEST";
    case "res":
      return action + "_RESPONSE";
    case "fail":
      return action + "_FAILD";
    case "init":
      return action + "_INIT";
    default:
      return action + "_FAILD";
  }
};
