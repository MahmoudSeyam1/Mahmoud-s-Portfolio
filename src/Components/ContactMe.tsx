import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
    };

    function ContactMe() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );
        
        alert('Message sent successfully!');
        window.location.href = '/'; // Redirect or keep as is
        } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className='h-[900px] relative flex overflow-hidden flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.{" "}
            <span className='underline decoration-[#dc2f02]/50'>Let&apos;s Talk.</span>
            </h4>

            <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#eb5e28] h-7 w-7 animate-bounce' />
                <p className='text-2xl'><span className='bg-[#eb5e28]/80 rounded-lg p-1 text-white font-semibold'>+20</span> 01017395057</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#eb5e28] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>mahmoudseyam912@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#eb5e28] h-7 w-7 animate-pulse' />
                <p className='text-2xl'>Cairo - Egypt</p>
            </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                <input {...register('email')} placeholder='E-mail' className='contactInput' type="email" required />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
            
            <button 
                type='submit' 
                disabled={isSubmitting}
                className='bg-[#eb5e28] py-5 px-10 rounded-md text-white font-bold text-lg hover:animate-pulse disabled:opacity-50'
            >
                {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            </form>
        </div>
        </div>
    );
}

export default ContactMe;