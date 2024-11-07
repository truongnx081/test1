import React from "react";
import { CiPhone } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { MdOutlineGroups } from "react-icons/md";

const Header = () => {
  return (
    <div className=" text-white">
      {/* Header */}
      <div className="w-full bg-custom-blue text-sm p-1.5">
        <div className="container flex justify-between items-center">
          {/* Phone and Mail */}
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-1">
              <CiPhone />
              19003440
            </a>
            <span>|</span>
            <a href="#" className="flex items-center gap-1">
              <CgMail />
              contact@pystravel.com
            </a>
          </div>

          {/* Another Detail */}
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-1">
              <CiStar />
              Cẩm nang du lịch
            </a>
            <a href="#" className="flex items-center gap-1">
              <TiMessages />
              Góc khách hàng
            </a>
            <a href="#" className="flex items-center gap-1">
              <MdOutlineGroups />
              Về PYS Travel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
