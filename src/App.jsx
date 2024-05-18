import React, { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import Layout from "./components/Layout";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current);
  });

  return (
    <div className="relative  z-10  w-screen">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full " />

      <Layout canvasRef={canvasRef} />
    </div>
  );
};

export default App;
