import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 30,
      currency: "USD",
      features: [
        "Access to gym facilities",
        "Locker room access",
        "Open gym hours only",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      currency: "USD",
      features: [
        "Access to gym facilities",
        "Locker room access",
        "Group fitness classes",
        "1 free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 80,
      currency: "USD",
      features: [
        "Access to gym facilities",
        "Locker room access",
        "Unlimited group fitness classes",
        "4 personal training sessions per month",
        "Access to spa and sauna",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 120,
      currency: "USD",
      features: [
        "Access to gym facilities",
        "Private locker with towel service",
        "Unlimited group fitness classes",
        "Unlimited personal training sessions",
        "Priority booking for classes",
        "Exclusive access to VIP lounge and amenities",
        "Dedicated nutrition coaching",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
