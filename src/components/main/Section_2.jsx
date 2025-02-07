import { FaFire } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import products from "../../data/product.js"; // Import chung với danh sách iPhone

export default function Section_two() {
  const navigate = useNavigate();

  // Lọc sản phẩm có `isHotDeal: true`
  const hotDeals = products.filter((product) => product.isHotDeal);

  return (
    <div>
      <main className="bg-[#F4F5F8] px-[100px] py-12">
        <div className="bg-white rounded-xl p-8">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="font-bold">Deal sốc mua ngay</div>
              <FaFire className="h-5 w-5" />
            </div>
            <div className="flex gap-10 items-center">
              <div>Chương trình kết thúc trong</div>
              <div className="flex gap-5 items-center">
                {["Ngày", "Giờ", "Phút", "Giây"].map((unit, index) => (
                  <div
                    key={index}
                    className="bg-[#E11447] rounded-xl h-[72px] w-[72px] text-white flex flex-col justify-center items-center"
                  >
                    <p>15</p>
                    <p>{unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-8">
            <div className="w-[40px] h-[40px] rounded-[100px] bg-[#3C3C432E] flex justify-center items-center">
              <IoIosArrowBack className="h-5 w-4" />
            </div>

            <div className="flex gap-3">
              {hotDeals.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-[20px] p-2 w-[304px] h-[432px] cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)} // Điều hướng đến trang chi tiết
                >
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500]">
                    Bán chạy
                  </p>
                  <img
                    src={product.image}
                    className="mx-auto"
                    alt={product.name}
                  />
                  <div className="flex justify-around w-[152px] mx-auto py-5">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center py-5">
                    <p className="font-bold">{product.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="line-through">
                      {product.originalPrice.toLocaleString()}đ
                    </p>
                    <p className="text-[#0A84FF] font-bold">
                      {product.price.toLocaleString()}đ
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[40px] h-[40px] rounded-[100px] bg-[#3C3C432E] flex justify-center items-center">
              <IoIosArrowForward className="h-5 w-4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
