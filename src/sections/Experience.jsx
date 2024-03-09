import ExperienceCard from '../components/ExperienceCard';
import {experience} from '../assets/data/tours';

const ExperienceSection = () => {
  const limitedExperiences = experience.slice(0, 8); 
  
  return (
    <div id='experience' className="container mx-auto padding-x">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-12 text-center">Discover Nature Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        {limitedExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
