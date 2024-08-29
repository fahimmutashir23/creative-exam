import { useEffect, useState } from "react";

const Home = () => {
  const date = "2024-10-01T23:59:59";



  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);


  return (
    <div>
      <section className="my-10 ">
        <div className="">
          <div
            data-aos="zoom-in"
            className="bg-green-100 px-10 py-20 "
          >
            <div className="flex gap-5 text-2xl justify-center">
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.days }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                sec
              </div>
            </div>
            <h1 className="text-5xl font-semibold items-start pb-8 text-text_secondary pt-20 text-center">
              WOO ! FLASH SALE
            </h1>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
