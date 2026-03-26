import {v4 as uuidv4} from "uuid";

export default class OfficerLog {
  constructor(params) {
    this.id = params.id || uuidv4();
    this.class = "OfficerLog";
    this.simulatorId = params.simulatorId || null;
    this.flightId = params.flightId || null;
    this.clientId = params.clientId || null;
    this.timestamp = params.timestamp || new Date().toString();
    this.log = params.log || "";
  }
}
