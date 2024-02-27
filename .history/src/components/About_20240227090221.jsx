import AboutService from './AboutService'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import about from '../assests/about.png'

function About() {
  return (
    <div className='relative '>
      <div className='flex'>
        <img src={about} className='w-[50%]' />
        <h1 className='text-6xl font-semibold text-[#6C63FF] absolute top-[15%] right-[50%]'>About Us</h1>
        <div>
          <p className='absolute top-[35%] w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur! Illum consectetur dolores culpa sit tempora, inventore veniam obcaecati ab, maiores, rerum deleniti! Laudantium nostrum quas eveniet ipsa rem ad.</p>
          
        </div>
      </div>
    </div>
  )
}

export default About