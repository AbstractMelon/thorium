import React from "react";
import {createRoot} from "react-dom/client";
import {loadDevMessages, loadErrorMessages} from "@apollo/client/dev";
// import "./helpers/sentry";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";
import {initializeClient} from "helpers/getClientId";

if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

if (
  !React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
) {
  try {
    Object.defineProperty(
      React,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      {
        value: React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        configurable: true,
      },
    );
  } catch (err) {
    // Do nothing
  }
}

initializeClient();
try {
  window.thorium = window.thorium || {
    sendMessage: args => {},
  };
  window.thoriumLocal = {
    clockSync: 0,
    roundTrip: 0,
  };
} catch (err) {
  // Do nothing
}
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);
