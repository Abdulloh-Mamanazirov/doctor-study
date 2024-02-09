import { Button } from "@mantine/core";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Countdown = ({ startDate, title, data }) => {
  const { t } = useTranslation();

  const calculateTimeLeft = () => {
    let difference = +new Date(startDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    Object.keys(timeLeft).length > 0 && (
      <div className="py-16">
        <div className="text-center">
          <p className="text-xl text-primary-desc">
            Live broadcast of the event
          </p>
          <h2 className="mx-auto my-5 w-11/12 md:max-w-screen-lg text-2xl md:text-3xl text-primary-tite font-bold">
            “{title}”
          </h2>
          <p className="text-xl text-primary-desc">will start in</p>
        </div>
        <div className="flex items-center justify-center gap-3 text-center my-10">
          <span className="flex flex-col text-center">
            <p className="text-3xl md:text-5xl font-semibold text-primary-tite">
              {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
            </p>
            <p className="opacity-70">days</p>
          </span>
          <span>:</span>
          <span className="flex flex-col text-center">
            <p className="text-3xl md:text-5xl font-semibold text-primary-tite">
              {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
            </p>
            <p className="opacity-70">hours</p>
          </span>
          <span>:</span>
          <span className="flex flex-col text-center">
            <p className="text-3xl md:text-5xl font-semibold text-primary-tite">
              {timeLeft.minutes < 10
                ? "0" + timeLeft.minutes
                : timeLeft.minutes}
            </p>
            <p className="opacity-70">minutes</p>
          </span>
          <span>:</span>
          <span className="flex flex-col text-center">
            <p className="text-3xl md:text-5xl font-semibold text-primary-tite">
              {timeLeft.seconds < 10
                ? "0" + timeLeft.seconds
                : timeLeft.seconds}
            </p>
            <p className="opacity-70">seconds</p>
          </span>
        </div>
        <div className="text-center">
          <Button
            color={"darkred"}
            size="lg"
            component={Link}
            state={data}
            to={String(data?.id)}
          >
            {t("participate")}
          </Button>
        </div>
      </div>
    )
  );
};

export default Countdown;
