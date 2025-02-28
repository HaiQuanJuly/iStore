// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import news1 from "../../assets/intro/news_1.png";
import news2 from "../../assets/intro/news_2.png";
import news3 from "../../assets/intro/news_3.png";

export default function News() {
  return (
    <div className="bg-[#F4F5F8] px-4 sm:px-8 md:px-12 lg:px-[100px] py-12 relative">
      <main className="bg-white rounded-xl p-6 sm:p-8">
        <div className="pb-[40px]">
          <p className="text-[24px] sm:text-[30px] font-bold">
            Tin tức công nghệ
          </p>
        </div>
        {/* Responsive: Mobile 1 cột, Desktop giữ nguyên */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[news1, news2, news3].map((news, index) => (
            <div key={index} className="p-5 border rounded-lg">
              <img
                src={news}
                className="w-full rounded-md"
                alt={`News ${index + 1}`}
              />
              <div>
                <p className="font-bold text-[20px] sm:text-[24px] pt-5 uppercase">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex flex-wrap items-center py-[20px] sm:py-[34px] gap-2 text-[#7F7F7F]">
                  <SlCalender />
                  <p>Thứ Tư, 06/12/2023</p>
                  <LuAlarmClock />
                  <p>16:36 (GMT+7)</p>
                </div>
                <p className="text-[#4D4D4D]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-5">
                <a href="#" className="text-[#00B685]">
                  Chi tiết
                </a>
                <MdKeyboardDoubleArrowRight className="text-[#00B685]" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 py-10 justify-center">
          <a href="#" className="text-[#00B685]">
            Xem toàn bộ
          </a>
          <MdKeyboardDoubleArrowRight className="text-[#00B685]" />
        </div>
      </main>
    </div>
  );
}
