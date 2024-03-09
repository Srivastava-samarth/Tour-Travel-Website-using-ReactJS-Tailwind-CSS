import headerLogo from '../assets/images/logo.png'
// import hamburger from '../assets/images/hamburger.svg'
import { navLinks } from "../assets/data/tours"

const Navbar = () => {
  return (
    <header className='padding-x py-8 z-10 absolute w-full bg-white '>
    <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo} alt='Logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden text-black font-semibold'>
            {navLinks.map((item) =>(
                <li key={item.label}>
                    <a href={item.href} className='font-monsterrat leading-normal text-lg'>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal bg-orange-300 text-black px-5 py-2 rounded-full font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Book Now</a>
        </div>
    </nav>
   </header>
  )
}

export default Navbar