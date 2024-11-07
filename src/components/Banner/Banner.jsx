import React from "react";
import Img1 from "../../assets/web/icon1.png";
import Img2 from "../../assets/web/icon2.png";
import Img3 from "../../assets/web/icon3.png";

const Banner = () => {
  return (
    <div className="w-full  mt-4 shadow-md">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-2  mx-6 ">
          <div className="flex items-center ml-6">
            <img src={Img1} alt="" className="w-16 h-16" />
            <div className="ml-4 flex flex-col">
              <p className="font-bold text-lg">MỚI LẠ</p>
              <p className="text-sm">
                Điểm đến và chương trình tour luôn được đổi mới
              </p>
            </div>
          </div>

          <div className="flex items-center ml-6">
            <img src={Img2} alt="" className="w-16 h-16" />
            <div className="ml-4 flex flex-col">
              <p className="font-bold text-lg">AN TÂM</p>
              <p className="text-sm">
                Hơn 14 năm kinh nghiệm và đồng hành cùng 250.000+ khách hàng
              </p>
            </div>
          </div>

          <div className="flex items-center ml-6">
            <img src={Img3} alt="" className="w-16 h-16" />
            <div className="ml-4 flex flex-col">
              <p className="font-bold text-lg">LẮNG NGHE</p>
              <p className="text-sm">
                PYS luôn lắng nghe những phản hồi, góp ý của khách hàng để phục
                vụ tốt hơn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
