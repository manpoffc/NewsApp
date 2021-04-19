import Head from 'next/head'

import Header from '../components/Header'

export default function Home() {
  return (
    <>
    <Header />
    <h1 className='text-6xl mt-20 justify-center flex font-semibold text-red-500'>Hello World</h1>
    </>
  )
}
