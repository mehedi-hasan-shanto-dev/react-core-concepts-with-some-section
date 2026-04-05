import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const PricingData = use(pricingPromise);
  console.log(PricingData);
  return (
    <div>
      <h3 className="text-5xl">Get Our Membership</h3>
      <div className="grid md:gird-col-2 lg:grid-cols-3 gap-8">
        {/* {PricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))} */}

        {PricingData.map((pricing) => (
          <DaisyPricingCard
            pricing={pricing}
            key={pricing.id}
          ></DaisyPricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
