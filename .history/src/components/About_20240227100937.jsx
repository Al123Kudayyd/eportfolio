import AboutService from './AboutService'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import about from '../assests/about.png'
import { FaInstagram, FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <div className='relative '>
      <div className='lg:flex'>
        <img src={about} className='w-[100%] lg:w-[50%]' />
        <h1 className='text-3xl lg:text-6xl font-semibold text-[#6C63FF] absolute top-[15%] right-[2%] lg:top-[15%] lg:right-[50%]'>About Us</h1>
        <div className='flex flex-col justify-center'>
          <p className='absolute lg:top-[35%] lg:w-1/2 text-left p-6 lg:p- text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          </p>
          <div className='absolute bottom-0 flex justify-center items-center space-x-3 left-[50%] text-3xl'>
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About