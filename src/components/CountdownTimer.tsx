
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30); // 30 days from now
    
    const difference = Number(launchDate) - Number(new Date());
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Calculate time immediately on component mount
    setTimeLeft(calculateTimeLeft());
    
    // Set up interval to update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs once on mount

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-[600px] mx-auto animate-fade-in">
      {timeUnits.map((unit, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-primary/30"
          style={{ boxShadow: "0 0 15px rgba(20, 241, 149, 0.2)" }}
        >
          <span className="font-mono text-3xl md:text-5xl font-bold text-primary">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
