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
      <main className="px-[100px] py-12 bg-[#F4F5F8]">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <CiDeliveryTruck className="h-8 w-8"></CiDeliveryTruck>
            <div>
              <div className="font-bold">Miễn phí vẫn chuyển</div>
              <div>Cho tất cả đơn trên 15 triệu VNĐ</div>
            </div>
          </div>
          <div className="h-[60px] border"></div>
          <div className="flex gap-3">
            <MdOutlinePayments className="h-8 w-8"></MdOutlinePayments>
            <div>
              <div className="font-bold">Thanh toán linh hoạt</div>
              <div>Thanh toán thuận tiện & an toàn 100%</div>
            </div>
          </div>
          <div className="h-[60px] border"></div>
          <div className="flex gap-3">
            <SlEarphonesAlt className="h-8 w-8"></SlEarphonesAlt>
            <div>
              <div className="font-bold">24/7 hỗ trợ ngay</div>
              <div>Chuyên viên trực tổng đài 24/7</div>
            </div>
          </div>
          <div className="h-[60px] border"></div>
          <div className="flex gap-3">
            <AiOutlineFileProtect className="h-8 w-8"></AiOutlineFileProtect>
            <div>
              <div className="font-bold">Bảo hành & đổi trả dễ dàng</div>
              <div>Bảo hành lên đến 1 năm</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-12">
          <img src={intro_1} className="h-[240px] w-[533px]"></img>
          <img src={intro_2} className="h-[240px] w-[533px]"></img>
          <img src={intro_3} className="h-[240px] w-[533px]"></img>
        </div>
      </main>
    </div>
  );
}
