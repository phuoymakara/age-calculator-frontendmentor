'use client'

import { useRouter } from "next/navigation";

interface ISuccessProps{
  email?: string;
}
export function SuccessState({email}: ISuccessProps){
  const router = useRouter()
  return(
    <>
      <form action="" className="w-[50vh] text-left p-6 rounded-2xl bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="64" 
        height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
        <h2 className="font-extrabold text-[30px] my-2">Thanks for subcribing!</h2>
        <p className="my-3">
          Lorem, ipsum dolor sit amet 
            {email && <strong className="mx-1">{email}</strong>}
          expedita perspiciatis modi et  consequatur corrupti reiciendis voluptas!</p>
        <button onClick={()=> router.back()} className="w-full py-3 text-white rounded-lg bg-submit">Dismiss message</button>
      </form>
    </>
  )
}