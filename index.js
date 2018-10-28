'use strict';
let { useState, useEffect } = require('react');

function useDeviceOrientation() {
  let [orientation, setorientation] = useState({ absolute: false, alpha: null, beta: null, gamma: null});
  function handleOrientation(event) {
    const { absolute, alpha, beta, gamma } = event
    setorientation({ absolute, alpha, beta, gamma })
  }
  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation, true);
    return () => document.removeEventListener('deviceorientation', _ => { })

  }, [])

  return orientation;
}

module.exports = useDeviceOrientation;
