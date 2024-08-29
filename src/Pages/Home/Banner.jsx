/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import banner1 from "../../assets/asset/banner/pngwing.com (6).png";
import banner2 from "../../assets/asset/banner/pngwing.com (3).png";
import banner3 from "../../assets/asset/banner/pngwing.com (4).png";
import banner4 from "../../assets/asset/banner/pngwing.com (5).png";

import { FaLuggageCart } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { GiTrophyCup } from "react-icons/gi";

import mobile1 from "../../assets/asset/mobile and gaget/pngwing.com (9).png";
import mobile2 from "../../assets/asset/mobile and gaget/pngwing.com (7).png";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import mobile4 from "../../assets/asset/mobile and gaget/pngwing.com (8).png";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

import "react-awesome-slider/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-scroll";
import { MdImportantDevices } from "react-icons/md";

const Banner = () => {
  return (
    // header section start
    <div>
      <section className=" mb-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-green-200">
            <div className="flex flex-wrap px-10 py-20 lg:h-[400px] md:h-[300px] sm:h-[200px]">
              <div className="w-[70%]">
                <p className="lg:text-4xl md:text-3xl sm:text-lg font-semibold lg:pt-10">
                  Discover the Latest in Tech
                  <br />
                  Innovative Gadgets at Your
                  <br /> Fingertips Shop Smart, Shop with Us
                </p>
              </div>
              <div className="w-[30%] sm:pt-10">
                <img className="w-82 " src={banner1} alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-green-200">
            <div className="flex flex-wrap px-10 py-20 lg:py-10 lg:h-[400px] md:h-[300px] sm:h-[200px]">
              <div className="w-[70%]">
                <p className="lg:text-4xl md:text-3xl sm:text-lg font-semibold lg:pt-20 text-slate-600">
                  Unlock Tomorrow's Technology Today
                  <br />
                  Top Brands, Unbeatable Prices
                  <br />
                  Your Ultimate Tech Destination
                </p>
              </div>
              <div className="w-[30%]">
                <img className="w-82" src={banner2} alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-green-200">
            <div className="flex flex-wrap px-10 py-20 lg:py-10 lg:h-[400px] md:h-[300px] sm:h-[200px]">
              <div className="w-[70%]">
                <p className="lg:text-4xl md:text-3xl sm:text-lg font-semibold lg:pt-20 text-slate-800">
                  Experience Cutting-Edge Innovation
                  <br />
                  Gear Up with the Best
                  <br />
                  Shop Now, Stay Ahead
                </p>
              </div>
              <div className="w-[30%] ">
                <img className="w-80" src={banner3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-green-200">
            <div className="flex flex-wrap px-10 py-20  lg:h-[400px] md:h-[300px] sm:h-[200px]">
              <div className="w-[70%]">
                <p className="lg:text-4xl md:text-3xl sm:text-lg font-semibold lg:pt-10 text-green-800">
                  Leading the Way in Tech
                  <br />
                  Exclusive Deals on Newest Gadgets
                  <br />
                  Upgrade Your Tech Lifestyle
                </p>
              </div>
              <div className="w-[30%] sm:pt-10">
                <img className="w-82" src={banner4} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      

{/* // ecommerce ad section starts */} 

      <section className="my-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid lg:grid-cols-4 md:grid-cols-2 bg-slate-200 shadow-lg p-10 space-y-6 lg:space-y-0"
        >
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
              <FaLuggageCart />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold">Free Shipping</h2>
              <p className="text-slate-400 font-medium">
                When ordering over $100
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
              <GiReturnArrow />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold">Free Return</h2>
              <p className="text-slate-400 font-medium">
                Get Return within 30 days
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
              <GrShieldSecurity />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold">Secure Payment</h2>
              <p className="text-slate-400 font-medium">
                100% Secure Online Payment
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
              <GiTrophyCup />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold">Best Quality</h2>
              <p className="text-slate-400 font-medium">
                Original Product Guarenteed
              </p>
            </div>
          </div>
        </div>
      </section>


{/* gaming world section start */}
      <section className=" mb-10 px-2 ">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-3xl font-semibold items-start pb-6 text-text_secondary">
            Gamer World
          </h1>
          <div className="flex flex-col lg:flex-row gap-gap_primary  ">
            <div className="bg-green-100 p-10 lg:w-[30%]">
              <h2 className="text-xl font-medium items-start pb-4">
                Mobile & Gaget
              </h2>
              <ul className="text-slate-600 font-medium text-sm ">
                <Link>
                  <li className="pb-2">Apple</li>
                </Link>
                <Link>
                  <li className="pb-2">Google</li>
                </Link>
                <Link>
                  <li className="pb-6">Samsung</li>
                </Link>
              </ul>
              <div className="flex gap-6">
                <h3 className="text-lg font-medium  items-start pb-4">
                  Shop Now
                </h3>
                <Link>
                  <p className="pt-2">
                    <IoMdArrowDropright />
                  </p>
                </Link>
              </div>
              <img className="w-72 " src={mobile1} alt="" />
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:w-[70%] gap-6">
              {/* cart1 */}
              <div className="bg-white shadow-xl p-4 ">
                <div className="h-[70%] w-full overflow-hidden">
                <img className="w-full h-full object-contain" src={mobile2} alt="" />
                </div>
                <div className="flex">
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                </div>
                <p className="text-sm font-light  items-start pb-2">
                  Xoggle aute et pariatur adipisicing nostrud et...
                </p>
                <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                  $ 20.08
                </p>
                <div className="flex justify-center">
                <button className="px-6 py-2 rounded-sm flex bg-text_secondary text-white  hover:bg-orange-400 hover:translate-x-4 duration-200">
                  Details
                </button>
                </div>
              </div>
              {/* cart1 */}
              <div className="bg-white shadow-xl p-4 ">
                <div className="h-[70%] w-full overflow-hidden">
                <img className="w-full h-full object-contain" src={mobile3} alt="" />
                </div>
                <div className="flex">
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                </div>
                <p className="text-sm font-light  items-start pb-2">
                  Xoggle aute et pariatur adipisicing nostrud et...
                </p>
                <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                  $ 20.08
                </p>
                <div className="flex justify-center">
                <button className="px-6 py-2 rounded-sm flex bg-text_secondary text-white  hover:bg-orange-400 hover:translate-x-4 duration-200">
                  Details
                </button>
                </div>
              </div>
              {/* cart1 */}
              <div className="bg-white shadow-xl p-4 ">
                <div className="h-[70%] w-full overflow-hidden">
                <img className="w-full h-full object-contain" src={mobile4} alt="" />
                </div>
                <div className="flex">
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                  <p className="text-text_secondary text-2xl">
                    <IoMdStar />
                  </p>
                </div>
                <p className="text-sm font-light  items-start pb-2">
                  Xoggle aute et pariatur adipisicing nostrud et...
                </p>
                <p className="text-sm font-semibold text-text_secondary  items-start pb-4">
                  $ 20.08
                </p>
                <div className="flex justify-center">
                <button className="px-6 py-2 rounded-sm flex bg-text_secondary text-white  hover:bg-orange-400 hover:translate-x-4 duration-200">
                  Details
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
