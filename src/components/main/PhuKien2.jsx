import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import phukien1 from "../../assets/product/phukien_1.png";
import phukien2 from "../../assets/product/phukien_2.png";
import phukien3 from "../../assets/product/phukien_3.png";
import phukien4 from "../../assets/product/phukien_4.png";
import phukien5 from "../../assets/product/phukien_5.png";

export default function Section_nine() {
  return (
    <div className="bg-[#F4F5F8] px-4 sm:px-8 md:px-12 lg:px-[100px] py-12">
      <main className="bg-white rounded-xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 px-4 sm:px-10 py-6">
          <p className="font-bold text-[24px] sm:text-[30px]">Phụ kiện.</p>
          <p className="font-bold text-[#3C3C4399] text-[20px] sm:text-[30px]">
            Lựa chọn theo ý thích
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center px-4 sm:px-10 py-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {["Ốp lưng", "Tai nghe", "Bàn phím"].map((series, index) => (
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
            <TiArrowUnsorted />
          </div>
        </div>

        <div className="flex items-center justify-between py-8">
          <button className="hidden md:flex w-10 h-10 rounded-full bg-[#3C3C432E] justify-center items-center">
            <IoIosArrowBack className="h-5 w-4" />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-[1400px] mx-auto">
            {[phukien1, phukien2, phukien3, phukien4, phukien5].map(
              (phukien, index) => (
                <div
                  key={index}
                  className="border rounded-[20px] p-3 sm:p-4 w-full max-w-[260px]"
                >
                  <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] font-bold">
                    New
                  </p>
                  <img
                    src={phukien}
                    className="mx-auto w-full max-h-[200px] object-contain"
                    alt={`Phụ kiện ${index + 1}`}
                  />
                  <div className="flex justify-center py-3">
                    {[
                      "#D5DDE0",
                      "#EDD4D7",
                      "#EEE9CC",
                      "#D2DDCD",
                      "#515558",
                    ].map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300 hover:border-[#00B685]"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <div className="text-center font-bold py-3">
                    Phụ kiện {index + 1}
                  </div>
                  <div className="flex gap-2 justify-center text-sm sm:text-base">
                    <p className="line-through text-gray-500">19.429.000đ</p>
                    <p className="text-[#0A84FF] font-bold">15.429.000đ</p>
                  </div>
                </div>
              )
            )}
          </div>
          <button className="hidden md:flex w-10 h-10 rounded-full bg-[#3C3C432E] justify-center items-center">
            <IoIosArrowForward className="h-5 w-4" />
          </button>
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
