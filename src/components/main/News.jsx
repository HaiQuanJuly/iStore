import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import news1 from "../../assets/intro/news_1.png";
import news2 from "../../assets/intro/news_2.png";
import news3 from "../../assets/intro/news_3.png";

export default function news() {
  return (
    <div className="bg-[#F4F5F8] px-[100px] py-12 relative">
      <main className="bg-white rounded-xl p-8">
        <div className="pb-[40px]">
          <p className="text-[30px] font-bold">Tin tức công nghệ</p>
        </div>
        <div className="">
          <div className="flex gap-5">
            <div className="p-5 border-[1px] rounded-lg">
              <img src={news1}></img>
              <div>
                <p className="font-bold text-[24px] pt-5 uppercase">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex items-center py-[34px]">
                  <SlCalender className="text-[#7F7F7F]"></SlCalender>
                  <p className="text-[#7F7F7F]">Thứ Tư, 06/12/2023</p>
                  <LuAlarmClock className="text-[#7F7F7F]"></LuAlarmClock>
                  <p className="text-[#7F7F7F]">16:36 (GMT+7)</p>
                </div>
                <p className="leading-2 text-[#4D4D4D]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="flex items-center gap-2 pt-5">
                <a href="#" className="text-[#00B685]">
                  Chi tiết
                </a>
                <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
              </div>
            </div>
            <div className="p-5 border-[1px] rounded-lg">
              <img src={news2}></img>
              <div>
                <p className="font-bold text-[24px] pt-5 uppercase">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex items-center py-[34px]">
                  <SlCalender className="text-[#7F7F7F]"></SlCalender>
                  <p className="text-[#7F7F7F]">Thứ Tư, 06/12/2023</p>
                  <LuAlarmClock className="text-[#7F7F7F]"></LuAlarmClock>
                  <p className="text-[#7F7F7F]">16:36 (GMT+7)</p>
                </div>
                <p className="text-[#4D4D4D]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="flex items-center gap-2 pt-5">
                <a href="#" className="text-[#00B685]">
                  Chi tiết
                </a>
                <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
              </div>
            </div>
            <div className="p-5 border-[1px] rounded-lg">
              <img src={news3}></img>
              <div>
                <p className="font-bold text-[24px] pt-5 uppercase">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex items-center py-[34px]">
                  <SlCalender className="text-[#7F7F7F]"></SlCalender>
                  <p className="text-[#7F7F7F]">Thứ Tư, 06/12/2023</p>
                  <LuAlarmClock className="text-[#7F7F7F]"></LuAlarmClock>
                  <p className="text-[#7F7F7F]">16:36 (GMT+7)</p>
                </div>
                <p className="text-[#4D4D4D]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="flex items-center gap-2 pt-5">
                <a href="#" className="text-[#00B685]">
                  Chi tiết
                </a>
                <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40px] h-[40px] rounded-[100px] bg-[#E6F8F3] flex flex-col justify-center items-center absolute top-[304px] left-[120px]">
          <IoIosArrowBack className="h-5 w-4"></IoIosArrowBack>
        </div>
        <div className="w-[40px] h-[40px] rounded-[100px] bg-[#E6F8F3] flex flex-col justify-center items-center top-[304px] absolute left-[1725px] ">
          <IoIosArrowForward className="h-5 w-4"></IoIosArrowForward>
        </div>
        <div className="flex items-center gap-2 py-10 justify-center">
          <a href="#" className="text-[#00B685] ">
            Xem toàn bộ
          </a>
          <MdKeyboardDoubleArrowRight className="text-[#00B685]"></MdKeyboardDoubleArrowRight>
        </div>
      </main>
    </div>
  );
}
