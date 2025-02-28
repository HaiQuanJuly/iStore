import { useParams } from "react-router-dom";
import productsIpad from "../../data/productIpad.js";
import home from "../../assets/logo/Home.png";
import logoApple from "../../assets/logo/logoApple.png";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsIpad.find((p) => p.id === Number(id));

  return (
    <div>
      <div className="px-[120px] py-12">
        <div className="text-sm flex gap-2 mb-6">
          <img src={home} className="text-black h-5 w-5"></img>
          &gt;
          <a className="hover:text-gray-700">iPhone</a>
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
                Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine
              </li>
              <li>8GB unified memory </li>
              <li>256GB SSD storage</li>
              <li>13.6-inch Liquid Retina display with True Tone³</li>
              <li>1080p FaceTime HD camera</li>
              <li>MagSafe 3 charging port</li>
              <li>Two Thunderbolt / USB 4 ports</li>
              <li>30W USB-C Power Adapter</li>
              <li>Backlit Magic Keyboard with Touch ID - US English</li>
            </div>
          </div>

          <div className="flex-1 pt-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <hr className="mt-10 my-10"></hr>

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
                {[
                  { size: "128GB", price: "24,000,000" },
                  { size: "256GB", price: "28,000,000" },
                  { size: "512GB", price: "32,000,000" },
                ].map((storage, index) => (
                  <div
                    key={index}
                    className="relative px-6 py-2 border rounded-[12px] cursor-pointer w-[320px] h-[80px] flex flex-col justify-center transition-all duration-300 hover:border-[#00B685] " // Tăng độ bo góc khi hover
                  >
                    <p className="text-lg font-bold">{storage.size}</p>
                    <span className="text-gray-500 text-sm bg-white py-1 rounded-md transition-all duration-300 hover:text-[#00B685]">
                      {storage.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F8]">
        <div className=" h-[90px] px-[120px]">
          <div className=" py-6 flex justify-between">
            <div className="flex gap-2">
              <img src={logoApple} className="w-6 h-7"></img>
              <div>
                <div className="font-bold text-lg">Đến mua</div>
                <div className="text-[#00B685]">Kiểm tra hàng còn</div>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="text-[30px] font-bold">22,890,000₫</div>
              <button className="w-[186px] h-[40px] border rounded-[100px] bg-[#00B685] text-white">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
