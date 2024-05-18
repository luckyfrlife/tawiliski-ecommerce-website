import { BiChat } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { BodyOne, Title } from "../common/CustomComponents";

const additionalInfo = [
  {
    id: 1,
    title: "FREE SHIPPING",
    description:
      "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
    icon: <FaShippingFast size={50} />,
  },
  {
    id: 2,
    title: "24/7 SUPPORT",
    description:
      "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
    icon: <MdOutlineMarkUnreadChatAlt size={50} />,
  },
  {
    id: 3,
    title: "MONEY BACK",
    description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
    icon: <FaCircleDollarToSlot size={50} />,
  },
];

export const ShippingInfo = () => {
  return (
    <>
      <section className="container">
        <div className="py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {additionalInfo.map((info) => (
            <div
              key={info.id}
              className="flex items-center justify-center flex-col text-center gap-3">
              <div className="text-primary-green">{info.icon}</div>
              <h3 className="text-xl font-bold mt-4">{info.title}</h3>
              <p className="mt-2">{info.description}</p>
            </div>
          ))}
        </div>
        <div className="box bg-primary p-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="left flex items-center gap-3">
            <BiChat size={100} color="white" />
            <div>
              <Title className=" text-white leading-none" level={3}>
                SUBSCRIBE TO OUR DAILY UPDATES
              </Title>
              <BodyOne className="text-gray-300">
                Get Latest News, Offers And Discounts
              </BodyOne>
            </div>
          </div>
          <div className="left w-full p-5 px-8 lg:w-1/2">
            <input type="text" className=" outline-none w-full p-3" />
          </div>
        </div>
      </section>
    </>
  );
};
