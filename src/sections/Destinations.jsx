import DestinationCard from '../components/DestinationCard';
import destination from '../assets/data/tours';

const Destinations = () => {
  const limitedDestinations = destination.slice(0, 8);
  
  return (
    <div id='destinations' className="container mx-auto padding-x">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-12 text-center">Discover Nature Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        {limitedDestinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
      <div className='flex justify-center mt-3 mr-10'>
      <button className="text-xs sm:text-sm lg:text-base bg-orange-400 text-white px-8 py-4 rounded-full mt-4 font-semibold hover:bg-orange-400 transition duration-300">
              Explore More
            </button>
      </div>
    </div>
  )
}

export default Destinations