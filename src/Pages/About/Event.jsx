import offer1 from "../../assets/asset/offers/1.jpg";
import offer2 from "../../assets/asset/offers/3.jpg";
import offer3 from "../../assets/asset/offers/2.jpg";
import offer4 from "../../assets/asset/offers/4.jpg";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContectForm from "../ContectUs/ContectForm";

const Event = () => {
  const targetDate = "2024-07-10T23:59:59";

  const calculateTimeLeft = () => {
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      {/* ad sale section start */}
      <section className=" mb-10 ">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col lg:flex-row gap-gap_primary  p-6">
            <img className="lg:w-72 " src={offer1} alt="" />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:w-[70%] gap-6 text-center">
              {/* cart1 */}
              <div className="bg-white shadow-xl p-4 ">
                <div className="h-[70%] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={offer2}
                    alt=""
                  />
                </div>

                <p className="text-2xl font-bold  items-start pb-2 pt-6">
                  70% off Sale
                </p>

                <div className="flex justify-center"></div>
              </div>
              {/* cart1 */}
              <div className="bg-white shadow-xl p-4 ">
                <div className="h-[70%] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={offer3}
                    alt=""
                  />
                </div>

                <p className="text-2xl font-bold  items-start pb-2 pt-6">
                  Flash Sale
                </p>

                <div className="flex justify-center"></div>
              </div>
              {/* cart1 */}
              <div className="bg-white shadow-xl p-4 ">
                <div className="h-[70%] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={offer4}
                    alt=""
                  />
                </div>

                <p className="text-2xl font-bold  items-start pb-2 pt-6">
                  Cyber Monday
                </p>

                <div className="flex justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* countdown section */}
      <section>
        {/* 1st adv */}
        <div
          data-aos="fade-right"
          className="lg:w-[100%] bg-green-100 px-10 py-2 "
        >
          <div className="flex gap-5 text-2xl justify-center pt-6">
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
          <h1 className="text-5xl font-semibold items-start pb-8 text-text_secondary pt-4 text-center">
            WOO ! Up to 60% Discount on your First Order
          </h1>
          <div className="flex flex-wrap ml-16 gap-x-32 pt-6 "></div>
        </div>
      </section>

      {/* ad section */}
      <section className="mb-10 pt-10 pb">
        <div
          data-aos="fade-up"
          className="bg-text_secondary py-4 w-full text-center "
        >
          <p className="text-xl font-semibold items-start pb-2 text-white px-20">
            Get The Best Deal For Headphones{" "}
          </p>

          <Link>
            <p className="text-sm font-medium text-white text-center ">
              Shop Now
            </p>
          </Link>
        </div>
      </section>

      {/* mail section */}
      <section className="pt-10">
        <div className="flex flex-col justify-center py-20 lg:flex-row  bg-green-200 ">
          <div className="flex justify-center items-center">
            <img className="w-52" src={mobile3} alt="" />
          </div>
          <div className="text-center px-2">
            <p className=" text-xl lg:text-3xl font-semibold items-start text-black pt-6">
              Get <span className="text-orange-400">20% </span> Off Discount
              Coupon{" "}
            </p>
            <p className="text-md lg:text-xl font-light items-start pb-2 text-black pt-1">
              by Subscribe our Newsletter{" "}
            </p>
            <div className="pt-6">
              <input
                className="w-full h-12 px-2"
                type="email"
                name=""
                placeholder="Email Address"
                id=""
              />
              <button className="btn btn-ghost bg-orange-400 hover:bg-white hover:text-orange-400 hover:active:text-orange-400 px-6 py-2 text-black font-semibold mt-2">
                Get A Coupon
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*event submition form  */}
      <section className="mb-10 pt-10 pb">
        {/* <div className="bg-green-200 text-center py-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
          Event Form
          </h1>
        </div> */}
        <ContectForm></ContectForm>
      </section>
    </div>
  );
};

export default Event;
