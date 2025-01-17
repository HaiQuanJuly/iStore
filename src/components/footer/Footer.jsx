import logoiStore from "../../assets/logo/logoiStore2.png";
import logoFacebook from "../../assets/logo/logoFacebook.png";
import logoTiktok from "../../assets/logo/logoTiktok.png";
import logoYoutube from "../../assets/logo/logoYoutube.png";

export default function Footer() {
  return (
    <div className="bg-[#000000] flex px-[120px] py-[80px] justify-between">
      <div className="w-[632px]">
        <img src={logoiStore} className="pb-5"></img>
        <p className="text-white">
          CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ ISTONE
        </p>
        <p className="text-white">
          Qua một thập kỷ tạo dựng uy tín, Istone được 30 công ty công nghệ nổi
          tiếng thế giới lựa chọn làm đối tác, cung cấp các dịch vụ phát triển
          thị trường (MES) tại Việt Nam.
        </p>
        <div className="flex gap-2">
          <img src={logoFacebook}></img>
          <img src={logoTiktok}></img>
          <img src={logoYoutube}></img>
        </div>
      </div>
      <div className="text-white">
        <p className="font-bold pb-5">Thông tin</p>
        <ul>Tin tức</ul>
        <ul>Giới thiệu</ul>
        <ul>Phương thức thanh toán</ul>
      </div>
      <div className="text-white">
        <p className="font-bold pb-5">Chính sách</p>
        <ul>Giao hàng</ul>
        <ul>Bảo mật</ul>
        <ul>Đổi trả</ul>
        <ul>Bảo hành</ul>
      </div>
      <div className="text-white">
        <p className="font-bold pb-5 ">Địa chỉ & Liên hệ</p>
        <ul>Tài khoản của tôi</ul>
        <ul>Đơn đặt hàng</ul>
        <ul className="flex gap-2">
          Mua hàng: <p className="text-[#0085FF]">123.456.7890</p>
        </ul>
        <div>
          <ul className="px-10">
            Nhánh 1: Khu vực Hà Nội và các tỉnh phía Bắc
          </ul>
          <ul className="px-10">
            Nhánh 2: Khu vực Hồ Chí Minh và các tỉnh phía Nam
          </ul>
        </div>
        <p className="flex gap-2">
          Doanh nghiệp: <p className="text-[#0085FF]">036.636.xxx</p>
        </p>
      </div>
    </div>
  );
}
