import Iphone_1 from "../assets/product/product_1.png";
import Iphone_2 from "../assets/product/product_2.png";
import Iphone_3 from "../assets/product/product_1.png";
import Iphone_4 from "../assets/product/product_2.png";
import Iphone_5 from "../assets/product/product_1.png";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    image: Iphone_1,
    price: 15429000,
    originalPrice: 19429000,
    colors: ["#D5DDE0", "#EDD4D7", "#EEE9CC", "#D2DDCD", "#515558"],
    isNew: true,
    isHotDeal: true, // Đánh dấu là sản phẩm Hot Deal
  },
  {
    id: 2,
    name: "iPhone 15 256GB",
    image: Iphone_2,
    price: 22890000,
    originalPrice: 24890000,
    colors: ["#FAD6D6", "#CFCFCF", "#D6D6D6", "#A2A2A2", "#515558"],
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max 128GB",
    image: Iphone_3,
    price: 19990000,
    originalPrice: 21990000,
    colors: ["#EAEAEA", "#F0C9C9", "#C8D0C8", "#ACB1AC", "#515558"],
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 4,
    name: "iPhone 13 Pro 128GB",
    image: Iphone_4,
    price: 16990000,
    originalPrice: 18990000,
    colors: ["#D5DDE0", "#EDD4D7", "#EEE9CC", "#D2DDCD", "#515558"],
    isNew: true,
    isHotDeal: true,
  },
  {
    id: 5,
    name: "iPhone 12 64GB",
    image: Iphone_5,
    price: 12990000,
    originalPrice: 14990000,
    colors: ["#FAD6D6", "#CFCFCF", "#D6D6D6", "#A2A2A2", "#515558"],
    isNew: true,
    isHotDeal: true,
  },
];

export default products;
