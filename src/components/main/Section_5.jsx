import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import mac_1 from "../../assets/product/Mac_1.png";
import mac_2 from "../../assets/product/Mac_2.png";
import mac_3 from "../../assets/product/Mac_3.png";
import mac_4 from "../../assets/product/Mac_4.png";
import mac_5 from "../../assets/product/Mac_5.png";

export default function Section_five() {
  return (
    <div className="bg-[#F4F5F8] px-[100px] py-12">
      <main className="bg-white rounded-xl p-8">
        <div className="flex items-center p-[40px] gap-2">
          <p className="font-bold text-[30px]">Macbook.</p>
          <p className="font-bold text-[#3C3C4399] text-[30px]">
            Hiệu năng tốt, kiểu dáng thời thượng
          </p>
        </div>
        <div className="flex justify-between pr-[40px]">
          <div className="flex gap-[10px] px-[40px]">
            <div className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold">
              Macbook Air
            </div>
            <div className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold">
              Macbook Pro
            </div>
            <div className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold">
              M1
            </div>
          </div>
          <div className="w-[156px] h-[36px] border-[1px] rounded-[100px] flex items-center px-2 gap-5">
            <div className="">Bán chạy nhất</div>
            <TiArrowUnsorted></TiArrowUnsorted>
          </div>
        </div>
        <div className="flex justify-between items-center py-8">
          <div className="w-[40px] h-[40px] rounded-[100px] bg-[#3C3C432E] flex flex-col justify-center items-center">
            <IoIosArrowBack className="h-5 w-4"></IoIosArrowBack>
          </div>
          <div className="flex gap-3">
            <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                New
              </p>
              <img src={mac_1} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Macbook air m2</p>
              </div>
              <div className="flex gap-2">
                <p className="line-through">19.429.000đ</p>
                <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
              </div>
            </div>
            <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                New
              </p>
              <img src={mac_2} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5 ">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Macbook air m2</p>
              </div>
              <div className="flex gap-2">
                <p className="line-through">19.429.000đ</p>
                <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
              </div>
            </div>
            <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                New
              </p>
              <img src={mac_3} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Macbook air m2</p>
              </div>
              <div className="flex gap-2">
                <p className="line-through">19.429.000đ</p>
                <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
              </div>
            </div>
            <div className="border rounded-[20px] p-2 w-[304px] h-[432px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                New
              </p>
              <img src={mac_4} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Macbook air m2</p>
              </div>
              <div className="flex gap-2">
                <p className="line-through">19.429.000đ</p>
                <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
              </div>
            </div>
            <div className="border rounded-[20px] p-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] ">
                New
              </p>
              <img src={mac_5} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Macbook air m2</p>
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
        <div className="flex items-center gap-2 justify-center">
          <a href="#" className="text-[#00B685]">
            Xem toàn bộ
          </a>
          <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
        </div>
      </main>
    </div>
  );
}