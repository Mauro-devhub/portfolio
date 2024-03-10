'use client';

import Image from "next/image";
import React from "react";

import { FaGitAlt, FaLink, FaReact } from "react-icons/fa6";
import { IoLogoAngular } from "react-icons/io5";
import { SiCss3, SiHtml5, SiIonic, SiJavascript, SiNestjs, SiNextdotjs, SiRedux, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Input } from "./components/Input";
import { Header } from "./components/Header";
import { BiSolidMobileVibration } from "react-icons/bi";
import { PiDeviceTabletFill } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import Link from "next/link";

export default function PageHome() {

  const listStacksTecnologies: React.ReactNode[] = [
    <FaGitAlt color="#F05032" size={25}/>,
    <SiNextdotjs size={25}/>,
    <IoLogoAngular color="#DD0031" size={25}/>,
    <FaReact color="#61DAFB" size={25}/>,
    <SiIonic color="#3880ff" size={25}/>,
    <SiRedux color="#764ABC" size={25}/>,
    <SiJavascript color="#F7DF1E" size={25}/>,
    <SiTypescript color="#007ACC" size={25}/>,
    <SiHtml5 color="#E34F26" size={25}/>,
    <SiTailwindcss color="#1E40AF" size={25}/>,
    <SiCss3 color="#1572B6" size={25}/>,
    <SiSass color="#CC6699" size={25} />
  ]

  const inputValue = (a: any) => {
    console.log(a)
  }

  const sendEmail = () => {
    console.log('Email send')
  }

  return (
    <section className="h-full flex flex-col justify-center items-center gap-[25px]">
      <Header />
      <div id="about_me" className="flex items-center py-[30px] gap-[80px]">
        <div className="w-[50%]">
          <div className="h-[475px] rounded-[300px] overflow-hidden animate-[showElementTransitionLeftToRight_2s_1_forwards]">
            <Image
              className="rounded-[300px] object-cover h-[475px] overflow-hidden cursor-pointer"
              src='/mauricio.JPG'
              width={500}
              height={100}
              alt='Picture of the author'
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center gap-[20px] animate-[showElementTransitionRightToLeft_2s_1_forwards]">
          <h1 className="text-right text-[35px] font-bold pr-[85px]">FrontEnd Developer Jr</h1>
          <div>
            <hr />
            <p className="leading-7 font-semibold text-wrap text-left text-[18px]">
              I'm started in this world before go to the university, but I don't knew that code will like me a lot, 
              I'm apasionate of technologies to convert ideas on appWebs resilients and scalables with good practices 
              of code and more 3+ years experience, always focus on new technologies.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-left text-[25px] font-bold pr-[85px]">Tecnologies</h2>
            <hr />
            <div className="flex items-center justify-between">
              {listStacksTecnologies.map((icon, i) => {
                return <span key={i} className="cursor-pointer">{icon}</span>
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="skills" className="flex items-center">
        <div className="w-[50%]">
          <p className="leading-7 font-semibold text-wrap text-left text-[18px]">
            I have skills on handle and creation of apps give an interface easy and comprenssible.
            The formularies interactives give then confidence on union with interface friendly and easy, always puting users how first intance, 
            showing the status of app while are doing process on app, while more easy is the app, more users will come, but always keeping the logic of bussines 
            to an app scalables and resilient.
          </p>
        </div>
        <div className="w-[50%] flex flex-col items-center pl-[60px]">
          <h1 className="text-[45px] font-bold tracking-[10px] uppercase">skills</h1>
          <div className="h-[60px] w-[300px] flex justify-between items-center">
            <BiSolidMobileVibration className="animate-[circle_5s_ease-in-out_infinite]" size={30} />
            <PiDeviceTabletFill className="animate-[circle_5s_ease-in-out_infinite]" size={35}/>
            <MdWeb className="animate-[circle_5s_ease-in-out_infinite]" size={40} />
          </div>
        </div>
      </div>

      <div className="w-full text-center flex flex-col justify-center gap-[25px]">
        <h1 className="text-[45px] font-bold tracking-[10px] uppercase">projects</h1>

        <section className="flex justify-center items-center">
          <div className="w-[60%] flex flex-col gap-[10px]">
            <div className="flex gap-[20px]">
              <Image
                className="rounded-[10px] cursor-pointer"
                objectFit="contain"
                alt='desktop-image'
                src='/desktop-groups.png'
                width={400}
                height={400}/>

              <Image
                className="rounded-[10px] cursor-pointer"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-groups.png'
                width={150}
                height={100}/>
            </div>

            <div className="flex gap-[20px]">
              <Image
                className="rounded-[10px] cursor-pointer"
                objectFit="contain"
                alt='desktop-image'
                src='/desktop-predictions.png'
                width={400}
                height={400}/>

              <Image
                className="rounded-[10px] cursor-pointer"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-predictions.png'
                width={150}
                height={100}/>
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-[20px]">
            <div className="flex justify-center items-center">
              <h1 className="text-center text-[25px] font-bold pr-[10px]">Oscar's Pool</h1>
              <Link href="https://oscars2024.enelrodaje.com/">
                <FaLink className="hover:text-blue-500" cursor='pointer' size={20} />
              </Link>
            </div>
            <p className="leading-7 font-semibold text-wrap text-left text-[18px]">
              This is an app of predictions to oscar's edition 2024, there you will see and selecte the actors,
              directors, best movies by categories and more, create groups, add friends by emails (@gmail) 
              and be the member of your group with more points and predictions corrects test your lucky see you there
            </p>
          </div>
        </section>
      </div>

      <div id="contact_me" className="w-full flex items-center">
        <div className="w-[50%] items-start">
          <h1 className="text-[45px] font-bold tracking-[10px] uppercase">contact me</h1>
        </div>
        <div className="w-[50%] flex flex-col items-end">
          <Input textInputValue={inputValue} actionFn={sendEmail} />
        </div>
      </div>
    </section>
  )
}