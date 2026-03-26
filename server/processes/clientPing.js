// Loop through all of the clients and
// check to see if they are still connected
import App from "../app";
import {pubsub} from "../helpers/subscriptionManager";
import {v4 as uuidv4} from "uuid";

const clientPing = () => {
  App.clients.forEach(c => {
    // if (c.ping) {
    //   c.disconnect();
    // }
    if (c.connected) {
      const ping = uuidv4();
      c.setPing(ping);
      pubsub.publish("clientPing", c);
    }
  });
  setTimeout(clientPing, 1000 * 60);
};
clientPing();
