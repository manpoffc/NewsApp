import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useRouter } from 'next/router';
const Header = () => {
    const router= useRouter();
    return (
        <div className='flex justify-center  items-center'>
            <div className='flex w-1/2 justify-center space-x-24 p-5 text-xl font-medium text-gray-800  '>
            <div className=' cursor-pointer' onClick={() => router.push('/')}>Home</div>
            <div className=' cursor-pointer' onClick={() => router.push('/feed')}>Feed</div>
            <div className=' cursor-pointer text-blue-500 ' onClick={() => window.location.href='https://twitter.com/pocoman0'}>Twitter</div>
            
            </div>
        </div>
    )
}

export default Header
