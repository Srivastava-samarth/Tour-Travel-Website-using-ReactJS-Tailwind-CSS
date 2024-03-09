import img1 from '../assets/images/ava-1.jpg'
import img2 from '../assets/images/ava-2.jpg'
import img3 from '../assets/images/ava-3.jpg'

const Testimonial = () => {
  const testimonials = [
    {
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam repellendus tempora sunt, accusantium commodi, in doloribus nemo consequuntur a, odio eaque totam? Eveniet cum est repellat veritatis. Ad odit, corporis voluptates optio, esse repellat, incidunt asperiores deleniti magnam rem non sunt labore cum obcaecati? Molestiae magnam, consequuntur deleniti possimus labore soluta in ipsam laudantium. Mollitia, saepe. Eius exercitationem ad porro",
      photo: img1,
      name: "John Doe",
      destination: "Paris, France"
    },
    {
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam repellendus tempora sunt, accusantium commodi, in doloribus nemo consequuntur a, odio eaque totam? Eveniet cum est repellat veritatis. Ad odit, corporis voluptates optio, esse repellat, incidunt asperiores deleniti magnam rem non sunt labore cum obcaecati? Molestiae magnam, consequuntur deleniti possimus labore soluta in ipsam laudantium. Mollitia, saepe. Eius exercitationem ad porro",
        photo: img2,
      name: "Jane Smith",
      destination: "New York, USA"
    },
    {
        review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam repellendus tempora sunt, accusantium commodi, in doloribus nemo consequuntur a, odio eaque totam? Eveniet cum est repellat veritatis. Ad odit, corporis voluptates optio, esse repellat, incidunt asperiores deleniti magnam rem non sunt labore cum obcaecati? Molestiae magnam, consequuntur deleniti possimus labore soluta in ipsam laudantium. Mollitia, saepe. Eius exercitationem ad porro",
        photo: img3,
      name: "Michael Johnson",
      destination: "Sydney, Australia"
    },
  ];

  return (
    <div className="container py-[-20px]">
    <h2 className="text-4xl font-semibold text-center padding-y">Customer Testimonials</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 padding-x">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-slate-100 rounded-lg shadow-md p-4 flex flex-col items-center transition duration-300 justify-between text-center lg:hover:translate-y-[-20px] lg:hover:border-orange-400 lg:hover:border-4">
          <p className="font-semibold mb-5 leading-relaxed">{testimonial.review}</p>
          <div className="flex flex-col items-center justify-center mt-3">
            <img src={testimonial.photo} alt="User" className="rounded-full h-12 w-12 mb-2" />
            <div>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs ">{testimonial.destination}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Testimonial;

