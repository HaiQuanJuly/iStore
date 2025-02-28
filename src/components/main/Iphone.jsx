import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import products from "../../data/product.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Section_four() {
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedSeries, setSelectedSeries] = useState(""); // Ban đầu không lọc gì

  // Hàm thay đổi ảnh khi chọn màu
  const handleColorChange = (color, product) => {
    setSelectedImages((prevState) => ({
      ...prevState,
      [product.id]: product.images[color],
    }));
  };

  // Hàm lọc sản phẩm theo series
  const filterProductsBySeries = (series) => {
    setSelectedSeries(series);
  };

  // Lọc sản phẩm theo series đã chọn
  const filteredProducts = selectedSeries
    ? products.filter((product) => product.series === selectedSeries)
    : products;

  return (
    <div className="bg-[#F4F5F8] px-4 sm:px-8 md:px-12 lg:px-[100px] py-12">
      <main className="bg-white rounded-xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 px-4 sm:px-10 py-6">
          <p className="font-bold text-[24px] sm:text-[30px]">iPhone.</p>
          <p className="font-bold text-[#3C3C4399] text-[20px] sm:text-[30px]">
            Mọi phiên bản - Hãy chọn mẫu bạn thích
          </p>
        </div>

        {/* Bộ lọc series */}
        <div className="flex flex-wrap justify-between items-center px-4 sm:px-10 py-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {[
              "iPhone 11 series",
              "iPhone 12 series",
              "iPhone 13 series",
              "iPhone 15 series",
            ].map((series, index) => (
              <div
                key={index}
                className="w-[120px] sm:w-[133px] h-[36px] rounded-lg border flex items-center justify-center cursor-pointer hover:border-[#00B685] hover:bg-[#E6F8F3] hover:text-[#00B685] font-medium"
                onClick={() => filterProductsBySeries(series)} // Lọc theo series
              >
                {series}
              </div>
            ))}
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="flex items-center justify-between py-8">
          <Carousel
            responsive={responsive}
            className="flex items-center gap-4 w-full max-w-[1400px] mx-auto"
          >
            {filteredProducts.map((product) => {
              const selectedImage =
                selectedImages[product.id] || product.images[product.colors[0]];
              return (
                <div
                  key={product.id}
                  className="border rounded-[20px] p-3 sm:p-4 w-full max-w-[260px] cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.isNew && (
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-[#FF190A] to-[#FFF500] font-bold">
                      New
                    </p>
                  )}
                  <img
                    src={selectedImage} // Hiển thị ảnh theo màu đã chọn
                    className="mx-auto w-full h-[300px] object-cover"
                    alt={product.name}
                  />
                  <div className="flex justify-center py-3 gap-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300 hover:border-[#00B685]"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color, product)} // Cập nhật ảnh khi chọn màu
                      ></div>
                    ))}
                  </div>
                  <div className="text-center font-bold py-3">
                    {product.name}
                  </div>
                  <div className="flex gap-2 justify-center text-sm sm:text-base">
                    <p className="line-through text-gray-500">
                      {product.originalPrice.toLocaleString()}đ
                    </p>
                    <p className="text-[#0A84FF] font-bold">
                      {product.price.toLocaleString()}đ
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>

        {/* Xem toàn bộ */}
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
