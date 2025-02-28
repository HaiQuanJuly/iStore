// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import iphone3 from "../../assets/product/iphone3.webp";
import image5 from "../../assets/product/iphonebanner1.png";
import watch_1 from "../../assets/product/watch_1.png";
import watch_2 from "../../assets/product/watch_2.png";
import watch_3 from "../../assets/product/watch_3.png";
import watch_4 from "../../assets/product/watch_4.png";

export default function Section_three() {
  return (
    <div>
      <main className="bg-[#F4F5F8] px-4 sm:px-8 md:px-12 lg:px-[100px] flex flex-col lg:flex-row gap-5 py-6">
        {/* Sản phẩm chính */}
        <div className="bg-white rounded-xl w-full lg:w-[50%] px-8 py-6 flex flex-col lg:flex-row">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[334px] bg-[#F6F6F6] p-5">
              <img src={iphone3} className="p-5"></img>
            </div>
            <div className="text-sm pt-3">
              <li>6.1 inch, Dynamic AMOLED 2X, FHD+</li>
              <li>50.0 MP + 12.0 MP + 10.0 MP</li>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-[24px] lg:text-[30px] font-bold">
              iPhone 15 Pro Max
            </p>
            <div className="flex items-center gap-3">
              <p className="text-[24px] lg:text-[30px] text-[#E11447] font-bold">
                31.000.000đ
              </p>
              <p className="text-[#7F7F7F] line-through">35.000.000đ</p>
            </div>
            <p className="font-bold">Color - Pink</p>
            <div className="flex gap-3 py-5">
              <div className="bg-[#D5DDE0] w-8 h-8 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              <div className="bg-[#EDD4D7] w-8 h-8 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              <div className="bg-[#EEE9CC] w-8 h-8 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              <div className="bg-[#D2DDCD] w-8 h-8 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              <div className="bg-[#515558] w-8 h-8 rounded-full hover:border-2 hover:border-[#00B685]"></div>
            </div>
            <button className="bg-[#00B685] text-white rounded-full w-full max-w-[393px] h-[42px] mt-3">
              Mua ngay
            </button>
          </div>
        </div>

        {/* Hai phần phụ */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 relative">
          {/* Smartwatch */}
          <div className="bg-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between relative">
            <div>
              <p className="text-[20px] font-bold pb-3">
                Thương hiệu Smartwatch nổi tiếng
              </p>
              <button className="w-full sm:w-[227px] text-white bg-gradient-to-t from-[#FF190A] to-[#FFF500] rounded-full px-4 py-1">
                Apple Watch giảm giá 5%
              </button>
            </div>
            <div className="flex relative">
              <img src={watch_1} className="z-0 absolute right-[250px]"></img>
              <img src={watch_2} className="z-50"></img>
              <img src={watch_3} className="z-20 absolute right-[170px]"></img>
              <img src={watch_4} className="z-40 absolute right-[80px]"></img>
            </div>
          </div>

          {/* Mua kèm phụ kiện */}
          <div className="bg-white rounded-xl p-5">
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-bold">
                Mua kèm phụ kiện - Giảm thêm 5%
              </p>
              <div className="flex items-center gap-2">
                <a href="#" className="text-[#00B685]">
                  Xem toàn bộ phụ kiện
                </a>
                <MdKeyboardDoubleArrowRight className="text-[#00B685]" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <div className="text-center sm:text-left">
                <p className="font-bold text-[16px] py-2">
                  Ốp lưng Vải Tinh dệt Magsafe
                </p>
                <p className="text-[#E11447] font-bold">1.590.000đ</p>
                <p className="text-sm text-[#7F7F7F] line-through py-2">
                  1.590.000đ
                </p>
                <button className="bg-[#00B685] rounded-full text-white px-4 py-1">
                  Thêm vào giỏ
                </button>
              </div>
              <div className="relative mt-4 sm:mt-0">
                <img src={image5} className="w-[150px] sm:w-auto"></img>
                <div className="flex justify-between absolute bottom-2 left-2 sm:left-10 w-[120px] sm:w-[192px]">
                  <div className="w-6 h-6 rounded-full bg-[#8B5E6C] hover:border-[#00B685] border-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#8E616F] hover:border-[#00B685] border-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#C4A791] hover:border-[#00B685] border-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#6A808F] hover:border-[#00B685] border-2"></div>
                  <div className="w-6 h-6 rounded-full bg-[#656469] hover:border-[#00B685] border-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
