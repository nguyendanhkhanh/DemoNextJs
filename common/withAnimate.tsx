import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const withAnimate = (component: JSX.Element, configs?: any) => {
  return (
    <Controller>
      <Scene classToggle="active" reverse={true} offset={-200}>
        <div className="animate-section">{component}</div>
      </Scene>
    </Controller>
  );
};

export default withAnimate;
