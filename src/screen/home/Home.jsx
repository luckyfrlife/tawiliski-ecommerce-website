import { Caption, Title } from "../../components/common/CustomComponents";
import { ProductSlideCard } from "../../components/product/ProductSlide";
import {
  Banner,
  Hero,
  InstagramPost,
  Product,
  ProductSlide,
  ShippingInfo,
  Testimonials,
} from "../../router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimonials />

      <div className="container my-16 slideproduct">
        <Title level={3}>Recent Product</Title>
        <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART.</Caption>
        <br />
        <ProductSlideCard />
      </div>
      <InstagramPost />
    </>
  );
};
