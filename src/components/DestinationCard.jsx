import location from '../assets/images/icone-de-localisation-orange.png'

const DestinationCard = ({destination}) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
      <img className="w-full hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer" src={destination.photo} alt={destination.title} />
      <div className="px-4 py-4">
        <div className="flex justify-between ">
        <p className="text-gray-700 text-base"><img src={location} alt="location" className=' w-6 h-6' /> {destination.city}</p>
        <p className="text-gray-700 text-base">9D / 10N</p>
        </div>
        <p className=" text-lg font-semibold text-black mt-2">{destination.title}</p>
        <div className=" flex justify-between mt-4">
        <p className="text-gray-700 text-md"><span className=" text-orange-400 font-bold">{destination.price} $</span>/ person</p>
        <button className="px-2 py-1 bg-orange-400 rounded-lg text-white hover:bg-orange-500 font-semibold">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard