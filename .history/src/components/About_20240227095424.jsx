import AboutService from './AboutService'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import about from '../assests/about.png'

function About() {
  return (
    <div className='relative '>
      <div className='lg:flex'>
        <img src={about} className='w-[100%] lg:w-[50%]' />
        <h1 className='text-3xl lg:text-6xl font-semibold text-[#6C63FF] absolute left-[50%] lg:left-[50] top-[15%] lg:right-[50%]'>About Us</h1>
        <div>
          <p className='absolute lg:top-[45%] lg:w-1/2 text-left p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default About