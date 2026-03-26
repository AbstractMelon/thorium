import {v4 as uuidv4} from "uuid";

export default class RemoteAccess {
  id: string;
  code: string;
  state: "Denied" | "Accepted" | "sent";
  station: string;
  timestamp: string;
  constructor(params: Partial<RemoteAccess> = {}) {
    this.id = params.id || uuidv4();
    this.code = params.code || "";
    this.state = params.state || "sent";
    this.station = params.station || "";
    this.timestamp = params.timestamp || new Date().toISOString();
  }
}
