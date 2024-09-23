"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/useInView'


const Contact = () => {
  return (
    <section
    id='contact'
    >
        <SectionHeading>
            {"Contact Me"}
        </SectionHeading>
        <p className='text-gray-700 -mt-6 dark:bg-transparent dark:text-slate-400'>
            {"Feel free to contact me directly through this form"}
        </p>

        <form className='mt-10 flex flex-col dark:text-black'>
            <input
             className='h-14 px-4 rounded-lg border-black dark:bg-white  dark:text-gray-950'
             name='senderEmail'
             type='email'
             required
             maxLength={500}
             placeholder={"Your email"}
            />

            <textarea
             className='h-52 px-2 py-2 text-sm my-3 rounded-lg resize-none border-black dark:bg-white  dark:text-gray-950'
             name='message'
             placeholder={
                "message...."
             }
             required
             maxLength={5000}
            />
        </form>

    </section>
  )
}

export default Contact