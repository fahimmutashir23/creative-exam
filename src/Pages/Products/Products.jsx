import add1 from "../../assets/asset/mobile and gaget/pngwing.com (10).png";
import add2 from "../../assets/asset/mobile and gaget/pngwing.com (8).png";
import add3 from "../../assets/asset/offers/pngwing.com (29).png";
import ProductsCard from "./ProductsCard";
import mobile3 from "../../assets/asset/mobile and gaget/pngwing.com (9).png";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader";

const Products = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ["product-display"],
    queryFn: async () => {
      const res = await axiosPublic("/api/get-product-list");
      return res.data.result;
    },
  });

if(isLoading) return <Loader />

  return (
    <div>
      {/* products ad section */}
      <section className="mb-10 pt-10">
        <div className=" flex flex-col lg:flex-row gap-4">
          <div className="lg:w-[50%] p-6">
            <h1 className="text-5xl font-semibold items-start pb-8 text-text_secondary pt-20 text-center ">
              Exciting Offers,Deals and Many More......
            </h1>
            <div className="h-[40%] overflow-hidden">
              <img
                className="h-full min-w-52 object-content p-10"
                src={add3}
                alt=""
              />
            </div>
          </div>
          {/* 1st adv */}
          <div data-aos="fade-right" className="lg:w-[50%] bg-green-100 p-6">
            <div className="h-[60%] w-full overflow-hidden ">
              <img
                className="h-full w-full object-content p-10"
                src={add1}
                alt=""
              />
            </div>
            <p className="pt-6">
              E-commerce, short for electronic commerce, refers to the buying
              and selling of goods or services using the internet.
            </p>
          </div>

          {/* 1st adv */}
          <div data-aos="fade-left" className="lg:w-[50%] bg-green-100 p-6">
            <div className="h-[60%] w-full overflow-hidden">
              <img
                className="h-full w-full object-content p-10"
                src={add2}
                alt=""
              />
            </div>
            <p className="pt-6">
              E-commerce, short for electronic commerce, refers to the buying
              and selling of goods or services using the internet.
            </p>
          </div>
        </div>
      </section>

      {/* products section api */}
      <section className="mb-10">
        <div className="bg-green-200 text-center py-8">
          <h1 className="text-3xl font-semibold items-start text-text_secondary">
            Products List
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-y-4 text-justify overflow-hidden ">
          {products.map((product, idx) => (
            <ProductsCard key={idx} product={product}></ProductsCard>
          ))}
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

export default Products;
