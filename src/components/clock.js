// clock.js

//IMPORT
import React, { useState, useEffect } from 'react';

// Function Clock - useState, useEffect
const Clock = () => {
    const [time, setTime] = useState(new Date());

  // This clock will display the current time and update every second.
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'; //E.g. 08:35 AM (before 12 hours), 13:23 PM (after 12 hours)
    hours = hours % 24;
    hours = hours ? hours : 24; // the hour '0' should be '24'
    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return strTime;
  };

    return (
        <div id="clockStyle">
            {formatTime(time)}
        </div>
    );
};

//Export to App.js
export default Clock;
