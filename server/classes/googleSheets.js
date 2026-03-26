import {v4 as uuidv4} from "uuid";

export default class GoogleSheets {
  constructor(params) {
    this.id = params.id || uuidv4();
    this.class = "GoogleSheets";
    this.simulatorId = params.simulatorId || null;
  }
}
