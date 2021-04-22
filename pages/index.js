import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
    <Header />
    <div className='flex flex-col justify-center mt-60'>
    <h1 className='text-6xl  justify-center flex font-semibold text-red-500'>Hello World</h1>
    <p className='text-3xl text-center leading-10 mt-20 text-blue-500 font-semibold'>Click on Feed to catch the latest news.</p>
    </div>
    </>
  )
}
