import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import logoiStore from "../../assets/logo/logoiStore.png";
import apple from "../../assets/logo/apple.png";

export default function Header() {
  return (
    <header>
      <div>
        <div className="bg-[#183B52] flex justify-between h-[40px] px-[100px]">
          <div className="text-white flex items-center gap-8">
            <p>iStone for Education</p>
            <p>iStone for Enterprise</p>
          </div>
          <div className="flex items-center gap-5">
            <CiSearch className="h-5 w-5 text-white"></CiSearch>
            <CiShoppingCart className="h-5 w-5 text-white"></CiShoppingCart>
            <IoPersonCircleOutline className="h-5 w-5 text-white"></IoPersonCircleOutline>
          </div>
        </div>
        <div className="flex justify-between items-center px-[100px] h-[60px]">
          <div className="flex gap-5">
            <img src={logoiStore} className="w-[114px] h-[26px]"></img>
            <div> | </div>
            <img src={apple} className="w-[21.84px] h-[26px]"></img>
          </div>
          <div className="flex gap-5">
            <ul>Mac</ul>
            <ul>IPad</ul>
            <ul>IPhone</ul>
            <ul>Watch</ul>
            <ul>Máy in</ul>
            <ul>Phụ kiện</ul>
            <ul>Hỗ trợ</ul>
          </div>
          <div className="flex gap-5">
            <CiSearch className="h-5 w-5"></CiSearch>
            <CiShoppingCart className="h-5 w-5"></CiShoppingCart>
            <IoPersonCircleOutline className="h-5 w-5"></IoPersonCircleOutline>
          </div>
        </div>
      </div>
    </header>
  );
}
