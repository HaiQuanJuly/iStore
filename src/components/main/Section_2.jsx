import { FaFire } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import products from "../../data/product.js"; // Import chung với danh sách iPhone

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

          <div className="flex justify-between items-center py-8 overflow-hidden">
            <button className="w-[40px] h-[40px] rounded-full bg-gray-300 flex justify-center items-center">
              <IoIosArrowBack className="h-5 w-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto">
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
                    className="mx-auto w-full h-auto object-cover"
                    alt={product.name}
                  />
                  <div className="flex justify-center py-3">
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
            </div>

            <button className="w-[40px] h-[40px] rounded-full bg-gray-300 flex justify-center items-center">
              <IoIosArrowForward className="h-5 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
