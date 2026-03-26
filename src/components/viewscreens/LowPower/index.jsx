import React, {Component} from "react";
import Lottie from 'react-lottie-player'

import animationData from "./data.json";

export default function LowPower() {
   return <Lottie
      loop
      animationData={animationData}
      play
    />
}

