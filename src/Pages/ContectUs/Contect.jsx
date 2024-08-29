/* eslint-disable react/no-unescaped-entities */
import { FaInstagramSquare, FaSms, FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import ab1 from "../../assets/asset/about/ab.png";
import Faq from "./Faq";
import ContectForm from "./ContectForm";

const Contect = () => {
    return (
        <div>
{/*social icon section  */}
       <section className="my-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid lg:grid-cols-4 md:grid-cols-2 bg-slate-200 shadow-lg p-10 space-y-6 lg:space-y-0"
        >
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
              <FaFacebook />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold pt-3">Quick Reply</h2>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
            <FaInstagramSquare />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold pt-3">50+ Moderator</h2>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
            <FaWhatsappSquare />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold pt-3">Live Demonestration</h2>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-200">
            <div className="text-text_secondary text-4xl pt-2">
            <FaSms />
            </div>
            <div>
              <h2 className="text-slate-800 font-bold pt-3">Same as Picture</h2>
            </div>
          </div>
        </div>
       </section>
{/*availibility section  */}
      <section className="mb-10 pt-14">
        <div className="bg-green-200 text-center py-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
            Help & Support
          </h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row bg-slate-100 gap-gap_primary">
          <div className="lg:flex-1 h-full w-full overflow-hidden">
            <img className="w-full h-full object-cover bg-green-100 lg:p-24 p-4" src={ab1} alt="" />
          </div>
          <div className="lg:flex-1 px-3">
            <p className="text-justify">
            We're here to help! If you have any questions, concerns, or need assistance with your order, feel free to reach out to us. Our customer service team is dedicated to providing you with the best possible support.
            </p>
            <h2 className="font-medium  pt-4">Customer Service Hours:</h2>
            <ul className="font-medium  pt-4">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <button className="btn btn-ghost font-medium bg-text_secondary text-white px-6 py-2 mt-4">
              Contect Us
            </button>
          </div>
        </div>
      </section>
{/*availibility section  */}
      <section className="mb-10 pt-14">
        <div className="bg-green-200 text-center py-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
          Contact Information:
          </h1>
        </div>
       
        <div className="flex flex-col items-center lg:flex-row bg-slate-100 gap-gap_primary p-10">
         
          <div className="lg:flex-1 h-full w-full overflow-hidden">
          <h1>Phone:</h1>
            <p className="text-justify ">Phone: +880 1581868984</p>
            <p className="text-justify ">Phone: +880 1581868984</p>
          </div>
          <div className="lg:flex-1 px-3">
          <h1>Email</h1>
          <div className="lg:flex-1 h-full w-full overflow-hidden">
            <p className="text-justify ">General Inquiries: support@example.com</p>
            <p className="text-justify ">Order Support: orders@example.com</p>
            <p className="text-justify ">Returns & Exchanges: returns@example.com</p>
          </div>
         
          </div>
          
          <div className="lg:flex-1 h-full w-full overflow-hidden">
          <h1>Live Chat:</h1>
            <p className="text-justify ">Available during customer service hours. Click the chat icon in the bottom right corner of our website to start a live chat with one of our representatives.</p>
          
          </div>
        </div>
      </section>
      <Faq></Faq>
      <ContectForm></ContectForm>
        </div>
    );
};

export default Contect;