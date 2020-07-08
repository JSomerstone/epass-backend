import dev from "./config.dev";
import test from "./config.test";
import prod from "./config.prod";

const stage = process.env.STAGE ? process.env.STAGE : "dev";

let settings;
switch (stage) {
  case "dev":
    settings = dev;
    break;
  case "test":
    settings = test;
    break;
  default:
    settings = prod;
    break;
}
export default { ...settings, stage };