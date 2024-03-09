const ExperienceCard = ({experience}) => {
  return (
    <div>
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
    <img className="w-full h-64 " src={experience.photo} alt={experience.title} />
    <div className="px-4 py-4">
      <p className=" text-lg font-semibold text-black mt-2  text-center">{experience.title}</p>
      <div className=" flex justify-between mt-4">
      <p className="text-gray-700 text-md"></p>
      </div>
    </div>
  </div>

  </div>
  )
}

export default ExperienceCard;
