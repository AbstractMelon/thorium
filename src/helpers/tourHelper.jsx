import React from "react";
import {renderToStaticMarkup} from "react-dom/server";
import { useMutation } from "@apollo/client";

import gql from "graphql-tag.macro";
import {TourProvider, useTour} from "@reactour/tour";
import "./tourHelper.scss";
import { FaVolumeUp } from "react-icons/fa";
import { ClientContext } from "components/client/client";
import { isMedia } from "../components/client/Card";

const synth = window.speechSynthesis;

const SET_CLIENT_TRAINING = gql`
  mutation ClientSetTraining($id: ID!, $training: Boolean!) {
    clientSetTraining(client: $id, training: $training)
  }
`;

const TourStateSync = ({isOpen}) => {
  const {setIsOpen} = useTour();

  React.useEffect(() => {
    setIsOpen(Boolean(isOpen));
  }, [isOpen, setIsOpen]);

  return null;
};

/**
 * Helper component for displaying a tour with steps.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.steps - An array of steps for the tour.
 * @param {string} [props.innerKey] - The inner key for the tour component.
 * @param {boolean} [props.training] - Flag indicating if the tour is in training mode.
 * @param {function} [props.onRequestClose] - Callback function to be called when the tour is closed.
 * @returns {JSX.Element|null} The rendered Tour component or null if there are no steps.
 */
const TourHelper = ({
  steps,
  innerKey = undefined,
  training: propsTraining = undefined,
  onRequestClose = null
}) => {
  const { client = {}, station = {}, simulator = {} } = React.useContext(
    ClientContext
  );

  const speak = (stepNum) => {
    synth && synth.cancel();
    const step = steps[stepNum - 1];
    const text =
      typeof step.content === "string"
        ? step.content
        : (() => {
            const div = document.createElement("div");
            div.innerHTML = renderToStaticMarkup(<>{step.content}</>);
            return div.innerText || div.textContent || "";
          })();
    setTimeout(
      () => synth.speak(new SpeechSynthesisUtterance(text)),
      100
    );
  };
  let { id } = client;
  let training = propsTraining ?? client.training;

  const [setClientTraining] = useMutation(SET_CLIENT_TRAINING, {
    variables: { id, training: false }
  });

  // If we are in training mode and the station has audio or video training, don't show the tour.
  if (station.training && isMedia(station.training) && simulator.training)
  return null;
  if (!steps) return null;
  return (
    <TourProvider
      steps={steps}
      afterOpen={(target) => {
        const node = document.getElementById("___reactour");
        if (node) {
          node.style.transform = "translateZ(-10px)";
        }
      }}
      onClickClose={() => {
        synth && synth.cancel();
        onRequestClose ? onRequestClose() : setClientTraining();
      }}
      badgeContent={(badgeProps) => {
        const current =
          typeof badgeProps?.current === "number"
            ? badgeProps.current
            : typeof badgeProps?.currentStep === "number"
            ? badgeProps.currentStep + 1
            : 1;
        return (
          <div className="tour-speaker" onClick={() => speak(current)}>
            <FaVolumeUp size="1em" /> Speak This
          </div>);

      }}>
      <TourStateSync key={innerKey} isOpen={training || false} />
    </TourProvider>);


};
export default TourHelper;