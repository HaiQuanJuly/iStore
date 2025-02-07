import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // Icon menu mobile
import logoiStore from "../../assets/logo/logoiStore.png";
import apple from "../../assets/logo/apple.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="bg-[#183B52] hidden md:flex justify-between items-center h-[40px] px-4 md:px-10 lg:px-24 text-white">
        <div className="flex gap-8 text-sm">
          <p>iStone for Education</p>
          <p>iStone for Enterprise</p>
        </div>
        <div className="flex items-center gap-5">
          <CiSearch className="h-5 w-5 text-white cursor-pointer" />
          <CiShoppingCart className="h-5 w-5 text-white cursor-pointer" />
          <IoPersonCircleOutline className="h-5 w-5 text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between items-center px-4 md:px-10 lg:px-24 h-[60px]">
        <div className="flex items-center gap-3">
          <img
            src={logoiStore}
            className="w-[114px] h-[26px]"
            alt="Logo iStore"
          />
          <span className="hidden md:block">|</span>
          <img src={apple} className="w-[22px] h-[26px]" alt="Apple Logo" />
        </div>

        <nav className="hidden md:flex md:gap-[60px] gap-5 text-[16px] font-medium">
          <a href="/mac" className="hover:text-gray-700">
            Mac
          </a>
          <a href="/ipad" className="hover:text-gray-700">
            iPad
          </a>
          <a href="/iphone" className="hover:text-gray-700">
            iPhone
          </a>
          <a href="/watch" className="hover:text-gray-700">
            Watch
          </a>
          <a href="/may-in" className="hover:text-gray-700">
            Máy in
          </a>
          <a href="/phu-kien" className="hover:text-gray-700">
            Phụ kiện
          </a>
          <a href="/ho-tro" className="hover:text-gray-700">
            Hỗ trợ
          </a>
        </nav>

        <div className="hidden md:flex gap-5">
          <CiSearch className="h-5 w-5 cursor-pointer" />
          <CiShoppingCart className="h-5 w-5 cursor-pointer" />
          <IoPersonCircleOutline className="h-5 w-5 cursor-pointer" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white w-full shadow-lg py-4 px-6">
          <ul className="flex flex-col gap-4 text-[16px] font-medium">
            <a
              href="/mac"
              className="hover:text-gray-700 font-bold border-b pb-2"
            >
              Mac
            </a>
            <a href="/ipad" className="hover:text-gray-700">
              iPad
            </a>
            <a href="/iphone" className="hover:text-gray-700">
              iPhone
            </a>
            <a href="/watch" className="hover:text-gray-700">
              Watch
            </a>
            <a href="/may-in" className="hover:text-gray-700">
              Máy in
            </a>
            <a href="/phu-kien" className="hover:text-gray-700">
              Phụ kiện
            </a>
          </ul>

          <ul className="flex flex-col gap-3 mt-6 text-[16px]">
            <p className="font-bold border-b pb-2">Hồ Sơ</p>
            <a href="/profile" className="hover:text-gray-700">
              Xem thông tin
            </a>
            <a href="/history" className="hover:text-gray-700">
              Lịch sử yêu cầu
            </a>
          </ul>

          <ul className="flex flex-col gap-3 mt-6 text-[16px]">
            <p className="hover:text-gray-700">Hỗ Trợ</p>
          </ul>

          <div className="mt-6">
            <a href="/logout" className="text-red-600 font-medium">
              Đăng xuất
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
