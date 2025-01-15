import { FaFire } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import product_1 from "../../assets/product/product_1.png";
import product_2 from "../../assets/product/product_2.png";

export default function Section_two() {
  return (
    <div>
      <main className="bg-[#F4F5F8] px-[100px] py-12">
        <div className="bg-white rounded-xl p-8">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <div className="font-bold">Deal sốc mua ngay</div>
              <FaFire className="h-5 w-5"></FaFire>
            </div>
            <div className="flex gap-10 items-center">
              <div>Chương trình kết thúc trong</div>
              <div className="flex gap-5 items-center">
                <div className="bg-[#E11447] rounded-xl h-[72px] w-[72px] text-white flex flex-col justify-center items-center">
                  <p>15</p>
                  <p>Ngày</p>
                </div>
                <div>:</div>
                <div className="bg-[#E11447] rounded-xl h-[72px] w-[72px] text-white flex flex-col justify-center items-center">
                  <p>15</p>
                  <p>Giờ</p>
                </div>
                <div>:</div>
                <div className="bg-[#E11447] rounded-xl h-[72px] w-[72px] text-white flex flex-col justify-center items-center">
                  <p>15</p>
                  <p>Phút</p>
                </div>
                <div>:</div>
                <div className="bg-[#E11447] rounded-xl h-[72px] w-[72px] text-white flex flex-col justify-center items-center">
                  <p>15</p>
                  <p>Giây</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-8">
            <div className="w-[40px] h-[40px] rounded-[100px] bg-[#3C3C432E] flex flex-col justify-center items-center">
              <IoIosArrowBack className="h-5 w-4"></IoIosArrowBack>
            </div>
            <div className="flex gap-3">
              <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                  Bán chạy
                </p>
                <img src={product_1} className="mx-auto"></img>
                <div className="flex justify-around w-[152px] mx-auto py-5">
                  <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                </div>
                <div className="flex gap-2">
                  <p className="line-through">19.429.000đ</p>
                  <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
                </div>
              </div>
              <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                  Bán chạy
                </p>
                <img src={product_2} className="mx-auto"></img>
                <div className="flex justify-around w-[152px] mx-auto py-5 ">
                  <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                </div>
                <div className="flex gap-2">
                  <p className="line-through">19.429.000đ</p>
                  <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
                </div>
              </div>
              <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                  Bán chạy
                </p>
                <img src={product_1} className="mx-auto"></img>
                <div className="flex justify-around w-[152px] mx-auto py-5">
                  <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                </div>
                <div className="flex gap-2">
                  <p className="line-through">19.429.000đ</p>
                  <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
                </div>
              </div>
              <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                  Bán chạy
                </p>
                <img src={product_2} className="mx-auto"></img>
                <div className="flex justify-around w-[152px] mx-auto py-5">
                  <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                </div>
                <div className="flex gap-2">
                  <p className="line-through">19.429.000đ</p>
                  <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
                </div>
              </div>
              <div className="border rounded-[20px] p-2">
                <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                  Bán chạy
                </p>
                <img src={product_1} className="mx-auto"></img>
                <div className="flex justify-around w-[152px] mx-auto py-5">
                  <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                  <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                </div>
                <div className="flex gap-2">
                  <p className="line-through">19.429.000đ</p>
                  <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
                </div>
              </div>
            </div>

            <div className="w-[40px] h-[40px] rounded-[100px] bg-[#3C3C432E] flex flex-col justify-center items-center">
              <IoIosArrowForward className="h-5 w-4"></IoIosArrowForward>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
