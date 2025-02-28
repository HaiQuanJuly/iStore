import logoiStore from "../../assets/logo/logoiStore2.png";
import logoFacebook from "../../assets/logo/logoFacebook.png";
import logoTiktok from "../../assets/logo/logoTiktok.png";
import logoYoutube from "../../assets/logo/logoYoutube.png";

export default function Footer() {
  return (
    <div className="bg-[#000000] px-4 sm:px-8 md:px-12 lg:px-[120px] py-12 text-white">
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <img
            src={logoiStore}
            className="mx-auto pb-5 w-[150px]"
            alt="Logo iStore"
          />
          <p className="text-sm">
            CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ ISTONE
          </p>
          <p className="text-sm pt-2">
            Qua một thập kỷ tạo dựng uy tín, Istone được 30 công ty công nghệ
            nổi tiếng thế giới lựa chọn làm đối tác, cung cấp các dịch vụ phát
            triển thị trường (MES) tại Việt Nam.
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <img src={logoFacebook} className="w-6 h-6" alt="Facebook" />
            <img src={logoTiktok} className="w-6 h-6" alt="Tiktok" />
            <img src={logoYoutube} className="w-6 h-6" alt="Youtube" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
          <div>
            <p className="font-bold pb-3">Thông tin</p>
            <ul className="space-y-2 text-sm">
              <li>Tin tức</li>
              <li>Giới thiệu</li>
              <li>Phương thức thanh toán</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-3">Chính sách</p>
            <ul className="space-y-2 text-sm">
              <li>Giao hàng</li>
              <li>Bảo mật</li>
              <li>Đổi trả</li>
              <li>Bảo hành</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-3">Địa chỉ & Liên hệ</p>
            <ul className="space-y-2 text-sm">
              <li>Tài khoản của tôi</li>
              <li>Đơn đặt hàng</li>
              <li className="flex justify-center sm:justify-start gap-1">
                Mua hàng: <span className="text-[#0085FF]">123.456.7890</span>
              </li>
              <li>Nhánh 1: Khu vực Hà Nội và các tỉnh phía Bắc</li>
              <li>Nhánh 2: Khu vực Hồ Chí Minh và các tỉnh phía Nam</li>
            </ul>
            <p className="flex justify-center sm:justify-start gap-1 mt-3 text-sm">
              Doanh nghiệp: <span className="text-[#0085FF]">036.636.xxx</span>
            </p>
          </div>
        </div>

        <div className="text-center text-sm border-t border-gray-600 pt-4">
          <p>
            2016 CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ ISTONE GPDKKD:
            0312840188
          </p>
          <p>
            Địa chỉ: 27 Nguyễn Hiền, Phường 4, Quận 3, Thành phố Hồ Chí Minh
          </p>
          <p>DT: 08 68285893</p>
        </div>
      </div>
    </div>
  );
}
