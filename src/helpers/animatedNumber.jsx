import React from "react";
import CountUp from "react-countup";

export default function AnimatedNumber({
  value = 0,
  duration = 300,
  stepPrecision = 0,
  formatValue,
}) {
  const safeValue = Number.isFinite(value) ? value : 0;
  return (
    <CountUp
      preserveValue
      end={safeValue}
      duration={duration / 1000}
      decimals={stepPrecision}
      formattingFn={formatValue}
    />
  );
}
