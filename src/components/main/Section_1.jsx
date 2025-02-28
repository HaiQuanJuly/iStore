import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { AiOutlineFileProtect } from "react-icons/ai";
import intro_1 from "../../assets/intro/intro_1.png";
import intro_2 from "../../assets/intro/intro_2.png";
import intro_3 from "../../assets/intro/intro_3.png";

export default function Section_one() {
  return (
    <div>
      <main className="px-4 md:px-10 lg:px-24 py-12 bg-[#F4F5F8]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center">
            <CiDeliveryTruck className="h-8 w-8 text-black" />
            <div>
              <p className="font-bold">Miễn phí vận chuyển</p>
              <p className="text-sm text-gray-600">
                Cho tất cả đơn trên 15 triệu VNĐ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MdOutlinePayments className="h-8 w-8 text-black" />
            <div>
              <p className="font-bold">Thanh toán linh hoạt</p>
              <p className="text-sm text-gray-600">
                Thanh toán thuận tiện & an toàn 100%
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SlEarphonesAlt className="h-8 w-8 text-black" />
            <div>
              <p className="font-bold">24/7 hỗ trợ ngay</p>
              <p className="text-sm text-gray-600">
                Chuyên viên trực tổng đài 24/7
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AiOutlineFileProtect className="h-8 w-8 text-black" />
            <div>
              <p className="font-bold">Bảo hành & đổi trả dễ dàng</p>
              <p className="text-sm text-gray-600">Bảo hành lên đến 1 năm</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <img
            src={intro_1}
            className="h-[180px] md:h-[240px] w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            alt="Intro 1"
          />
          <img
            src={intro_2}
            className="h-[180px] md:h-[240px] w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            alt="Intro 2"
          />
          <img
            src={intro_3}
            className="h-[180px] md:h-[240px] w-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
            alt="Intro 3"
          />
        </div>
      </main>
    </div>
  );
}
