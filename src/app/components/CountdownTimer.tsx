'use client';
import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-07-17T09:00:00Z');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-[20vh] w-full flex-col items-center bg-pa-background px-6 py-24 text-white">
      <h2 className="mb-6 text-3xl font-bold md:text-5xl">
        Countdown to <span className="text-primary">PA Conference 2025</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-teal-400 text-3xl font-bold sm:h-28 sm:w-28 sm:text-4xl md:h-32 md:w-32 md:text-5xl lg:h-36 lg:w-36 lg:text-6xl">
              {String(item.value).padStart(2, '0')}
            </div>
            <span className="mt-2 text-base font-medium sm:text-lg md:text-xl lg:text-2xl">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
