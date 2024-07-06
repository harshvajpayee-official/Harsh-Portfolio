"use client"
import React, { useState } from 'react'
import Container from './Container'
import Link from 'next/link'

function Header() {
  const [activeindex, setactiveindex] = useState(1)
  function activenav(index:any){

setactiveindex(index)
  }
  return (
    <header className="fixed left-0  w-full z-50 bg-transparent backdrop-blur-[2px] ">
   <Container>

    <div className="container mx-auto px-3 md:px-5 xl:px-0">
      <div className="flex  justify-between items-center py-3">
        <a href="/">
          <div className="flex items-center">
            {/* <img
              alt="down arrow"
              loading="lazy"
              width="25"
              height="37"
              decoding="async"
              data-nimg="1"
              
              src="/assets/s-main.svg"
            /> */}
            <div className="pl-1.5">
              <div className="text-lg font-semibold leading-5 text-white">
               PORTFOLIO
              </div>
             
            </div>
          </div>
        </a>
        <div className='hidden sm:flex'>
          <nav className=" bg-[#222] p-1 shadow-[1px_1px_7px_rgba(0,0,0,.16)] rounded-full">
            <ul className="flex items-center">
              <li className={`font-medium text-base px-6 py-1 rounded-full ease-linear delay-75    ${activeindex==1 ?"bg-white animate-pulse" : "text-white"}`} >
                <Link href="/" onClick={()=>activenav(1)}>Home</Link>
              </li>
              <li className={`font-medium text-base px-6 py-1 rounded-full ease-linear delay-75 ${activeindex==2 ?"bg-white animate-pulse" : "text-white"}`} >
                <Link href="#projects" onClick={()=>activenav(2)}>Projects</Link>
              </li>
              <li className={`font-medium text-base px-6 py-1 rounded-full ease-linear delay-75 ${activeindex==3 ?"bg-white animate-pulse" : "text-white"}`} >
                <Link href="#skills" onClick={()=>activenav(3)}>Skills</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-black rounded-2xl shadow-sm shadow-white hover:shadow-md hover:shadow-white">
          <Link
            target="_blank"
            className="flex items-center py-1.5 px-3 xl:px-5  gap-1"
            href="/assests/resume/nitin-resume.pdf"
          >
            {/* <img alt="down arrow" loading="lazy" width="36" height="32" decoding="async" data-nimg="1" style="color:transparent" src="/assets/document-white.svg"/> */}
            <div className="text-white text-base font-medium">Resume</div>
          </Link>
        </div>
      </div>
      <div className="py-3 sm:hidden ">
        
        <div className="pt-2">
          <nav className="bg-[#222] p-1 shadow-[1px_1px_7px_rgba(0,0,0,.16)] rounded-full">
            <ul className="flex items-center justify-between">
            <li className={`font-medium text-base px-6 py-1 rounded-full ease-linear delay-75 ${activeindex==11 ?"bg-white animate-pulse" : "text-white"}`} >
            <Link href="/" onClick={()=>activenav(11)}>Home</Link>
              </li>
              <li className={`font-medium text-base px-6 py-1 rounded-full ease-linear delay-75 ${activeindex==21 ?"bg-white animate-pulse" : "text-white"}`} >
              <Link href="#projects" onClick={()=>activenav(21)}>Projects</Link>
              </li>
              <li className={`font-medium text-base px-6 py-1 rounded-full ease-linear delay-75 ${activeindex==31 ?"bg-white animate-pulse" : "text-white"}`} >
                <Link href="#skills" onClick={()=>activenav(31)}>Skills</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
   </Container>
  </header>
  )
}

export default Header
