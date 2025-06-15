import { useState } from 'react'
import TablaCarrera from '../pages/carrera/components/TablaCarrera'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

function App() {
  return (
    <>
      <div className="w-full inset-0 -z-10 h-auto bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Header/>
        <div className='w-full md:w-3/4 m-auto font-sans'>
          <TablaCarrera />
        </div>
        <Footer/>
      </div >
    </>
  )
}

export default App
