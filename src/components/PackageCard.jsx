import arrow from '../assets/images/arrow.png'
const PackageCard = ({ title, price, features }) => {
    return (
      <div className=" rounded-2xl mb-20 bg-slate-100 shadow-lg p-6 text-center border border-gray-300 flex flex-col justify-between max-w-80 h-96 transition duration-300 lg:hover:translate-y-[-20px] lg:hover:border-orange-400 lg:hover:border-4 ">
      <div>
        <h3 className="text-3xl font-semibold mb-1 text-black font-palanquin">{title}</h3>
        <p className="text-2xl font-bold mb-4 text-orange-400">{price}/month</p>
        <ul className="text-base mb-6">
        
        {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-3 text-black font-semibold">
              <img src={arrow} alt="arrow" className="w-4 h-4 mr-2 " />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
      );
}

export default PackageCard