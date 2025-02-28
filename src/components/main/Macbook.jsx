import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import productsMacbook from "../../data/productMacbook.js";
import { useNavigate } from "react-router-dom";

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
export default function Macbook() {
  const navigate = useNavigate();
  const macbookProducts = productsMacbook.filter(
    (product) => product.category === "macbook"
  );

  return (
    <div className="bg-[#F4F5F8] px-4 sm:px-8 md:px-12 lg:px-[100px] py-12">
      <main className="bg-white rounded-xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 px-4 sm:px-10 py-6">
          <p className="font-bold text-[24px] sm:text-[30px]">MacBook.</p>
          <p className="font-bold text-[#3C3C4399] text-[20px] sm:text-[30px]">
            Hiệu năng tốt, kiểu dáng thời thượng
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center px-4 sm:px-10 py-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {["MacBook Air", "MacBook Pro", "M1"].map((series, index) => (
              <div
                key={index}
                className="w-[120px] sm:w-[133px] h-[36px] rounded-lg border flex items-center justify-center cursor-pointer hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] font-medium"
              >
                {series}
              </div>
            ))}
          </div>
          <div className="hidden md:flex w-[156px] h-[36px] border-[1px] rounded-[100px] flex items-center px-2 gap-5">
            <div>Bán chạy nhất</div>
          </div>
        </div>

        <div className="flex items-center justify-between py-8">
          <Carousel
            responsive={responsive}
            className="flex items-center gap-4 w-full max-w-[1400px] mx-auto"
          >
            {macbookProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-[20px] p-3 sm:p-4 w-full max-w-[260px] cursor-pointer"
                onClick={() => navigate(`/product/macbook/${product.id}`)}
              >
                {product.isNew && (
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] font-bold">
                    New
                  </p>
                )}
                <img
                  src={product.image}
                  className="mx-auto w-full max-h-[200px] object-contain"
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
                <div className="text-center font-bold py-3">{product.name}</div>
                <div className="flex gap-2 justify-center text-sm sm:text-base">
                  <p className="line-through text-gray-500">
                    {product.originalPrice.toLocaleString()}đ
                  </p>
                  <p className="text-[#0A84FF] font-bold">
                    {product.price.toLocaleString()}đ
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex items-center gap-2 justify-center mt-4">
          <a href="#" className="text-[#00B685] font-semibold">
            Xem toàn bộ
          </a>
          <MdKeyboardDoubleArrowRight className="text-[#00B685]" />
        </div>
      </main>
    </div>
  );
}
