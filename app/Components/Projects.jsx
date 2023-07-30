import React from 'react'
import EdutechImg from '../../public/Projects/Educational Website.png'
import ChatImg from '../../public/Projects/ChatApp.png'
import WeatherImg from '../../public/Projects/WeatherApp.png'
import FoodImg from '../../public/Projects/FoodVio.png'
import ProjectList from './ProjectList'
function Projects() {
  return (
    <div id='project' className='w-full p-4 py-4'>
        <div className='max-w-[1240px] mx-auto'>
        <h1 className="uppercase tracking-widest text-xl text-[#A020F0] md:text-2xl font-bold mb-4">Projects</h1>
        <div className='grid md:grid-cols-2 gap-8 py-6'>
            <ProjectList title='Educational Website' Img={EdutechImg} Url='https://athlmohn.github.io/codesense_website' build='React Js'/>
            <ProjectList title='Chat App' Img={ChatImg} Url='https://tweet-messenger.netlify.app' build='React Js'/>
            <ProjectList title='Restaurant App' Img={FoodImg} Url='https://athlmohn.github.io/FoodVio_Restaurant' build='React Js'/>
            <ProjectList title='Weather App' Img={WeatherImg} Url='https://skypilot.vercel.app' build='Next Js'/>
        </div>
        </div>
    </div>
  )
}

export default Projects