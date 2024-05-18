import React from "react";
import { BodyOne, Title } from "../common/CustomComponents";
import { ProductCard } from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productlists } from "../../assets/data/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[32%] -right-5 lg:-right-32 rounded-full slider-btn"
      onClick={onClick}>
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[32%] -left-5 lg:-left-32 rounded-full slider-btn z-10"
      onClick={onClick}>
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

export const ProductSlide = () => {
  return (
    <section className="py-20 bg-white slideproduct">
      <div className="container">
        <Title level={4}>What is Trending now</Title>
        <div className="flex items-center gap-3 uppercase">
          <BodyOne className="text-sm">
            DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART.
          </BodyOne>
        </div>

        <ProductSlideCard />
      </div>
    </section>
  );
};

export const ProductSlideCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {productlists.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.title}
            description={product.description}
            images={product.images}
            price={product.price}
            discount={product.discount}
            rating={product.rating}
            featured={product.featured}
            category={product.category}
            color={product.color}
          />
        ))}
      </Slider>
    </>
  );
};
