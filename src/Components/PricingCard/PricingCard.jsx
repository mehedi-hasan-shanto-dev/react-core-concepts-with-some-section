import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  // console.log(pricing);
  const { name, price, description, features } = pricing;
  return (
    <div className=" flex flex-col border bg-amber-400 rounded-2xl p-4">
      {/*card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-4xl">${price}/Month</h4>
      </div>
      {/*card body*/}
      <div className="bg-amber-500 p-4 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
