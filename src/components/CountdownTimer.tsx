
import { useCallback, useEffect, useState } from "react";

interface CountDownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownTimer = () => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownDate: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownDate - currentTime;

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
    } else {
      const days =
        Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
          ? `${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`
          : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;
          
      const hours =
        Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >= 10
          ? `${Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`
          : `0${Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`;
          
      const minutes =
        Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
          ? `${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`
          : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;
          
      const seconds =
        Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
          ? `${Math.floor((timeDifference % (60 * 1000)) / 1000)}`
          : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30); // 30 days from now
    
    // Initial calculation
    getTimeDifference(launchDate.getTime());
    
    // Set up interval
    const timer = setInterval(() => {
      getTimeDifference(launchDate.getTime());
    }, 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = startCountDown();
    return () => timer();
  }, [startCountDown]);

  const timeUnits = [
    { value: countDownTime.days, label: countDownTime.days === "01" ? "Day" : "Days" },
    { value: countDownTime.hours, label: countDownTime.hours === "01" ? "Hour" : "Hours" },
    { value: countDownTime.minutes, label: countDownTime.minutes === "01" ? "Minute" : "Minutes" },
    { value: countDownTime.seconds, label: countDownTime.seconds === "01" ? "Second" : "Seconds" }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-[600px] mx-auto animate-fade-in">
      {timeUnits.map((unit, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center gap-5"
        >
          <div 
            className="h-16 w-16 sm:w-32 sm:h-32 flex justify-between items-center bg-black/30 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-primary/30 animate-float"
            style={{ 
              boxShadow: "0 0 15px rgba(20, 241, 149, 0.2)",
              animationDelay: `${index * 0.2}s` 
            }}
          >
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-black/60"></div>
            <span className="font-mono text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F4FEF8] to-[#1BF472] animate-pulse" style={{animationDuration: '2s'}}>
              {unit.value}
            </span>
            <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-black/60"></div>
          </div>
          <span className="text-xs md:text-sm text-muted-foreground animate-fade-in" style={{animationDelay: `${index * 0.15 + 0.3}s`}}>
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
