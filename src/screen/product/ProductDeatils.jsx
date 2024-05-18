import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import {
  BodyOne,
  Caption,
  Title,
} from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { ProductSlideCard } from "../../components/product/ProductSlide";
import { FilterDiscover } from "../../components/hero/InstagramPost";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

export const ProductDeatils = () => {
  const { productId } = useParams();
  const product = productlists.find(
    (product) => product.id === parseInt(productId)
  );
  const { title, images, price, description, discount, rating, color } =
    product;

  const [selectedColor, setSelectedColor] = useState(color[0].value);

  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const CustomerPage = ({ index, onClick }) => (
    <div>
      <img src={images[index].image} alt="" onClick={onClick} />
    </div>
  );

  const settings = {
    customPaging: (i) => <CustomerPage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="container mt-32 slideproduct">
        <div
          className="flex justify-between flex-col lg:flex-row"
          key={productId}>
          <div className="images lg:w-1/2">
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img
                    src={image.image}
                    key={index}
                    className="w-full h-full"
                    alt=""
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="deatils lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-500">
              SALE {discount}% OFF
            </button>
            <Title level={2} className="my-2">
              {title}
            </Title>
            <div className="flex items-center gap-2 -mt-5 mb-5">
              <div className="flex items-center gap-1">
                {RenderRatingStars(rating)}
              </div>
              <p>{product.rating} Review</p>
            </div>
            <p className="text-[15px]">{description}</p>
            <br />
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center gap-3 mt-5">
                {color.map((colorOption, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorClick(colorOption.value)}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${
                      selectedColor === colorOption.value ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: colorsValue[colorOption.value],
                    }}></div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Caption>Prices</Caption>
              <div className="flex items-center gap-3">
                <BodyOne className=" line-through mt-4">
                  ${selectedPrice.value}
                </BodyOne>
                <Title level={4} className=" text-primary-green">
                  $
                  {(
                    selectedPrice.value -
                    (selectedPrice.value * product.discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>
            <br />
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiPlus size={20} />
              </button>
              <input
                type="text"
                value="1"
                className="w-16 h-12 text-primary outline-none border border-gray-300 px-6"
              />
              <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                <BiMinus size={20} />
              </button>
              <button className="primary-btn">ADD TO CART</button>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button className="flex items-center gap-2 secondary-btn">
                <BiHeart size={20} />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 secondary-btn">
                Compare
              </button>
            </div>
            <hr className="my-5" />
            <label htmlFor="">
              <span className=" text-primary font-bold">SKU:</span>
            </label>
            <br />
            <label htmlFor="">
              <span className=" text-primary font-bold">Category:</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row my-10">
          <div className="lg:w-1/2">
            <Title level={3}>Fits your Child</Title>
            <Caption>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              veniam iusto aperiam, voluptatum animi odit itaque est magnam. Aut
              magnam itaque dignissimos iure nostrum deleniti laudantium
              ducimus, corrupti veniam tempora. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nisi vitae culpa officiis sint sed
            </Caption>
            <Title level={3} className="mt-5">
              Specifications
            </Title>
            <div className="flex flex-col gap-3 mt-2">
              <Caption>
                Assembled Dimensions (L x W x H): 21.5" x 19" x 27"
              </Caption>
              <Caption>Assembled Product Weight: 25 lbs.</Caption>
              <Caption>Harnesss Mode - Rear-Facing-40 lbs</Caption>
              <Caption>Harnesss Mode - Forward-Facing 25-65 lbs</Caption>
              <Caption>Booster Mode - Harness + Booster40 - 100 lbs</Caption>
              <Caption>Booster Mode - Blacknessn/a</Caption>
              <Caption>Rear-Facing Child Max Height Capacity43 in</Caption>
              <Caption>Forward-Facing Child Max Height Capacity54 in</Caption>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
            <ProductDeatilsBox
              title="All-in-One Car Seat"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque suscipit repudiandae hic dolorum."
            />
            <ProductDeatilsBox
              title="Space-Saving Design"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium numquam atque?"
            />
            <ProductDeatilsBox
              title="Easiest to install Correctly"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tenetur eius voluptas distinctio vel qui consectetur!"
            />
            <ProductDeatilsBox
              title="No Added Chemicals"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis corporis modi quidem!"
            />
          </div>
        </div>
        <Title level={3} className="my-5">
          Related Products
        </Title>
        <ProductSlideCard />
      </section>
      <br />
      <FilterDiscover />
    </>
  );
};

export const ProductDeatilsBox = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
        <Title level={5}>{title}</Title>
        <Caption>{desc}</Caption>
      </div>
    </>
  );
};
