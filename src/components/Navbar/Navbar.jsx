import React from "react";
import LogoImg from "../../assets/web/logo.png";
import BannerBackground from "../../assets/web/banner.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Menu = [
  {
    id: 1,
    name: "Tour Đoàn Riêng",
    link: "/#",
    isDropdown: true,
  },
  {
    id: 2,
    name: "Tour Tết 2025",
    link: "/#",
  },
  {
    id: 3,
    name: "Tour trong nước",
    link: "/#services",
  },
  {
    id: 4,
    name: "Tour quốc tế",
    link: "/#services",
  },
  {
    id: 5,
    name: "Dịch vụ Visa/ Thủ tục",
    link: "/#",
  },
  {
    id: 6,
    name: "Liên hệ",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Tour Đông Tây Bắc Từ Hà Nội",
    link: "/#",
  },
  {
    id: 2,
    name: "Tour Đông Tây Bắc Từ TP.HCM",
    link: "/#",
  },
  {
    id: 3,
    name: "Tour Nước Ngoài Từ Hà Nội",
    link: "/#",
  },
  {
    id: 4,
    name: "Tour Nước Ngoài Từ TP.HCM",
    link: "/#",
  },
];

const BannerImg = {
  backgroundImage: `url(${BannerBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Navbar = () => {
  return (
    <div style={BannerImg} className="h-96 w-full relative lg:h-[600px]">
      <div className="container h-20 flex justify-between text-white">
        {/* Logo */}
        <div>
          <a href="" className="">
            <img src={LogoImg} alt="" className="max-h-12 mt-5" />
          </a>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-5 cursor-pointer text-base">
          {Menu.map((data) => (
            <React.Fragment key={data.id}>
              {data.isDropdown ? (
                <div className="relative group mt-3">
                  <a
                    href=""
                    className="relative pb-2 mt-5
                    after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-[2px] after:bg-yellow-500
                    after:scale-x-0
                    after:origin-left 
                    after: transition-transform after:duration-300
                    hover:after:scale-x-100 "
                  >
                    {data.name}
                  </a>
                  <div className="absolute hidden group-hover:block text-black w-[250px] left-0 mt-2">
                    <ul className="bg-white rounded-lg  p-2 text-base">
                      {DropdownLinks.map((dropdownItem) => (
                        <li
                          key={dropdownItem.id}
                          className="bg-white p-1 hover:text-blue-900"
                        >
                          <a href={dropdownItem.link}>{dropdownItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                // Các mục không có dropdown
                <a
                  href={data.link}
                  className="relative pb-2 mt-5
                  after:absolute after:left-0 after:bottom-0
                  after:w-full after:h-[2px] after:bg-yellow-500
                  after:scale-x-0
                  after:origin-left 
                  after: transition-transform after:duration-300
                  hover:after:scale-x-100 "
                >
                  {data.name}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Title and Search */}
      <div className="text-center pt-28 text-white">
        <h1 className="text-3xl m-0">Thèm đi lắm rồi, mình lên đường thôi!</h1>
        <p className="m-0">
          Đặt tour và yên tâm tận hưởng chuyến đi của bạn với sự đồng hành của
          đội ngũ chuyên gia du lịch PYS Travel
        </p>
        <div className="flex items-center gap-0 justify-center h-12 mt-4">
          {/* Location Icon */}
          <div className="bg-white h-full flex items-center rounded-tl-lg rounded-bl-lg pl-3 pr-2">
            <FaLocationDot className="text-blue-500 w-5 h-5" />
          </div>

          {/* Input field */}
          <input
            className="w-[550px] h-full p-3 m-0 border-t border-b border-gray-300 outline-none text-black bg-white z-10"
            placeholder="Bạn muốn đi đâu?"
            type="text"
          />

          {/* Search Button */}
          <button
            className="flex bg-orange-600 font-bold text-white 
              rounded-tr-lg rounded-br-lg h-full px-4 items-center"
          >
            <CiSearch className="font-bold text-lg" />
            TÌM TOUR NGAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
