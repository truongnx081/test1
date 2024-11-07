import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/slider/slider1.png";
import Img2 from "../../assets/slider/slider2.png";
import Img3 from "../../assets/slider/slider3.png";
import Img4 from "../../assets/slider/slider4.png";

const ImageList = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
    title: "Up to 10% off on all Men's Wear",
  },
  {
    id: 3,
    img: Img3,
  },
  {
    id: 4,
    img: Img4,
  },
];

const settings = {
  dots: false, // Hiển thị các chấm điều hướng (dots) dưới slider
  arrows: false, // Tắt mũi tên điều hướng (arrows) ở hai bên slider
  infinite: true, // Cho phép cuộn vô hạn, nghĩa là khi bạn cuộn hết, nó sẽ quay lại slide đầu tiên
  speed: 500, // Thời gian chuyển tiếp giữa các slide (500ms)
  slidesToScroll: 1, // Số lượng slide cuộn mỗi lần (ở đây là 1)
  autoplay: true, // Tự động chuyển slide khi hết thời gian
  autoplaySpeed: 2000, // Thời gian mỗi slide tự động chuyển (2000ms = 2s)
  cssEase: "linear", // Chế độ chuyển động của slide (ở đây là chuyển động đều, không thay đổi tốc độ)
  pauseOnHover: true, // Tạm dừng tự động chuyển slide khi người dùng hover (di chuột) vào slider
  pauseOnFocus: true, // Tạm dừng tự động chuyển slide khi slider có focus
  responsive: [
    {
      breakpoint: 10000, // Áp dụng các cài đặt này cho mọi màn hình rộng hơn 10000px (không có giới hạn, tức là cho tất cả các màn hình)
      settings: {
        slidesToShow: 3, // Hiển thị 3 slide cùng một lúc
        slidesToScroll: 1, // Cuộn 1 slide mỗi lần
        infinite: true, // Vẫn cho phép cuộn vô hạn
      },
    },
    {
      breakpoint: 1024, // Áp dụng cho màn hình có chiều rộng từ 768px đến 1024px
      settings: {
        slidesToShow: 2, // Hiển thị 2 slide cùng một lúc
        slidesToScroll: 1, // Cuộn 1 slide mỗi lần
        initSlide: 2, // Bắt đầu từ slide thứ 2 khi có kích thước màn hình này (mặc định là slide đầu tiên)
      },
    },
    {
      breakpoint: 640, // Áp dụng cho màn hình có chiều rộng nhỏ hơn 768px
      settings: {
        slidesToShow: 1, // Hiển thị 1 slide cùng một lúc
        slidesToScroll: 1, // Cuộn 1 slide mỗi lần
      },
    },
  ],
};

const SliderImg = () => {
  return (
    <div className="py-5 mb-2">
      <div className="container">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="mx-4">
              <a href="#" className="outline-none border-none">
                <img src={data.img} alt="" className="p-2" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImg;
