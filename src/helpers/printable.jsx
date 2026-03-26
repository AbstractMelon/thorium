import React, {Fragment} from "react";
import {createPortal} from "react-dom";
import "./printable.scss";

export default function Printable(props) {
  // Render printable outside the root React element
  return (
    <Fragment>
      {props.preview && props.children}
      {createPortal(
        <div className="printable">{props.children}</div>,
        document.body,
      )}
    </Fragment>
  );
}
