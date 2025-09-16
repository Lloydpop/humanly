'use client'
import React, { useEffect, useState } from "react";

const Time: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", { hour12: false }); 
      setTime(formatted);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 justify-end">
      <span>{time}</span>
      <span>Nigeria</span>
    </div>
  );
};

export default Time;
