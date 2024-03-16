'use client';

import Image from "next/image";
import { FaGitAlt, FaGithub, FaInstagram, FaLink, FaLinkedinIn, FaReact, FaStar } from "react-icons/fa6";
import { IoLogoAngular, IoPersonSharp } from "react-icons/io5";
import { SiCss3, SiHtml5, SiIonic, SiJavascript, SiNextdotjs, SiRedux, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiSolidMobileVibration } from "react-icons/bi";
import { PiDeviceTabletFill } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { IconAnimation } from "./components/Icon-animation";
import { VscExtensions } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import Link from "next/link";

import { Message } from "./components/Message";
import { Header } from "./components/Header";
import { LINK_URLS } from "./constans/url.constants";
import { useState } from "react";

export default function PageHome() {

  const [scrollPosition, setScrollPosition] = useState<number>();
  const [heightScreen, setHeightScreen] = useState<number>();
  const [widthScreen, setWidthScreen] = useState<number>();

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    setScrollPosition(scrollPosition);
  })

  window.addEventListener('resize', function() {
    const screenWidth = window.screen.width;
    setWidthScreen(screenWidth);
  })

  const getValueMessage = (objMessage: any) => {
    console.log(objMessage);
  }

  const peoples: {fullName: string, organization: string, comment: string}[] = [
    {
      fullName: 'Ricardo Caicedo',
      organization: 'CEO Guilt\'s',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minima rerum eveniet aliquid quae enim, quos ex dolores, blanditiis, tempore incidunt quidem reiciendis. Ipsum saepe quia sit tempora. Qui, rerum!'
    },
    {
      fullName: 'Rachell Sánchez',
      organization: 'SCRUM MASTER',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minima rerum eveniet aliquid quae enim, quos ex dolores, blanditiis, tempore incidunt quidem reiciendis. Ipsum saepe quia sit tempora. Qui, rerum!'
    },
    {
      fullName: 'Ricardo Caicedo',
      organization: 'CEO Guilt\'s',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minima rerum eveniet aliquid quae enim, quos ex dolores, blanditiis, tempore incidunt quidem reiciendis. Ipsum saepe quia sit tempora. Qui, rerum!'
    },
    {
      fullName: 'Rachell Sánchez',
      organization: 'SCRUM MASTER',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam minima rerum eveniet aliquid quae enim, quos ex dolores, blanditiis, tempore incidunt quidem reiciendis. Ipsum saepe quia sit tempora. Qui, rerum!'
    }
  ]

  const listStacksTecnologies: React.ReactNode[] = [
    <FaGitAlt key={0} color="#F05032" size={25}/>,
    <SiNextdotjs key={0} size={25}/>,
    <IoLogoAngular key={0} color="#DD0031" size={25}/>,
    <FaReact key={0} color="#61DAFB" size={25}/>,
    <SiIonic key={0} color="#3880ff" size={25}/>,
    <SiRedux key={0} color="#764ABC" size={25}/>,
    <SiJavascript key={0} color="#F7DF1E" size={25}/>,
    <SiTypescript key={0} color="#007ACC" size={25}/>,
    <SiHtml5 key={0} color="#E34F26" size={25}/>,
    <SiTailwindcss key={0} color="#1E40AF" size={25}/>,
    <SiCss3 key={0} color="#1572B6" size={25}/>,
    <SiSass key={0} color="#CC6699" size={25} />
  ]

  const openWindowUrl = (url: string) => {
    window.open(url, '_blank');
  }

  const peopleSay = (people: {fullName: string, organization: string, comment: string}): React.ReactNode => {
    return (
      <section className="bg-[#d1daddcb] rounded-[20px] h-[200px] w-[300px] flex flex-col justify-center p-[20px] gap-[10px] hover:shadow-[0_10px_20px_1px_rgba(0,0,0,0.3)] duration-[1s] cursor-pointer overflow-hidden animate-[showElementTransitionRightToLeft_2s_1_forwards]">
        <div className="flex items-center gap-[10px] text-[10px] text-left font-semibold">
          <Image
            className="rounded-[40px] border-[1px] border-[#1f224f] p-[3px] object-cover cursor-pointer"
            src='/mauricio.JPG'
            height={35}
            width={35}
            alt="user" />
          <div className="w-full flex flex-col justify-center">
            <span>{people.fullName}</span>
            <span className="flex items-center gap-[5px]">
              <span>{people.organization}</span>
              <FaStar className="mb-[3.5px]" color="yellow" size={15} />
            </span>
            <hr />
          </div>
          <TbMessage2
            color="#F5F5F5"
            size={40} />
        </div>
        <div className="overflow-scroll text-start leading-[15px] text-[12px]">
          <span className="font-semibold">
            {people.comment}
          </span>
        </div>
      </section>
    )
  }

  const optionsFloatMenu = (): React.ReactNode => {
    return (
      <section className="top-[390px] left-[25px] min-[1680px]:left-[200px] max-[1680px]:left-[100px] max-[1475px]:left-[50px] max-[1385px]:left-[20px] max-[640px]:left-[10px] bg-[#1f224f] h-[130px] w-[30px] rounded-[20px] fixed">
        <div className="h-full flex flex-col justify-between items-center py-[10px]">
          <FaGithub
            onClick={() => openWindowUrl(LINK_URLS.gitHubUrl)}
            className="text-[#c4c4c4] hover:text-[white]"
            cursor='pointer'
            size={15} />
          <hr className="bg-[white] rotate-[90deg] w-[20px]" />
          <FaLinkedinIn
            onClick={() => openWindowUrl(LINK_URLS.linkInUrl)}
            className="text-[#c4c4c4] hover:text-[white]"
            cursor='pointer'
            size={15}/>
          <hr className="bg-[white] rotate-[90deg] w-[20px]" />
          <FaInstagram
            onClick={() => openWindowUrl(LINK_URLS.instagramUrl)}
            className="text-[#c4c4c4] hover:text-[white]"
            cursor='pointer'
            size={15}/>
        </div>
      </section>
    )
  }

  const optionFloatMenuTemporally = (): React.ReactNode => {
    return (
      <section
        className="top-[220px] right-[25px] min-[1680px]:right-[200px] max-[1680px]:right-[100px] max-[1475px]:right-[50px] max-[1385px]:right-[20px] max-[640px]:right-[10px] rounded-[20px] h-[390px] w-[40px] fixed flex flex-col justify-center items-center gap-[20px]">
        <IconAnimation />
        <hr className="bg-[black] rotate-[90deg] w-[20px]" />
        <Link href="#about_me">
          <IoPersonSharp
            className="text-[#351e1e] hover:text-[#1f224f]"
            cursor='pointer'
            size={25} />
        </Link>
        <hr className="bg-[black] rotate-[90deg] w-[20px]" />
        <Link href="#skills">
          <VscExtensions
            className="text-[#c4c4c4] hover:text-[#1f224f]"
            cursor='pointer'
            size={25} />
        </Link>
        <hr className="bg-[black] rotate-[90deg] w-[20px]" />
        <Link href="#projects">
          <GoProjectSymlink
            className="text-[#c4c4c4] hover:text-[#1f224f]"
            cursor='pointer'
            size={25} />
        </Link>
        <hr className="bg-[black] rotate-[90deg] w-[20px]" />
        <Link href="#contact_me">
          <GrContact
            className="text-[#c4c4c4] hover:text-[#1f224f]"
            cursor='pointer'
            size={25} />
        </Link>
      </section>
    )
  }

  const aboutMe = (): React.ReactNode => {
    return (
      <div id="about_me" className="flex 2xl:flex-nowrap max-[1024px]:flex-col items-center py-[30px] gap-[80px]">
        <div className="w-[50%] max-[1024px]:w-full">
          <div className="flex justify-center items-center max-[1024px]:flex max-[1024px]:justify-center rounded-[300px] overflow-hidden animate-[showElementTransitionLeftToRight_2s_1_forwards]">
            <Image
              className="2xl:h-[500px] 2xl:w-[500px] xl:h-[450px] xl:w-[450px] lg:h-[400px] lg:w-[400px] md:h-[400px] md:w-[400px] max-[768px]:h-[300px] max-[768px]:w-[300px] max-[640px]:h-[200px] max-[640px]:w-[200px] rounded-[300px] object-cover h-[475px] overflow-hidden cursor-pointer"
              src='/mauricio.JPG'
              width={500}
              height={100}
              alt='Picture of the author'
            />
          </div>
        </div>
        <div className="w-[50%] max-[1024px]:w-full flex flex-col justify-center gap-[20px] animate-[showElementTransitionRightToLeft_2s_1_forwards]">
          <h1 className="text-right max-[1024px]:text-center text-[30px] font-medium">FrontEnd Developer Jr</h1>
          <div>
            <hr />
            <p className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
              Im started in this world before go to the university, but I dont knew that code will like me a lot, 
              Im apasionate of technologies to convert ideas on appWebs resilients and scalables with good practices 
              of code and more 3+ years experience, always focus on new technologies.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-left text-[25px] font-bold pr-[85px]">Tecnologies</h2>
            <hr />
            <div className="flex flex-wrap gap-[10px] items-center justify-between">
              {listStacksTecnologies.map((icon, i) => {
                return <span key={i} className="cursor-pointer">{icon}</span>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const skills = (): React.ReactNode => {
    return (
      <div id="skills" className="flex 2xl:flex-nowrap max-[1024px]:flex-col-reverse items-center gap-[80px] max-[1280px]:gap-[45px]">
        <div className="w-[50%] max-[1024px]:w-full animate-[showElementTransitionRightToLeft_2s_1_forwards]">
          <p className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
            I have skills on handle and creation of apps give an interface easy and comprenssible.
            The formularies interactives give then confidence on union with interface friendly and easy, always puting users how first intance, 
            showing the status of app while are doing process on app, while more easy is the app, more users will come, but always keeping the logic of bussines 
            to an app scalables and resilient.
          </p>
        </div>
        <div className="w-[50%] max-[640px]:w-full flex flex-col justify-center items-center gap-[20px] animate-[showElementTransitionLeftToRight_2s_1_forwards]">
          <h1 className="text-center text-[30px] font-medium tracking-[10px] uppercase">skills</h1>
          <hr className="w-full" />
          <div className="h-[60px] w-full flex flex-wrap justify-around items-center">
            <BiSolidMobileVibration className="animate-[circle_5s_ease-in-out_infinite]" size={30} />
            <PiDeviceTabletFill className="animate-[circle_5s_ease-in-out_infinite]" size={35}/>
            <MdWeb className="animate-[circle_5s_ease-in-out_infinite]" size={40} />
          </div>
        </div>
      </div>
    )
  }

  const projects = (): React.ReactNode => {
    return (
      <div id="projects" className="w-full text-center flex flex-col justify-center gap-[25px]">
        <section className="mt-[50px] flex 2xl:flex-nowrap max-[1024px]:flex-col-reverse max-[1390px]:flex-col-reverse max-[1390px]:gap-[40px] items-center gap-[80px]">
          <div className="bg-[#d1daddcb] max-[465px]:p-[10px] rounded-[20px] p-[20px] flex flex-col justify-center items-center gap-[10px] animate-[showElementTransitionRightToLeft_2s_1_forwards]">
            <div className="flex justify-center items-center gap-[20px] max-[695px]:hidden">
              <Image
                className="object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/spazzio-desktop.png'
                width={400}
                height={400}/>

              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-groups.jpg'
                width={100}
                height={100}/>
            </div>

            <div className="flex max-[1390px]:flex-row-reverse justify-center items-center gap-[20px] max-[695px]:hidden">
              <Image
                className="object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/desktop-predictions.png'
                width={400}
                height={400}/>

              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-predictions.png'
                width={100}
                height={100}/>
            </div>

            <div className="flex justify-center items-center gap-[20px] min-[695px]:hidden">
              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-predictions.png'
                width={100}
                height={100}/>

              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-groups.jpg'
                width={100}
                height={100}/>
            </div>

            <div className="flex flex-col justify-center items-center gap-[20px] min-[695px]:hidden">
              <Image
                className="max-[640px]:h-[170px] max-[640px]:w-[300px] object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/spazzio-desktop.png'
                width={400}
                height={400}/>

              <Image
                className="max-[640px]:h-[170px] max-[640px]:w-[300px] object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/desktop-predictions.png'
                width={400}
                height={400}/>
            </div>
          </div>
          <div className="w-[50%] max-[1024px]:w-full flex flex-col gap-[20px] animate-[showElementTransitionRightToLeft_2s_1_forwards]">
            <h1 className="text-center text-[30px] font-bold tracking-[10px] uppercase">projects</h1>
            <div className="flex flex-col items-center ">
              <div className="flex items-center">
                <h1 className="text-center text-[25px] font-bold pr-[10px]">Oscars <span className="text-[#d1ab5d]">Pool</span></h1>
                <FaLink onClick={() => openWindowUrl(LINK_URLS.oscarsPoolUrl)} className="hover:text-blue-500" cursor='pointer' size={20} />
              </div>
              <hr className="w-full" />
            </div>
            <p className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
              This is an app of predictions to oscars edition 2024, there you will see and select the actors,
              directors, best movies by categories and more, create groups, add friends by emails (@gmail) 
              and be the member of your group with more points and predictions corrects test your lucky see you there.
            </p>
          </div>
        </section>

        <section className="flex 2xl:flex-nowrap max-[1024px]:flex-col-reverse min-[1393px]:translate-y-[-90px] max-[1390px]:flex-col-reverse min-[1390px]:flex-row-reverse max-[1390px]:gap-[40px] items-center gap-[80px]">
          <div className="bg-[#d1daddcb] max-[465px]:p-[10px] rounded-[20px] p-[20px] flex flex-col justify-center items-center gap-[10px] animate-[showElementTransitionRightToLeft_2s_1_forwards]">
            <div className="flex justify-center items-center gap-[20px] max-[695px]:hidden">
              <Image
                className="object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/spazzio-desktop.png'
                width={400}
                height={400}/>

              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-groups.jpg'
                width={100}
                height={100}/>
            </div>

            <div className="flex max-[1390px]:flex-row-reverse justify-center items-center gap-[20px] max-[695px]:hidden">
              <Image
                className="object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/desktop-predictions.png'
                width={400}
                height={400}/>

              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-predictions.png'
                width={100}
                height={100}/>
            </div>

            <div className="flex justify-center items-center gap-[20px] min-[695px]:hidden">
              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-predictions.png'
                width={100}
                height={100}/>

              <Image
                className="rounded-[10px] cursor-pointer hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='mobile-image'
                src='/mobile-groups.jpg'
                width={100}
                height={100}/>
            </div>

            <div className="flex flex-col justify-center items-center gap-[20px] min-[695px]:hidden">
              <Image
                className="max-[640px]:h-[170px] max-[640px]:w-[300px] object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/spazzio-desktop.png'
                width={400}
                height={400}/>

              <Image
                className="max-[640px]:h-[170px] max-[640px]:w-[300px] object-center rounded-[10px] cursor-pointer hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
                objectFit="cover"
                alt='desktop-image'
                src='/desktop-predictions.png'
                width={400}
                height={400}/>
            </div>
          </div>
          <div className="w-[50%] max-[1024px]:w-full flex flex-col gap-[20px] 2xl:translate-y-[20px]">
            <div className="animate-[showElementTransitionLeftToRight_2s_1_forwards]">
              <div className="flex justify-center items-center">
                <h1 className="text-center text-[25px] font-bold pr-[10px]">Sp<span className="text-[#295A95]">a</span>zzio</h1>
                <FaLink onClick={() => openWindowUrl(LINK_URLS.spazzioUrl)} className="hover:text-blue-500" cursor='pointer' size={20} />
              </div>
              <hr className="mb-[20px]"/>
              <p className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
                Spazzio enhances residents experience by providing tools to efficiently reserve, report, and manage 
                the financial aspects of their condominium.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const peopleSayContent = (): React.ReactNode => {
    return (
      <section id="people_say" className="flex flex-col gap-[10px]">
        <h1 className="text-center text-[25px] font-bold pr-[10px]">People Say</h1>
        <hr />
        <div className="flex flex-wrap gap-[10px] justify-center">
          {peoples.map((people) => {
            return peopleSay(people);
          })}
        </div>
      </section>
    )
  }

  const contactMe = (): React.ReactNode => {
    return (
      <div id="contact_me" className="py-[20px] w-full flex justify-between items-center max-[1390px]:flex-col-reverse gap-[20px]">
        <div className="w-[800px] max-[1280px]:w-[450px] max-[640px]:w-[300px] bg-[#d1daddcb] flex justify-center p-[20px] max-[640px]:p-[10px] rounded-[20px]">
          <Message actionFn={getValueMessage} />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-center text-[30px] font-bold tracking-[10px] text-nowrap uppercase">contact me</h1>
          <div className="flex justify-center items-center">
            <ul className="list-disc ml-2 text-gray-light">
              <li className="leading-7 font-semibold text-nowrap text-[18px]">Send me a message</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="h-full xl:w-[75rem] lg:w-[60rem] sm:w-full max-[1024px]:px-[50px]">
      <Header />
      <main>
        {optionsFloatMenu()}
        {aboutMe()}
        {skills()}
        {projects()}
        {contactMe()}
        <section className="flex items-center justify-between">
          {/* {peopleSayContent()} */}
        </section>
        {Number(scrollPosition) > 98 || Number(widthScreen) < 640 ? optionFloatMenuTemporally() : <></>}
      </main>
    </section>
  )
}