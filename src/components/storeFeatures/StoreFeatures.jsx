import { FaTruck, FaMoneyCheckAlt, FaHeadphones } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";

export default function StoreFeatures() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      description: "Free delivery for all orders",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Money Guarantee",
      description: "30 days money back",
    },
    {
      icon: <FaHeadphones />,
      title: "24/7 Support",
      description: "Friendly 24/7 support",
    },
    {
      icon: <FaMoneyCheck />,
      title: "Secure Payment",
      description: "All cards accepted",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 sm:px-16 md:px-3 py-3 shadow-sm">
      {features.map((feature, index) => (
        <div key={index} className="flex justify-center">
          <div className="flex  items-center space-x-3 w-32 sm:w-44 md:w-auto">
            <span className="text-xl sm:text-4xl text-[#ff4654]">
              {feature.icon}
            </span>
            <div className="flex flex-col justify-center">
              <span className="block font-semibold text-[0.7rem] sm:text-sm">
                {feature.title}
              </span>
              <span className="block text-gray-600 text-[0.6rem] sm:text-xs">
                {feature.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
