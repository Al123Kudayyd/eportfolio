import AboutService from './AboutService'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import about from '../assests/about.png'

function About() {
  return (
    <div className='relative '>
      <div>
        <img src={about} className='w-[50%]' />
        <div>
          <h1 className='text-5xl text-[#6C63FF] absolute top-[50%]'>About Us</h1>
        </div>
      </div>
    </div>
  )
}

export default About