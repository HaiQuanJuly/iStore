import product_4 from "../../assets/product/product_4.png";
import product_3 from "../../assets/product/product_3.png";
import watch_1 from "../../assets/product/watch_1.png";
import watch_2 from "../../assets/product/watch_2.png";
import watch_3 from "../../assets/product/watch_3.png";
import watch_4 from "../../assets/product/watch_4.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Section_three() {
  return (
    <div>
      <main className="bg-[#F4F5F8] px-[100px] flex gap-5 h-[516px]">
        <div className="bg-white rounded-xl w-[50%] px-8 py-6 flex">
          <div className="">
            <div className="w-[334px] h-[399px] bg-[#F6F6F6] p-5">
              <img src={product_3} className="p-5"></img>
            </div>
            <div className="text-sm pt-3">
              <li>6.1 inch, Dynamic AMOLED 2X, FHD+</li>
              <li>50.0 MP + 12.0 MP + 10.0 MP</li>
            </div>
          </div>
          <div className="px-10 py-12">
            <div className="">
              <p className="text-[30px] font-bold">iPhone 15 Pro Max</p>
              <div className="flex items-center gap-5">
                <p className="text-[30px] text-[#E11447] font-bold">
                  31.000.000đ
                </p>
                <p className="text-[#7F7F7F] line-through">35.000.000đ</p>
              </div>
              <p className="font-bold">Color - Pink</p>
              <div className="flex justify-start py-5 gap-5">
                <div className="bg-[#D5DDE0] w-9 h-9 rounded-[100%] hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-9 h-9 rounded-[100%] hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-9 h-9 rounded-[100%] hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-9 h-9 rounded-[100%] hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-9 h-9 rounded-[100%] hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div>
                <p className="font-bold pb-3">Storage</p>
                <div className="flex gap-3 py-5">
                  <div className="border-solid border-[1px] border-[#B3B3B3] w-[120px] h-[80px] rounded-md flex flex-col justify-center pl-3 hover:border-[#00B685]">
                    <p className="font-bold">128GB</p>
                    <p>24,000,000</p>
                  </div>
                  <div className="border-solid border-[1px] border-[#B3B3B3] w-[120px] h-[80px] rounded-md flex flex-col justify-center pl-3 xem">
                    <p className="font-bold">128GB</p>
                    <p>24,000,000</p>
                  </div>
                  <div className="border-solid border-[1px] border-[#B3B3B3] w-[120px] h-[80px] rounded-md flex flex-col justify-center pl-3 hover:border-[#00B685]">
                    <p className="font-bold">128GB</p>
                    <p>24,000,000</p>
                  </div>
                </div>
              </div>
              <button className=" bg-[#00B685] text-white rounded-[100px] w-[393px] h-[42px]">
                <p className="m-auto">Mua ngay</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-[#F4F5F8] w-[50%] flex flex-col justify-between">
          <div className="bg-white rounded-xl h-[246px] py-[20px] px-[40px] flex items-center relative gap-8">
            <div>
              <p className="text-[20px] font-bold pb-5">
                Thương hiệu <br></br>Smartwatch nổi tiếng
              </p>
              <button className="w-[227px] h-[28px] text-white bg-gradient-to-t from-[#FF190A] to-[#FFF500] rounded-[100px] ">
                <p>Apple Watch giảm giá 5%</p>
              </button>
            </div>
            <div className="flex relative">
              <img src={watch_1} className="z-0"></img>
              <img src={watch_2} className="z-10 absolute left-[90px]"></img>
              <img src={watch_3} className="z-20 absolute left-[200px]"></img>
              <img src={watch_4} className="z-30 absolute left-[300px]"></img>
            </div>
          </div>
          <div className="bg-white rounded-xl h-[246px]">
            <div className="flex justify-between px-[40px] py-[20px]">
              <div className="text-[20px] font-bold">
                Mua kèm phụ kiện - Giảm thêm 5%
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="text-[#00B685]">
                  Xem toàn bộ phụ kiện
                </a>
                <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
              </div>
            </div>
            <div className="flex justify-between pr-[40px]">
              <div className="px-[40px]">
                <p className="font-bold text-[16px] py-2">
                  Ốp lưng Vải Tinh dệt Magsafe
                </p>
                <p className="text-[#E11447] font-bold">1.590.000đ</p>
                <p className=" text-sm text-[#7F7F7F] line-through py-2">
                  1.590.000đ
                </p>
                <button className="bg-[#00B685] rounded-[100px] w-[211px] h-[28px]">
                  <p className="text-white">Thêm vào giỏ</p>
                </button>
              </div>
              <div className="relative">
                <img src={product_4}></img>
                <div className="flex justify-between w-[192px] absolute bottom-5 left-10">
                  <div className="w-6 h-6 rounded-[100px] bg-[#8B5E6C] hover:border-[#00B685] border-solid border-[2px]"></div>
                  <div className="w-6 h-6 rounded-[100px] bg-[#8E616F] hover:border-[#00B685] border-solid border-[2px]"></div>
                  <div className="w-6 h-6 rounded-[100px] bg-[#C4A791] hover:border-[#00B685] border-solid border-[2px]"></div>
                  <div className="w-6 h-6 rounded-[100px] bg-[#6A808F] hover:border-[#00B685] border-solid border-[2px]"></div>
                  <div className="w-6 h-6 rounded-[100px] bg-[#656469] hover:border-[#00B685] border-solid border-[2px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
