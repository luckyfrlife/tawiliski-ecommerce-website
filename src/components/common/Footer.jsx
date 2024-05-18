import React from "react";
import LogoImg from "../../assets/common/logo.png";
import { BodyOne, Caption, CustomerLink, Title } from "./CustomComponents";

export const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="" className="h-7" />

            <div className="flex flex-col gap-2 mt-5">
              <Caption>Address: 451 Wall Street, UK, London</Caption>
              <Caption>email: example@domain.com</Caption>
              <Caption>Call: 555-555-1234</Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className="flex flex-col gap-4">
              <CustomerLink>Normal</CustomerLink>
              <CustomerLink>Shop With sidebar</CustomerLink>
              <CustomerLink>Shop With Category</CustomerLink>
              <CustomerLink>Shop Filters Top Bar</CustomerLink>
              <CustomerLink>Shop Wide</CustomerLink>
              <CustomerLink>My Account</CustomerLink>
            </div>
          </div>

          <div>
            <Title level={5}>Useful Links</Title>
            <div className="flex flex-col gap-4">
              <CustomerLink>Normal</CustomerLink>
              <CustomerLink>Shop With sidebar</CustomerLink>
              <CustomerLink>Shop With Category</CustomerLink>
              <CustomerLink>Shop Filters Top Bar</CustomerLink>
              <CustomerLink>Shop Wide</CustomerLink>
              <CustomerLink>My Account</CustomerLink>
            </div>
          </div>

          <div>
            <Title level={5}>Our Blog</Title>
            <div className="flex flex-col gap-4">
              <CustomerLink>Normal</CustomerLink>
              <CustomerLink>Shop With sidebar</CustomerLink>
              <CustomerLink>Shop With Category</CustomerLink>
              <CustomerLink>Shop Filters Top Bar</CustomerLink>
              <CustomerLink>Shop Wide</CustomerLink>
              <CustomerLink>My Account</CustomerLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
