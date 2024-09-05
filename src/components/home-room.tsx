'use client'

import Image from "next/image"
import { useState } from "react"

export function HomeRoom(){
  const [slide,setSlide] = useState(0)
  const [active,setActive] = useState(false)

  const images =[
    '/images/desktop-image-hero-1.jpg',
    '/images/desktop-image-hero-2.jpg',
    '/images/desktop-image-hero-3.jpg'
  ]
  const handleSlide = (type: 'prev' | 'next') => {
    if(type==='prev' ){
      if(slide === 1){
        setSlide(0)
      } else if(slide === 0){
        setSlide(2)
      }else{
        setSlide(slide-1) 
      }
    }else{
      if(slide===2)setSlide(0)
      else setSlide(slide+1)
    }
  }
  return(
    <>
      <main>
          <div className="w-full grid md:grid-cols-11 lg:grid-cols-11">
            <div className="relative col-span-6 h-[70vh]">
            <Image 
              src={`${images[slide]}`} 
              alt='ss' 
             fill 
              className="w-full h-full object-fill"
              />
              <header className="md:flex lg:flex hidden absolute left-10 top-8 text-white p-4  gap-x-4 cursor-pointer">
                <h2 className="text-[20px] font-bold">room</h2>
                <ul className="md:flex lg:flex hidden gap-x-8 p-1">
                  <li className="hover:border-b-2 hover:border-white">home</li>
                  <li className="hover:border-b-2 hover:border-white">shop</li>
                  <li className="hover:border-b-2 hover:border-white">about</li>
                  <li className="hover:border-b-2 hover:border-white">contact</li>
                </ul>
              </header>
              <header className={`md:hidden lg:hidden w-full flex  absolute left-0 top-0 text-white p-4  gap-x-4 cursor-pointer ${active?'bg-white': ''}`}>
                {!active && <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setActive(!active)} width="28" height="28" viewBox="0 0 24 24"><path fill="#FFF" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
                }
                {active && <svg width="28" height="28" onClick={()=>setActive(!active)} xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000000" fill-rule="evenodd" opacity=".201"/></svg>
                }
               { !active && <h2 className="text-[20px] font-bold ml-8">room</h2>}
                {active && <ul className="flex gap-x-8 p-1 text-black">
                  <li className="hover:border-b-2 hover:border-black">home</li>
                  <li className="hover:border-b-2 hover:border-black">shop</li>
                  <li className="hover:border-b-2 hover:border-black">about</li>
                  <li className="hover:border-b-2 hover:border-black">contact</li>
                </ul>}
              </header>
              <div className="md:hidden lg:hidden  bg-black absolute right-0 bottom-0 p-4 flex justify-between w-28">
                <svg onClick={()=>handleSlide('prev')} className="cursor-pointer" width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                <svg onClick={()=>handleSlide('next')} className="cursor-pointer" width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
              </div>
            </div>
            <div className="col-span-5 pl-0 grid grid-cols-1 gap-y-6 text-left">
              <div className="w-full p-16">
                <h2 className="text-[34px] font-extrabold">Discover innovative ways to decorate</h2>
                <p className="my-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quod amet officiis officia veritatis illo quaerat cumque rem. Laboriosam obcaecati neque laudantium voluptatibus at sunt praesentium temporibus libero itaque soluta?
                </p>
                <h3 className=" font-bold cursor-pointer flex gap-x-4 items-center">SHOP NOW 
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                </h3>
              </div>
              <div className="md:flex lg:flex bg-black p-4 hidden justify-between w-28">
                <svg onClick={()=>handleSlide('prev')} className="cursor-pointer" width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
                <svg onClick={()=>handleSlide('next')} className="cursor-pointer" width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1">
            <div>
              <Image 
              src={'/images/image-about-dark.jpg'} 
              alt='ss' 
              width={100}  
              height={80} 
              className="w-full object-cover"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-2 p-10">
              <h2 className="font-bold text-[20px]">A B O U T O U R FURNITURE</h2>
              <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis dignissimos rerum quos beatae, labore corrupti dolor fuga, eius provident mollitia, ut itaque odio. Optio illo vel eaque tempore unde! Sapiente corporis quas aperiam dolorum, neque facere eligendi vel exercitationem?</p>
            </div>
            <div>
              <Image 
              src={'/images/image-about-light.jpg'} 
              alt='ss' 
              width={120}  
              height={30} 
              className="w-full h-full object-cover"
              />
            </div>
          </div>
      </main>
    </>
  )
}