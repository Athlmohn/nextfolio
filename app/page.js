import React from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import About from './Components/About'
import Skills from './Components/Skills'

function page() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
    </div>
  )
}

export default page