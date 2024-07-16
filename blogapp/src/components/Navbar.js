"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <main className=" fixed top-0 left-0 w-full shadow-md  bg-slate-100 m-auto">
      <div className="w-full m-auto lg:[1200px] h-[64px] flex justify-between items-center">

        <div className="mx-24">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
            /></div>
        <div className="hidden lg:block">
        <ul className="flex gap-6">
          <li>
              <Link href="page.js">Home</Link>
          </li>

          <li> 
              <Link href="/posts/first-post/">Blog</Link>
          </li>

        <li>
           
            <Link href="https://nextjs.org/">Contact</Link>
       </li>
          </ul>
        </div>


        <div className="hidden lg:block mx-24">
  
  <label class="relative flex imens-center"> 
   <input class="placeholder:italic placeholder:text-slate-400 block bg-[#D1D5DB] w-full border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Search" type="text" name="search"/> 
  <div className="absolute pt-2 pl-40"> 
  < IoMdSearch />
  </div>
 </label>
  
        </div>
        
       <div className="lg:hidden"><IoIosMenu /></div>

      </div>


    </main>

    // min-h-screen 	min-height: 100vh
  );
}
