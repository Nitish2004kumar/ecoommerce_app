import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa repellendus accusantium. Beatae excepturi debitis autem consequatur nisi, explicabo aut temporibus quia fuga maxime omnis, neque sunt vel eum quo.</p>
        <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 outline-none'>
            <input className='text-sm text-gray-800 w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE </button>
        </form>

    </div>
  )
}

export default NewsLetterBox