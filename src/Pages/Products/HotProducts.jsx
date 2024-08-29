import ProductsCard from "./ProductsCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader";
import { useQuery } from "@tanstack/react-query";

const HotProducts = () => {
    const axiosPublic = useAxiosPublic();

    const {
      data: products = [],
      isLoading,
    } = useQuery({
      queryKey: ["hot-product-display"],
      queryFn: async () => {
        const res = await axiosPublic("/api/get-hot-product-list");
        return res.data.result;
      },
    });
  
  if(isLoading) return <Loader />

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-2 p-6">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default HotProducts;
