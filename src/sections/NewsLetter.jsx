import male_tourist from '../assets/images/experience.png';

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle subscription here
    alert("Subscribed successfully!");
  };

  return (
    <div id='contact-us' className="container mx-auto padding-y flex flex-col sm:flex-row items-center padding-x bg-blue-300 h-full">
      <div className="mr-0 sm:mr-4 mb-4 sm:mb-0 w-full sm:w-[60%]">
        <h2 className="text-4xl font-semibold mb-4">Subscribe to get useful <br/> traveling information</h2>
        <form onSubmit={handleSubmit} className="flex items-center w-full mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 py-2 px-4 border border-gray-300 rounded-md mr-2"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-600 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis, facilis blanditiis inventore eaque aliquam atque reprehenderit cupiditate vel omnis itaque consequatur eum dignissimos voluptates expedita possimus autem sed corporis. Commodi voluptate fuga reiciendis<br/>
          debitis cupiditate odio saepe? Minus mollitia dolorum pariatur perferendis rem quibusdam. Laudantium, unde! Magni doloribus eius dolores ipsa. Mollitia quibusdam minima maiores dolore tempore, quas inventore.
        </p>
      </div>
      <div className="mt-8 flex items-center w-full sm:w-[30%] ">
        <img src={male_tourist} alt="Newsletter" className="w-full rounded-lg h-full" />
      </div>
    </div>
  );
};

export default Newsletter;
