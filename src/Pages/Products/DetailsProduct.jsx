import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { OrderContext } from "../../ContextAPIs/OrderProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Utils/Loader";
import { url } from "../../../connection";

const DetailsProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const {setCartCall, cartCall} = useContext(OrderContext);
  const axiosPublic = useAxiosPublic();
  const imgUrl = `${url}/upload/product/images/`

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  const {
    data: detailsProduct = [],
    isLoading,
  } = useQuery({
    queryKey: ["product-details-display"],
    queryFn: async () => {
      const res = await axiosPublic(`/api/get-single-product/${id}`);
      return res.data.result;
    },
  });

  const addItemToLocalStorage = (id, price, name, quantity) => {
    const existingItems = JSON.parse(localStorage.getItem('productDraft')) || [];
  
    const newItem = { _id : id, price, name, quantity };
    const updatedItems = [...existingItems, newItem];
  
    localStorage.setItem('productDraft', JSON.stringify(updatedItems));
  };
  
    const handleSetItem = (price, name) => {
      const totalPrice = price * quantity
      addItemToLocalStorage(id, totalPrice, name, quantity)
      toast.success('Product Added Successfully in Cart')
      setCartCall(!cartCall)
    }


  if(isLoading) return <Loader />

  return (
    <div className="p-6 text-justify overflow-hidden ">
      <div className=" w-full  h-full bg-base-200 shadow-xl py-6">
        <div className="flex flex-col lg:flex-row gap-x-32 p-12">
          <div data-aos="fade-right">
            <img className=" w-96 h-[70%]" src={`${imgUrl}${detailsProduct.images[0]}`} />
          </div>
          <div data-aos="fade-left" className="py-10">
            <h2 className="text-2xl font-semibold">
              {detailsProduct?.name}
              <div className="badge bg-text_secondary text-white">
                {detailsProduct?.brand}
              </div>
            </h2>
            <p className="pt-4 mb-4 text-xl">{detailsProduct?.details}</p>
            <p className="text-xl font-bold">{detailsProduct?.price}</p>

            <div className="pt-4">
              <div>
                <h1>Quantity</h1>
                <div className="border-2 border-green-400 rounded-md flex items-stretch gap-2 max-w-fit">
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    className={`text-xl bg-green-300 px-4 py-1 ${
                      quantity >= 1 && "btn-disabled"
                    }`}
                  >
                    -
                  </button>
                  <span className="w-8 flex justify-center items-center text-xl">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`text-xl bg-green-300 px-4 py-1`}
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => handleSetItem(detailsProduct.price, detailsProduct.name)} className="btn btn-ghost bg-orange-300 text-text_secondary mt-2">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
