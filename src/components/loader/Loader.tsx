import React, { useEffect, useState } from "react";

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [startExit, setStartExit] = useState(false);
  const [panelsOpen, setPanelsOpen] = useState(false);

  useEffect(() => {
    const exitTimeout = setTimeout(() => {
      setStartExit(true);

      setTimeout(() => {
        setPanelsOpen(true);

        setTimeout(() => {
          onFinish();
        }, 1200)
      }, 800); 
    }, 5000);

    return () => clearTimeout(exitTimeout);
  }, [onFinish]);

  return (
    <div className="loader-wrapper fixed inset-0 z-50 bg-black overflow-hidden">
      <div className={`top-panel bg-black ${panelsOpen ? "slide-up" : ""}`} />
      <div className={`bottom-panel bg-black ${panelsOpen ? "slide-down" : ""}`} />

      <div
        className={`loader-container ${
          startExit ? "start-exit" : ""
        } w-full h-full absolute top-0 left-0 flex items-center flex-col justify-center`}
      >
        <video
          src="/huly.mp4"
          muted
          autoPlay
          playsInline
          className="video-element object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
