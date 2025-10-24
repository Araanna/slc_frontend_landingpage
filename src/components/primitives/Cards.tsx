
import originalImg from "../../assets/images/original.png";
import classicImg from "../../assets/images/classic.png";

// --- Static Contracts Data ---
const contracts = [
  {
    title: "Contract A (ORIGINAL)",
    price: 26000,
    description:
      "Funeral service package including preparation, hearse, and benefits.",
    imageData: originalImg,
    imageAlt: "Contract A Original Package",
    subtitle: "Funeral Service Plan",
    features: [
      "Casket Worth Php 26,000",
      "Standard body preparation and preservation for 7 days",
      "Funeral Hearse 25kms from the point of the servicing mortuary",
      "Accidental Death Coverage (Ages 18–55yrs): Principal 100% / Spouse 50% / Children 25% (max 4)",
      "Cash Assistance 100% of the Contract Price",
      "Assignable / Transferable",
      "Unrendered Service Refund",
      "Loanable",
    ],
  },
  {
    title: "Contract A (CLASSIC)",
    price: 28000,
    description:
      "Enhanced funeral service plan with upgraded casket and full benefits.",
    imageData: classicImg,
    imageAlt: "Contract A Classic Package",
    subtitle: "Funeral Service Plan",
    features: [
      "Casket Worth Php 28,000",
      "Standard body preparation and preservation for 7 days",
      "Funeral Hearse 25kms from the point of the servicing mortuary",
      "Accidental Death Coverage (Ages 18–55yrs): Principal 100% / Spouse 50% / Children 25% (max 4)",
      "Cash Assistance 100% of the Contract Price",
      "Assignable / Transferable",
      "Unrendered Service Refund",
      "Loanable",
    ],
  },
];

// --- Helper Function ---
const formatPrice = (price: number): string =>
  `₱${price.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function Cards() {
  return (
   <div className="flex flex-wrap gap-8 justify-center p-8">  
  {contracts.map((contract, index) => (
    <div
      key={index}
      className="max-w-sm bg-slate-50 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 min-h-[400px] flex flex-col transform hover:-translate-y-1 border border-green-950"
    >
      {/* Image Section */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={contract.imageData}
          alt={contract.imageAlt}
          className="w-full h-full object-fit block"
        />
      </div>
      {/* Content Section */}
      <div className="text-left p-4 flex flex-col justify-between h-full flex-1">
        <div>
          <div
            className={`flex flex-col items-start ${
              contract.subtitle ? "mb-2" : "mb-4"
            } transition-all duration-200`}
          >
            <div className="flex justify-between items-center w-full gap-2 mb-1">
              <h1 className="text-xl font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200 flex-1">
                {contract.title}
              </h1>
              {(contract.price !== undefined && contract.price !== null) && (
                <span className="bg-green-100 text-green-800 text-lg font-bold px-2.5 py-0.5 rounded-lg transform hover:scale-105 transition-transform duration-200 whitespace-nowrap">
                  {formatPrice(contract.price)}
                </span>
              )}
            </div>
            {contract.subtitle && (
              <span className="bg-green-100 text-green-800 text-md font-bold px-2.5 py-0.5 rounded-full transform hover:scale-105 transition-transform duration-200">
                {contract.subtitle}
              </span>
            )}
          </div>
          <h5 className="text-md font-bold tracking-tight text-gray-900 mb-4 group">
            <span className="group-hover:text-gray-700 transition-colors duration-200">
              {contract.description}
            </span>
          </h5>
          {contract.features.length > 0 && (
            <ul className="font-normal text-sm text-gray-700 space-y-2">
              {contract.features.map((feature, i) => (
                <li
                  key={i}
                  className="transform hover:translate-x-1 transition-transform duration-200 hover:text-gray-900"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  • {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="w-fit bg-[#0A400C] hover:bg-green-900 text-white text-sm font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 mt-4 active:scale-95">
          AVAIL NOW
        </button>
      </div>
    </div>
  ))}
</div>
  );
}
