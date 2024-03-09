import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-16">
        <div className="flex flex-col items-start">
          <img src={logo} alt="logo" className="w-52 h-16 mb-4 " />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem soluta eius neque hic omnis odit doloremque magni aliquam, quo alias a voluptatum nostrum iste natus nihil iure debitis deserunt
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-4">
            <ul className="text-center">
            <h1 className='font-bold text-xl leading-10'>Discover</h1>
              <li><a href="#" className="hover:text-orange-400 transition duration-300">About</a></li>
              <li><a href="#" className="hover:text-orange-400 transition duration-300">Destinations</a></li>
              <li><a href="#" className="hover:text-orange-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="text-center">
            <h1 className='font-bold text-xl leading-10'>Links</h1>
              <li><a href="#" className="hover:text-orange-400 transition duration-300">Experience</a></li>
              <li><a href="#" className="hover:text-orange-400 transition duration-300">Packages</a></li>
              <li><a href="#" className="hover:text-orange-400 transition duration-300">Testimonials</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="text-center">
            <h1 className='font-bold text-xl leading-10'>Contact</h1>
              <li>Uttar Pradesh, India</li>
              <li>travelx@gmail.com</li>
              <li>+91-123-456-789</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;