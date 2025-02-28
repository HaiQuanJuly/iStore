import { FaFire } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import products from "../../data/product.js"; // Import chung với danh sách iPhone
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Section_two() {
  const navigate = useNavigate();
  const hotDeals = products.filter((product) => product.isHotDeal);

  return (
    <div>
      <main className="bg-[#F4F5F8] px-4 sm:px-8 md:px-16 lg:px-[100px] py-12">
        <div className="bg-white rounded-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
            <div className="flex gap-3 items-center">
              <div className="font-bold text-lg">Deal sốc mua ngay</div>
              <FaFire className="h-5 w-5 text-red-500" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
              <div className="text-sm md:text-base">
                Chương trình kết thúc trong
              </div>
              <div className="flex gap-2 md:gap-5 items-center">
                {["Ngày", "Giờ", "Phút", "Giây"].map((unit, index) => (
                  <div
                    key={index}
                    className="bg-[#E11447] rounded-xl h-[45px] w-[45px] md:h-[60px] md:w-[60px] text-white flex flex-col justify-center items-center text-xs md:text-base"
                  >
                    <p>15</p>
                    <p>{unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Carousel
            responsive={responsive}
            className="flex items-center w-full max-w-[1400px] mx-auto py-12"
          >
            {hotDeals.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl p-4 cursor-pointer bg-white shadow-md hover:shadow-lg min-w-[200px]"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] font-semibold">
                  Bán chạy
                </p>
                <img
                  src={product.image}
                  className="mx-auto w-full h-[300px] object-cover"
                  alt={product.name}
                />
                <div className="flex justify-center py-3 gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300 hover:border-[#00B685]"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                <div className="text-center font-semibold text-sm md:text-base">
                  {product.name}
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 pt-3">
                  <p className="line-through text-gray-500 text-xs md:text-sm">
                    {product.originalPrice.toLocaleString()}đ
                  </p>
                  <p className="text-[#0A84FF] font-bold text-sm md:text-base">
                    {product.price.toLocaleString()}đ
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </main>
    </div>
  );
}
