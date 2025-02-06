import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import phukien1 from "../../assets/product/phukien_1.png";
import phukien2 from "../../assets/product/phukien_2.png";
import phukien3 from "../../assets/product/phukien_3.png";
import phukien4 from "../../assets/product/phukien_4.png";
import phukien5 from "../../assets/product/phukien_5.png";

export default function Section_nine() {
  return (
    <div className="bg-[#F4F5F8] px-[100px] py-12">
      <main className="bg-white rounded-xl p-8">
        <div className="flex items-center p-[40px] gap-2">
          <p className="font-bold text-[30px]">Phụ kiện.</p>
          <p className="font-bold text-[#3C3C4399] text-[30px]">
            Lựa chọn theo ý thích
          </p>
        </div>
        <div className="flex justify-between pr-[40px]">
          <div className="flex gap-[10px] px-[40px]">
            <div className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold">
              Ốp lưng
            </div>
            <div className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold">
              Tai nghe
            </div>
            <div className="w-[133px] h-[36px] rounded-lg border-[1px] flex items-center justify-center hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] hover:font-bold">
              Bàn phím
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
              <img src={phukien1} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Bao da cho iPhone 11</p>
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
              <img src={phukien2} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5 ">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Air Pod 2 Pro</p>
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
              <img src={phukien3} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Air Pod 2 Pro</p>
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
              <img src={phukien4} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Air Pod 2 Pro</p>
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
              <img src={phukien5} className="mx-auto"></img>
              <div className="flex justify-around w-[152px] mx-auto py-5">
                <div className="bg-[#D5DDE0] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EDD4D7] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#EEE9CC] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#D2DDCD] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
                <div className="bg-[#515558] w-4 h-4 rounded-full hover:border-2 hover:border-[#00B685]"></div>
              </div>
              <div className="flex items-center justify-center py-5">
                <p className="font-bold">Air Pod 2 Pro</p>
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
