import Navbar from "./components/Navbar"
import About from "./sections/About"
import Destinations from "./sections/Destinations"
import ExperienceSection from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Newsletter from "./sections/NewsLetter"
import Packages from "./sections/Packages"
import Testimonial from "./sections/Testimonial"

const App = () => {
  return (
    <>
      <section className=" relative">
        <Navbar/>
      </section>
      <section className=" sm:mb-[-80px]">
        <Hero/>
      </section>
      <section>
        <About/>
      </section>
      <section>
      <Destinations/>
      </section>
      <section>
        <Packages/>
      </section>
      <section className="padding-y">
        <ExperienceSection/>
      </section>
      <section className="padding-y">
        <Testimonial/>
      </section>
      <section className=" pt-28">
        <Newsletter/>
      </section>
      <section >
        <Footer className='padding-x padding-y'/>
      </section>
      <div className="text-center text-sm mt-4 px-4 lg:px-0"> {/* Added padding adjustment for larger screens */}
  <p>&copy; {new Date().getFullYear()} Travel X.<br/> All rights reserved.</p>
  <p className="mt-2 lg:mt-0">Designed and developed with ❤️ by Samarth</p> {/* Added margin adjustment for larger screens */}
</div>

    </>
  )
}

export default App