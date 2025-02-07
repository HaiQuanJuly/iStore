import { useParams } from "react-router-dom";
import productsMacbook from "../../data/productMacbook.js";
import home from "../../assets/logo/Home.png";
import logoApple from "../../assets/logo/logoApple.png";

export default function DetailMacbook() {
  const { id } = useParams();
  const product = productsMacbook.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại</p>;
  }

  return (
    <div>
      <div className="px-[120px] py-12">
        {/* Breadcrumbs */}
        <div className="text-sm flex gap-2 mb-6">
          <img src={home} className="text-black h-5 w-5" alt="Home" />
          &gt;
          <a className="hover:text-gray-700">MacBook</a>
          &gt;
          <span className="text-black">{product.name}</span>
        </div>

        <div className="flex gap-10">
          <div className="w-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-xl shadow-md"
            />
            <p className="text-[#00B685] cursor-pointer text-sm text-center mt-5">
              View gallery
            </p>

            <div className="mt-5 text-[#1D1D1F] text-sm leading-relaxed">
              <li>
                Chip Apple {product.name.includes("M3") ? "M3" : "M2"} với CPU
                mạnh mẽ
              </li>
              <li>Màn hình Retina độ phân giải cao</li>
              <li>SSD siêu tốc</li>
              <li>Hỗ trợ Thunderbolt và USB-C</li>
              <li>Bảo mật Face ID hoặc Touch ID</li>
              <li>Thời lượng pin lên đến 20 giờ</li>
            </div>
          </div>

          <div className="flex-1 pt-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <hr className="mt-10 my-10" />

            <div className="mt-4">
              <p className="text-black font-bold">Color</p>
              <div className="flex gap-3 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border hover:border-[#00B685]"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-black font-bold">Storage</p>
              <div className="flex gap-4 mt-2">
                {[128, 256, 512, 1024].map((size, index) => (
                  <div
                    key={index}
                    className="relative px-6 py-2 border rounded-[12px] cursor-pointer w-[150px] h-[80px] flex flex-col justify-center transition-all duration-300 hover:border-[#00B685]"
                  >
                    <p className="text-lg font-bold">{size}GB</p>
                    <span className="text-gray-500 text-sm bg-white py-1 rounded-md transition-all duration-300 hover:text-[#00B685]">
                      {(product.price + index * 3000000).toLocaleString()}đ
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F5F8] h-[90px]">
        <div className="px-[120px] py-6 flex justify-between">
          <div className="flex gap-2">
            <img src={logoApple} className="w-6 h-7" alt="Apple Logo" />
            <div>
              <div className="font-bold text-lg">Đến mua</div>
              <div className="text-[#00B685]">Kiểm tra hàng còn</div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-[30px] font-bold">
              {product.price.toLocaleString()}₫
            </div>
            <button className="w-[186px] h-[40px] border rounded-[100px] bg-[#00B685] text-white">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
