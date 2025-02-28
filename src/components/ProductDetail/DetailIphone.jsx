import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../../data/product";
import home from "../../assets/logo/Home.png";
import logoApple from "../../assets/logo/logoApple.png";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại</p>;
  }

  // Khai báo trạng thái lưu dung lượng và giá
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [price, setPrice] = useState(product.price);

  // Danh sách dung lượng và giá tương ứng
  const storageOptions = [
    { size: "128GB", price: 24000000 },
    { size: "256GB", price: 28000000 },
    { size: "512GB", price: 32000000 },
  ];

  // Xử lý khi chọn dung lượng
  const handleStorageChange = (storage) => {
    setSelectedStorage(storage.size);
    setPrice(storage.price);
  };

  return (
    <div>
      <div className="px-[120px] py-12">
        <div className="text-sm flex gap-2 mb-6">
          <img src={home} className="text-black h-5 w-5" alt="home"></img>
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
          </div>

          <div className="flex-1 pt-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <hr className="mt-10 my-10"></hr>

            {/* Chọn màu */}
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

            {/* Chọn dung lượng */}
            <div className="mt-6">
              <p className="text-black font-bold">Storage</p>
              <div className="flex gap-4 mt-2">
                {storageOptions.map((storage, index) => (
                  <div
                    key={index}
                    className={`relative px-6 py-2 border rounded-[12px] cursor-pointer w-[200px] h-[60px] flex flex-col justify-center transition-all duration-300 
                      ${
                        selectedStorage === storage.size
                          ? "border-[#00B685] bg-gray-100"
                          : ""
                      }`}
                    onClick={() => handleStorageChange(storage)}
                  >
                    <p className="text-lg font-bold">{storage.size}</p>
                    <span className="text-gray-500 text-sm">
                      {storage.price.toLocaleString()}₫
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thanh giá tiền và mua hàng */}
      <div className="bg-[#F4F5F8] h-[90px]">
        <div className="px-[120px] py-6 flex justify-between">
          <div className="flex gap-2">
            <img src={logoApple} className="w-6 h-7" alt="logoApple"></img>
            <div>
              <div className="font-bold text-lg">Đến mua</div>
              <div className="text-[#00B685]">Kiểm tra hàng còn</div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="text-[30px] font-bold">
              {price.toLocaleString()}₫
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
