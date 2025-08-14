"use client"

import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/useInView'
import SubmitBtn from './submit-btn'
import { Fade } from 'react-awesome-reveal'
import { toast, Toaster } from 'sonner'
import { useActionState } from 'react'



type FormState = {
  error?: string;
  success?: boolean;
  errors?: {
    email?: string;
    message?: string;
  };
} | null;

async function sendEmail(state: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const errors: { email?: string; message?: string } = {};
  
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/.+@.+\..+/.test(email)) {
    errors.email = 'Email must contain "@" and a domain';
  } 

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    })

    if (!res.ok) throw new Error('Failed to send email')
    
    toast.success("Your message has been sent!")
    return { success: true }
  } catch (error) {
    console.error('Submission error:', error);
    toast.error("Failed to send your message.")
    return { error: 'Failed to send message' } 
  }
}


const Contact = () => {
  const { ref } = useSectionInView("#contact")
  const [state, formAction, pending] = useActionState<FormState, FormData>(sendEmail, null)

  return (
    <motion.section id='contact' ref={ref}>
      <Toaster duration={3000} richColors />

      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce>
        <SectionHeading>Contact Me</SectionHeading>
      </Fade>
      
      <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce>
        <p className='text-gray-700 -mt-6 dark:bg-transparent dark:text-slate-400'>
          Feel free to contact me directly through this form
        </p>
      </Fade>

      <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce>
        <form className='mt-10 flex flex-col dark:text-black' action={formAction}>
          <input
            className={`h-14 px-4 rounded-lg border-black dark:bg-white/10 dark:text-white/80 ${
              state?.errors?.email ? 'border-red-500' : ''
            }`}
            name='email'
            type='email'
            required
            maxLength={50}
            placeholder="Your email"
          />
          {state?.errors?.email && (
            <p className="text-red-700 text-xs ms-2 mt-2">{state.errors.email}</p>
          )}
          
          <textarea
            className={`h-52 p-4 text-sm my-3 rounded-lg resize-none border-black dark:bg-white/10 dark:text-white/80 ${
              state?.errors?.message ? 'border-red-500' : ''
            }`}
            name='message'
            placeholder="Your message..."
            required
            maxLength={5000}
          />
          {state?.errors?.message && (
            <p className="text-red-700 ms-2 text-xs mt-2">{state.errors.message}</p>
          )}

          <SubmitBtn text="Submit" pending={pending} />
        </form>
      </Fade>  
    </motion.section>
  )
}

export default Contact