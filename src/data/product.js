import iphone12_1 from "../assets/product/iphone12/iphone5.webp";
import iphone12_2 from "../assets/product/iphone12/iphone6.webp";
import iphone12_3 from "../assets/product/iphone12/iphone7.webp";
import iphone12_4 from "../assets/product/iphone12/iphone8.webp";
import iphone12_5 from "../assets/product/iphone12/iphone9.webp";
import iphone15_1 from "../assets/product/iphone15/iphone2.webp";
import iphone15_2 from "../assets/product/iphone15/iphone3.webp";
import iphone15_3 from "../assets/product/iphone15/iphone4.webp";
import iphone15_4 from "../assets/product/iphone15/iphone1.webp";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 64GB",
    series: "iPhone 15 series", // Đã thêm thuộc tính series
    images: {
      "#C0AA95": iphone15_4,
      "#C5C0B5": iphone15_1,
      "#F2F1ED": iphone15_2,
      "#4D4D4D": iphone15_3,
    },
    price: 12990000,
    originalPrice: 14990000,
    colors: ["#C0AA95", "#C5C0B5", "#F2F1ED", "#4D4D4D"],
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max 256GB",
    series: "iPhone 15 series", // Đã thêm thuộc tính series
    images: {
      "#C0AA95": iphone15_4,
      "#C5C0B5": iphone15_1,
      "#F2F1ED": iphone15_2,
      "#4D4D4D": iphone15_3,
    },
    price: 12990000,
    originalPrice: 14990000,
    colors: ["#C0AA95", "#C5C0B5", "#F2F1ED", "#4D4D4D"],
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 3,
    name: "iPhone 13 Pro 128GB",
    series: "iPhone 13 series", // Đã thêm thuộc tính series
    images: {
      "#CDD3D6": iphone12_1, // Hồng
      "#E7D4D4": iphone12_2, // Vàng
      "#EBE8C4": iphone12_3, // Xanh lá
      "#D5DDCC": iphone12_4, // Đen
      "#4D5053": iphone12_5, // Xám
    },
    price: 16990000,
    originalPrice: 18990000,
    colors: ["#CDD3D6", "#E7D4D4", "#EBE8C4", "#D5DDCC", "#4D5053"], // Hồng, Vàng, Xanh lá, Đen, Xám
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 4,
    name: "iPhone 12 64GB",
    series: "iPhone 12 series", // Đã thêm thuộc tính series
    images: {
      "#CDD3D6": iphone12_1, // Hồng
      "#E7D4D4": iphone12_2, // Vàng
      "#EBE8C4": iphone12_3, // Xanh lá
      "#D5DDCC": iphone12_4, // Đen
      "#4D5053": iphone12_5, // Xám
    },
    price: 12990000,
    originalPrice: 14990000,
    colors: ["#CDD3D6", "#E7D4D4", "#EBE8C4", "#D5DDCC", "#4D5053"], // Hồng, Vàng, Xanh lá, Đen, Xám
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 5,
    name: "iPhone 12 128GB",
    series: "iPhone 12 series", // Đã thêm thuộc tính series
    images: {
      "#CDD3D6": iphone12_1, // Hồng
      "#E7D4D4": iphone12_2, // Vàng
      "#EBE8C4": iphone12_3, // Xanh lá
      "#D5DDCC": iphone12_4, // Đen
      "#4D5053": iphone12_5, // Xám
    },
    price: 14990000,
    originalPrice: 16990000,
    colors: ["#CDD3D6", "#E7D4D4", "#EBE8C4", "#D5DDCC", "#4D5053"], // Hồng, Vàng, Xanh lá, Đen, Xám
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 6,
    name: "iPhone 13 Pro Max 128GB",
    series: "iPhone 13 series", // Đã thêm thuộc tính series
    images: {
      "#CDD3D6": iphone12_1, // Hồng
      "#E7D4D4": iphone12_2, // Vàng
      "#EBE8C4": iphone12_3, // Xanh lá
      "#D5DDCC": iphone12_4, // Đen
      "#4D5053": iphone12_5, // Xám
    },
    price: 17990000,
    originalPrice: 19990000,
    colors: ["#CDD3D6", "#E7D4D4", "#EBE8C4", "#D5DDCC", "#4D5053"], // Hồng, Vàng, Xanh lá, Đen, Xám
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 7,
    name: "iPhone 13 Pro 64GB",
    series: "iPhone 13 series", // Đã thêm thuộc tính series
    images: {
      "#CDD3D6": iphone12_1, // Hồng
      "#E7D4D4": iphone12_2, // Vàng
      "#EBE8C4": iphone12_3, // Xanh lá
      "#D5DDCC": iphone12_4, // Đen
      "#4D5053": iphone12_5, // Xám
    },
    price: 16990000,
    originalPrice: 18990000,
    colors: ["#CDD3D6", "#E7D4D4", "#EBE8C4", "#D5DDCC", "#4D5053"], // Hồng, Vàng, Xanh lá, Đen, Xám
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 8,
    name: "iPhone 11 Pro Max 64GB",
    series: "iPhone 11 series", // Đã thêm thuộc tính series
    images: {
      "#CDD3D6": iphone12_1, // Hồng
      "#E7D4D4": iphone12_2, // Vàng
      "#EBE8C4": iphone12_3, // Xanh lá
      "#D5DDCC": iphone12_4, // Đen
      "#4D5053": iphone12_5, // Xám
    },
    price: 19990000,
    originalPrice: 21990000,
    colors: ["#CDD3D6", "#E7D4D4", "#EBE8C4", "#D5DDCC", "#4D5053"], // Hồng, Vàng, Xanh lá, Đen, Xám
    isNew: true,
    isHotDeal: true,
  },
];

export default products;
