import Banner from "./Banner";
import brand1 from "../../assets/asset/brand/pngwing.com (11).png";
import brand2 from "../../assets/asset/brand/pngwing.com (12).png";
import brand3 from "../../assets/asset/brand/pngwing.com (13).png";
import brand4 from "../../assets/asset/brand/pngwing.com (14).png";
import brand5 from "../../assets/asset/brand/pngwing.com (15).png";
import brand6 from "../../assets/asset/brand/pngwing.com (16).png";
import brand7 from "../../assets/asset/brand/pngwing.com (17).png";
import pay from "../../assets/asset/brand/pngwing.com (25).png";

import banner1 from "../../assets/asset/banner/pngwing.com (6).png";
import banner2 from "../../assets/asset/banner/pngwing.com (3).png";
import banner3 from "../../assets/asset/banner/pngwing.com (4).png";
import banner4 from "../../assets/asset/banner/pngwing.com (5).png";
import banner5 from "../../assets/asset/banner/pngwing.com (26).png";
import mobile1 from "../../assets/asset/mobile and gaget/pngwing.com (9).png";
import mobile2 from "../../assets/asset/mobile and gaget/pngwing.com (7).png";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import mobile4 from "../../assets/asset/mobile and gaget/pngwing.com (8).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "././home.css";
import { Link } from "react-scroll";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home = () => {
  const date = "2024-06-01T23:59:59";



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
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);


  return (
    <div className="home">
      <Banner></Banner>

      {/* shop by brand section */}
      <section className=" mb-10 pt-14">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl font-semibold items-start pb-6  text-text_secondary">
            Shop By Brand
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 ">
            <img
              className="h-32 w-full bg-slate-200 px-10"
              src={brand1}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200 py-10 px-10"
              src={brand2}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-10"
              src={brand3}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-12"
              src={brand4}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-10"
              src={brand5}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-12"
              src={brand6}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-8"
              src={brand7}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200 px-10"
              src={brand1}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200 py-10 px-10"
              src={brand2}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-10"
              src={brand3}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-12"
              src={brand4}
              alt=""
            />
            <img
              className="h-32 w-full bg-slate-200  px-10 py-10"
              src={brand5}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* tranding section */}
      <section className=" mb-10 pt-10 px-2">
        <div>
          <h1 className="text-3xl font-semibold items-start pb-8 text-text_secondary">
            Tranding Shop
          </h1>

          <>
            <Swiper
              slidesPerView={5}
              spaceBetween={150}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner1}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner2}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner3}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={banner4}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile1}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile2}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile3}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[250px] h-[380px] bg-green-200 items-center p-16 text-center">
                  <img
                    className="w-[100px] h-[120px] mb-4"
                    src={mobile4}
                    alt=""
                  />
                  <p className="text-sm font-light  items-start pb-2">
                    Xoggle aute et pariatur adipisicing nostrud et...
                  </p>
                  <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                    $ 20.08
                  </p>
                  <button className="btn w-[100px] h-10 bg-text_secondary text-white ">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>

      {/* Advertisment section */}
      <section className=" mb-10 pt-10 pb">
        <div className=" flex flex-col lg:flex-row gap-x-4">
          {/* 1st adv */}
          <div
            data-aos="fade-right"
            className="lg:w-[50%] bg-green-100 px-10 py-20 "
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
            <div className="flex flex-wrap ml-16 gap-x-32 pt-6 ">
              <div className="flex gap-3">
                <Link>
                  <p className="text-lg font-medium ml-18 text-text_secondary">
                    Shop Now{" "}
                  </p>
                </Link>
                <Link>
                  <FaChevronRight className="text-text_secondary mt-2" />
                </Link>
              </div>

              <img className="w-52 pt-8" src={banner4} alt="" />
            </div>
          </div>
          {/* 1st adv */}
          <div
            data-aos="fade-left"
            className="lg:w-[50%] bg-green-100 px-10 py-20"
          >
            <h1 className="text-3xl font-semibold items-start pb-8 text-text_secondary">
              Get Our <span className="text-red-600">Mobile App</span>
              <br />
              It’s Make easy for you life !
            </h1>
            <img className="w-32" src={pay} alt="" />

            <img className="w-68 pt-8" src={banner5} alt="" />
          </div>
        </div>
      </section>

      {/* best seller section */}
      <section className=" mb-10 pt-10 pb px-2">
        <div>
          <h1 className="text-3xl font-semibold items-start pb-8 text-text_secondary">
            Best Seller
          </h1>
          <div
            data-aos="fade-left"
            className="pt-4 grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-gap_primary"
          >
            <div className="">
              <div className="">
                <img
                className=" p-2 w-full h-full object-contain rounded-xl bg-slate-200"
                src={mobile3}
                alt=""
              />
              </div>
              <h1 className="text-xl font-semibold items-center text-center pt-4 text-text_secondary ">
                Quick Shop
              </h1>
            </div>
            <div className="">
              <div className="">
                <img
                className=" p-2 w-full h-full object-contain  rounded-xl  bg-slate-200"
                src={banner2}
                alt=""
              />
              </div>
              <h2 className="text-xl font-semibold items-center text-center pt-4 text-text_secondary ">
                Mobile Shop
              </h2>
            </div>
            <div className="">
              <div className="">
                <img
                className=" p-2 w-full h-full object-contain  rounded-xl  bg-slate-200"
                src={mobile1}
                alt=""
              />
              </div>
              <h2 className="text-xl font-semibold items-center text-center pt-4 text-text_secondary ">
                Smart Watch
              </h2>
            </div>
            <div className="">
              <div className="">
                <img
                className=" p-2 w-full h-full object-contain  rounded-xl  bg-slate-200"
                src={banner3}
                alt=""
              />
              </div>
              <h2 className="text-xl font-semibold items-center text-center pt-4 text-text_secondary ">
                Computer shop
              </h2>
            </div>
            <div className="">
              <div className="">
                <img
                className=" p-2 w-full h-full object-contain  rounded-xl  bg-slate-200"
                src={mobile2}
                alt=""
              />
              </div>
              <h2 className="text-xl font-semibold items-center text-center pt-4 text-text_secondary ">
                Quick Shop
              </h2>
            </div>
            <div className="">
              <div className="">
                <img
                className=" p-2 w-full h-full object-contain rounded-xl bg-slate-200"
                src={banner4}
                alt=""
              />
              </div>
              <h2 className="text-xl font-semibold items-center text-center pt-4 text-text_secondary ">
                Gadget Shop
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ad section */}
      <section className="mb-10 pt-10 pb">
        <div
          data-aos="fade-right"
          className="bg-text_secondary h-24 w-[800px] "
        >
          <p className="text-xl font-semibold items-start pb-2 text-white pt-6 px-20">
            Get The Best Deal For Headphones{" "}
          </p>
          <div className="flex gap-3 text-white px-20">
            <Link>
              <p className="text-sm font-medium ml-18 text-white ">Shop Now</p>
            </Link>
            <Link>
              <FaChevronRight className="text-white mt-1" />
            </Link>
          </div>
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
    </div>
  );
};

export default Home;
