"use client"

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/useInView'
import SubmitBtn from './submit-btn'
import { Fade } from 'react-awesome-reveal'
import { useFormik } from "formik"
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface FormValues{
  email: string;
  message: string;
}

const Contact: React.FC = () => {
    const { ref }=useSectionInView("#contact");
    const [pending, setPending] = useState(false); 
      
    const validationSchema = Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .matches(/.+@.+\..+/, 'Email must contain "@" and a domain') 
        .required('Email is required'), 
      message: Yup.string(),
    });
  
    const formik = useFormik<FormValues>({
      initialValues: {
        email: '',
        message: '',
      },
      validationSchema,
      onSubmit: async (values: FormValues) => {

        setPending(true); 
        const res = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        setPending(false); 
  
        if (res.ok) {
          toast.success("Your message has been sent!"); 
          formik.resetForm();
        } else {
          toast.error("Failed to send your message.");
        }
      },
    });

    
  return (
    <motion.section
    id='contact'
     ref={ref}
    >
        <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        hideProgressBar 
        closeOnClick 
        pauseOnHover 
        draggable 
        theme="light" 
      />
         <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
         <SectionHeading>
            {"Contact Me"}
        </SectionHeading>
         </Fade>
          
         <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
        <p className='text-gray-700 -mt-6 dark:bg-transparent dark:text-slate-400'>
            {"Feel free to contact me directly through this form"}
        </p>
        </Fade>

         <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>

        <form className='mt-10 flex flex-col dark:text-black' onSubmit={formik.handleSubmit}>
            <input
             className='h-14 px-4 rounded-lg border-black dark:bg-white/10 dark:text-white/80'
             name='email'
             type='email'
             value={formik.values.email}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             required
             maxLength={500}
             placeholder={"Your email"}
            />
          
            <textarea
             className='h-52 p-4 text-sm my-3 rounded-lg resize-none border-black dark:bg-white/10 dark:text-white/80'
             name='message'
             placeholder={
                "message...."
             }
             value={formik.values.message}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             required
             maxLength={5000}
            />

            <SubmitBtn text={"Submit"} pending={pending}/>
        </form>
         
        </Fade>  
    </motion.section>
  )
}

export default Contact