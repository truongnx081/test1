import React from "react";
import Img1 from "../../assets/tours/img1.png";
import Img3 from "../../assets/tours/img2.png";
import Img2 from "../../assets/tours/img3.png";
import IconTour from "../../assets/tours/icon.png";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
const ToursList = [
  {
    id: 1,
    title:
      "Tour Trung Quốc: Lệ Giang - Shangrila 5 ngày 4 đêm từ Hà Nội - Tết Nguyên Đán 2025",
    img: Img1,
    link: "",
    price: 1999000,
    date: "Từ 10/02/2025",
    duration: "5 ngày 4 đêm",
  },
  {
    id: 2,
    title:
      "Tour Tây Bắc: Mộc Châu - Sơn La - Điện Biên - Lai Châu - Sapa 5 ngày 5 đêm từ TP.HCM - Tết Nguyên Đán 2025",
    img: Img2,
    link: "",
    price: 13330000,
    date: "Từ 15/02/2025",
    duration: "5 ngày 5 đêm",
  },
  {
    id: 3,
    title:
      "Tour Đông Bắc: Hà Giang - Cao Bằng 4 ngày 4 đêm từ TP.HCM - Tết Nguyên Đán 2025",
    img: Img3,
    link: "",
    price: 15530000,
    date: "Từ 01/03/2025",
    duration: "3 ngày 2 đêm",
  },
];
const Tours = () => {
  return (
    <div>
      <div className="container mb-6">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h1 className="flex text-3xl font-semibold gap-2 items-center ">
            Tour Tết Âm Lịch 2025
            <img className="pb-2" src={IconTour} alt="" />
          </h1>
          <a href="#" className="border text-orange-500 border-orange-500 p-2 px-4 font-bold rounded-xl hover:bg-orange-500
          hover:text-white"
          >Xem thêm tour</a>
        </div>
        {/* Tour Detail */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ToursList.map((data) => (
            <div key={data.id} className="flex flex-col shadow-md">
              <a href={data.link}>
                <div className="h-60">
                  <img
                    src={data.img}
                    alt=""
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h2 className="font-bold text-blue-800 hover:text-orange-500 line-clamp-2 min-h-[30px] ">
                    {data.title}
                  </h2>
                  <p className="flex gap-3 items-center text-gray-500">
                    <RiCalendarScheduleFill />
                    {data.date}
                  </p>
                  <div className=" flex justify-between">
                    <p className="flex gap-3 items-center text-gray-500">
                      <FaClock />
                      {data.duration}
                    </p>
                    <span className="font-bold text-base text-orange-500">  {data.price.toLocaleString('vi-VN')} đ/khách</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
