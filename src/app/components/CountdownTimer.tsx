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
        const targetDate = new Date("2025-07-17T09:00:00Z");
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
        <div className="w-full bg-[#061d49] text-white py-12 flex flex-col items-center">
            <h2 className="text-[24px] sm:text-[28px] font-semibold mb-10 text-center">
                Countdown to PA Conference
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
                {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                        <div className="w-28 h-28 rounded-full border-4 border-teal-400 flex items-center justify-center text-[32px] sm:text-[40px] font-bold">
                            {String(item.value).padStart(2, "0")}
                        </div>
                        <span className="mt-2 text-[16px] sm:text-[18px] font-medium">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
