/* eslint-disable react/no-unescaped-entities */

import ab1 from "../../assets/asset/about/ab1.png";
import ab2 from "../../assets/asset/about/ab2.png";
import ab3 from "../../assets/asset/about/ab3.png";
import customer1 from "../../assets/asset/about/customer1.jpg";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper/modules";
import { FaLuggageCart, FaStar } from "react-icons/fa";
import { GiReturnArrow, GiTrophyCup } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <section className="mb-10 pt-14">
        <div className="bg-green-200 text-center py-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
            About Us
          </h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row bg-slate-100 gap-gap_primary">
          <div className="lg:flex-1 h-full w-full overflow-hidden">
            <img className="w-full h-full object-cover bg-green-100 lg:p-24 p-4" src={ab1} alt="" />
          </div>
          <div className="lg:flex-1 px-3">
            <p className="text-justify">
              E-commerce, short for electronic commerce, refers to the buying
              and selling of goods or services using the internet. It involves
              transactions conducted online through websites or mobile apps, and
              encompasses a wide range of business types, from retail and
              wholesale to services and digital products. Key components of
              e-commerce include online shopping platforms, electronic payment
              systems, digital marketing, and logistics for delivery. E-commerce
              has transformed traditional business models by providing a global
              marketplace, enabling businesses to reach a larger audience, and
              offering consumers the convenience of shopping from anywhere at
              any time.
            </p>
            <ul className="font-medium  pt-4">
              <li>1. Payment Gateways and Security</li>
              <li>2. Digital Marketing Strategies</li>
              <li>3. Global Reach and Scalability</li>
            </ul>
            <Link to='/contact' className="btn btn-ghost font-medium bg-text_secondary text-white px-6 py-2 mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

  {/* review section */}
      <section className=" pt-2">
        <div className=" h-[150px] text-center">
          <h1 className="text-4xl font-semibold items-start pb-2 text-text_secondary pt-6">
            Customers Feedback
          </h1>
        </div>
        <div>
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1044: {
                  slidesPerView: 3.5,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-green-200 items-start p-6 text-center">
                  <div className="flex gap-x-1">
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                  </div>

                  <p className="text-sm font-light  text-start">
                    "I've been using Tech-Hub for over a year now, and my
                    experience has been fantastic. The website is incredibly
                    user-friendly, making it easy to navigate through various
                    categories and find exactly what I need. The checkout
                    process is seamless, with multiple payment options
                    available, and I've always felt secure when making
                    transactions."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <img
                      className="w-[80px] h-[80px] mb-4"
                      src={customer1}
                      alt=""
                    />
                    <div className="pt-2">
                      <h3 className="text-xl font-mrdium text-slate-500">
                        Fahim Muntasir
                      </h3>
                      <p className="text-sm font-light text-slate-500 text-start">
                        Jhinaidah,Jossor
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-200 items-start p-6 text-center">
                  <div className="flex gap-x-1">
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                  </div>

                  <p className="text-sm font-light  text-start">
                    "I've been using Tech-Hub for over a year now, and my
                    experience has been fantastic. The website is incredibly
                    user-friendly, making it easy to navigate through various
                    categories and find exactly what I need. The checkout
                    process is seamless, with multiple payment options
                    available, and I've always felt secure when making
                    transactions."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <img
                      className="w-[80px] h-[80px] mb-4"
                      src={customer1}
                      alt=""
                    />
                    <div className="pt-2">
                      <h3 className="text-xl font-mrdium text-slate-500">
                        Farhana Shinmi
                      </h3>
                      <p className="text-sm font-light text-slate-500 text-start">
                        Dhaka
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-200 items-start p-6 text-center">
                  <div className="flex gap-x-1">
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                  </div>

                  <p className="text-sm font-light  text-start">
                    "I've been using Tech-Hub for over a year now, and my
                    experience has been fantastic. The website is incredibly
                    user-friendly, making it easy to navigate through various
                    categories and find exactly what I need. The checkout
                    process is seamless, with multiple payment options
                    available, and I've always felt secure when making
                    transactions."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <img
                      className="w-[80px] h-[80px] mb-4"
                      src={customer1}
                      alt=""
                    />
                    <div className="pt-2">
                      <h3 className="text-xl font-mrdium text-slate-500">
                        Fahim Muntasir
                      </h3>
                      <p className="text-sm font-light text-slate-500 text-start">
                        Jhinaidah,Jossor
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-200 items-start p-6 text-center">
                  <div className="flex gap-x-1">
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                  </div>

                  <p className="text-sm font-light  text-start">
                    "I've been using Tech-Hub for over a year now, and my
                    experience has been fantastic. The website is incredibly
                    user-friendly, making it easy to navigate through various
                    categories and find exactly what I need. The checkout
                    process is seamless, with multiple payment options
                    available, and I've always felt secure when making
                    transactions."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <img
                      className="w-[80px] h-[80px] mb-4"
                      src={customer1}
                      alt=""
                    />
                    <div className="pt-2">
                      <h3 className="text-xl font-mrdium text-slate-500">
                        Fahim Muntasir
                      </h3>
                      <p className="text-sm font-light text-slate-500 text-start">
                        Jhinaidah,Jossor
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-200 items-start p-6 text-center">
                  <div className="flex gap-x-1">
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                  </div>

                  <p className="text-sm font-light  text-start">
                    "I've been using Tech-Hub for over a year now, and my
                    experience has been fantastic. The website is incredibly
                    user-friendly, making it easy to navigate through various
                    categories and find exactly what I need. The checkout
                    process is seamless, with multiple payment options
                    available, and I've always felt secure when making
                    transactions."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <img
                      className="w-[80px] h-[80px] mb-4"
                      src={customer1}
                      alt=""
                    />
                    <div className="pt-2">
                      <h3 className="text-xl font-mrdium text-slate-500">
                        Fahim Muntasir
                      </h3>
                      <p className="text-sm font-light text-slate-500 text-start">
                        Jhinaidah,Jossor
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-green-200 items-start p-6 text-center">
                  <div className="flex gap-x-1">
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                    <FaStar className="text-text_secondary mb-2" />
                  </div>

                  <p className="text-sm font-light  text-start">
                    "I've been using Tech-Hub for over a year now, and my
                    experience has been fantastic. The website is incredibly
                    user-friendly, making it easy to navigate through various
                    categories and find exactly what I need. The checkout
                    process is seamless, with multiple payment options
                    available, and I've always felt secure when making
                    transactions."
                  </p>
                  <div className="flex gap-4 pt-4">
                    <img
                      className="w-[80px] h-[80px] mb-4"
                      src={customer1}
                      alt=""
                    />
                    <div className="pt-2">
                      <h3 className="text-xl font-mrdium text-slate-500">
                        Fahim Muntasir
                      </h3>
                      <p className="text-sm font-light text-slate-500 text-start">
                        Jhinaidah,Jossor
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>

  {/* ad section */}
      <section className="mt-10">
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

  {/* payment ad section */}
      <section className="mb-10 pt-10">
        <div className=" flex flex-col lg:flex-row gap-4">
          {/* 1st adv */}
          <div data-aos="fade-right" className="lg:w-[50%] bg-green-100 p-6">
            <div className="h-[70%] w-full overflow-hidden">
              <img className="h-full w-full object-cover" src={ab2} alt="" />
            </div>
            <p className="pt-6">
              E-commerce, short for electronic commerce, refers to the buying
              and selling of goods or services using the internet.
            </p>
          </div>

          {/* 1st adv */}
          <div data-aos="fade-left" className="lg:w-[50%] bg-green-100 p-6">
            <div className="h-[70%] w-full overflow-hidden">
              <img className="h-full w-full object-cover" src={ab3} alt="" />
            </div>
            <p className="pt-6">
              E-commerce, short for electronic commerce, refers to the buying
              and selling of goods or services using the internet.
            </p>
          </div>
        </div>
      </section>

  {/* mail section */}
      <section className="">
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

export default Gallery;
