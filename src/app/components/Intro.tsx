import Image from 'next/image'
import Link from 'next/link'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubSquare} from "react-icons/fa"
import {Mail} from "lucide-react"
import {motion} from "framer-motion"


const Intro = () => {
  return (
    <section className='mb-28 max-w-[75rem] text-center sm:mb-0'
     id='home'
    >
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <div>
                    <Image
                     src='/boy.png'
                     alt='profile-img'
                     width="480"
                     height="480"
                     quality={100}
                     priority={true}
                     className='rounded-full shadow-xl object-cover'
                    />
                </div>
                <span className='text-6xl absolute bottom-8 right-12'>
                      👋
                    </span>  
            </div>
        </div>
        <h1 className='mb-10 mt-4 px-4 text-2xl sm:text-4xl'>
          <span className='font-medium !leading-[1.5]'>Grow your bussiness with a new website</span>{" "}
          <p className='text-[14px]'>Frontend is full-service creative studio ,creating besautiful digital experiences and products.</p>
        </h1>

        <div className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'>
          <Link href="#" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
              outline-none focus:scale-110 hover:scale-110 hover:bg-gra-950 dark:bg-white/10 active:scale-105 transition'>
            Connect <Mail color={`#9ca3af`}/>
          </Link>
          <a className='bg-gray-900 p-4 text-white flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
             transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60'
             href='#'
             target='_blank'
             >
            <BsLinkedin />
          </a>

          <a className='bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
             transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60'
             href='#'
             target='_blank'
             >
            <FaGithubSquare />
          </a>
        </div>
    </section>
  )
}

export default Intro