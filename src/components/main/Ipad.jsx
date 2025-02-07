import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import productsIpad from "../../data/productIpad.js";
import { useNavigate } from "react-router-dom";

export default function Section_six() {
  const navigate = useNavigate();

  const ipadProducts = productsIpad.filter(
    (product) => product.category === "ipad"
  );

  return (
    <div className="bg-[#F4F5F8] px-[100px] py-12">
      <main className="bg-white rounded-xl p-8">
        <div className="flex items-center p-[40px] gap-2">
          <p className="font-bold text-[30px]">iPad.</p>
          <p className="font-bold text-[#3C3C4399] text-[30px]">
            Nhỏ gọn, tiện lợi - Dễ thao tác, dễ vận chuyển
          </p>
        </div>

        <div className="flex justify-between pr-[40px]">
          <div className="flex gap-[10px] px-[40px]">
            {["iPad Pro", "iPad Air", "iPad Gen"].map((series, index) => (
              <div
                key={index}
                className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold"
              >
                {series}
              </div>
            ))}
          </div>
          <div className="w-[156px] h-[36px] border-[1px] rounded-[100px] flex items-center px-2 gap-5">
            <div>Bán chạy nhất</div>
            <TiArrowUnsorted />
          </div>
        </div>

        <div className="flex justify-between items-center py-8">
          <div className="w-[40px] h-[40px] rounded-[100px] bg-[#3C3C432E] flex justify-center items-center">
            <IoIosArrowBack className="h-5 w-4" />
          </div>

          <div className="flex gap-3">
            {ipadProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-[20px] p-2 w-[304px] h-[432px] cursor-pointer"
                onClick={() => navigate(`/product/ipad/${product.id}`)} // Điều hướng đúng DetailIpad.jsx
              >
                {product.isNew && (
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500]">
                    New
                  </p>
                )}
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

        <div className="flex items-center gap-2 justify-center">
          <a href="#" className="text-[#00B685]">
            Xem toàn bộ
          </a>
          <MdKeyboardDoubleArrowRight className="text-[#00B685]" />
        </div>
      </main>
    </div>
  );
}
