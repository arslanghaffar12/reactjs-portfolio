import React, { useState, useEffect } from 'react';
import Approutes from './Approutes';
import Sidebar from './components/Sidebar/Sidebar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Shutter from './Shutter';
import AnimatedCursor from "react-animated-cursor";
import Navbar from './components/Navbar/Navbar';

function App() {
  const [showShutter, setShowShutter] = useState(true);

  useEffect(() => {
    // Simulate removing Shutter after 3 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      setShowShutter(false);
    }, 1500);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Run this effect only once on mount

  return (
    <div className="App"> <AnimatedCursor
    innerSize={14}
    outerSize={20}
    color="165, 166, 255"
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link",
    ]}
  />
      {showShutter && (
        <Shutter/>
            )}
          <div className="siderBar">
            <Sidebar />
          </div>
          <div className="body">
            <div className="navy">
            <Navbar/>
            </div>
            <Approutes />
          </div>
        

        
    </div>
  );
}

export default App;
