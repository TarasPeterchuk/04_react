import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [demension, steDimensions] = useState({ width: null, height: null });
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      steDimensions({ width: innerWidth, height: innerHeight });
    };
    steDimensions({ width: innerWidth, height: innerHeight });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { width, height } = demension;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
