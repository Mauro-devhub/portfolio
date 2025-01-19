'use client';

import Image from "next/image";
import { FaGitAlt, FaGithub, FaInstagram, FaLink, FaLinkedinIn, FaReact, FaStar } from "react-icons/fa6";
import { IoLogoAngular, IoPersonSharp } from "react-icons/io5";
import { SiCss3, SiHtml5, SiIonic, SiJavascript, SiNextdotjs, SiNgrx, SiRedux, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiBarChartAlt2, BiSolidMobileVibration } from "react-icons/bi";
import { PiDeviceTabletFill } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { IconAnimation } from "./components/Icon-animation";
import { VscExtensions } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import Link from "next/link";

import { MessageForm } from "./components/Message";
import { Header } from "./components/Header";
import { LINK_URLS } from "./constans/url.constants";
import React, { useContext, useEffect, useState } from "react";
import { EmailContext, EmailDto } from "./context/service-email.context";
import { CardProject } from "./components/CardProject";

export default function PageHome(): React.ReactNode {

  const [scrollPosition, setScrollPosition] = useState<number>();
  const [heightScreen, setHeightScreen] = useState<number>();
  const [widthScreen, setWidthScreen] = useState<number>();
  const emailContext = useContext(EmailContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsdone] = useState(false);

  const imgListSpazzio: string[] = ['/spazzio-desktop.png', '/spazzio-mobile.PNG', '/spazzio-area.png', '/spazzio-mobile-opts.PNG'];
  const imgListOscarsPool: string[] = ['/oscars-desktop.png', '/mobile-groups.jpg', '/desktop-predictions.png', '/mobile-predictions.png'];

  useEffect(() => {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
    })

    window.addEventListener('resize', function() {
      const screenWidth = window.screen.width;
      setWidthScreen(screenWidth);
    })
  }, [scrollPosition, widthScreen]);

  const getValueMessage = (objMessage: EmailDto | null): void => {
    if (objMessage !== null) {
      setIsLoading(true);

      emailContext.setEmail(objMessage)
        .then(() => {
          setIsdone(true);
          
          setTimeout(() => {
            setIsdone(false);
            setIsLoading(false);
          }, 800);
        })
        .catch(() => {
          setIsLoading(false);
          setIsdone(false);
        })
    }
  }

  const peoples: {fullName: string, imgUrl: string, userLink: string, organization: string, comment: string}[] = [
    {
      fullName: 'Ricardo Caicedo',
      imgUrl: '/ricardo.jpeg',
      userLink: '',
      organization: 'CEO Guilt\'s',
      comment: 'Their ability to address complex challenges with efficient solutions to improve our products by implementing clean and well-structured code development to optimize performance and anticipate problems before they become obstacles has been key in our products.'
    },
    {
      fullName: 'Rachell Sánchez',
      imgUrl: '/rachell.jpeg',
      userLink: 'https://www.linkedin.com/in/rachell-sanchez/',
      organization: 'SCRUM MASTER',
      comment: 'His ability to quickly adapt to changes and collaborate effectively with the team has been instrumental in the progress of our sprints, maintaining clear communication and providing innovative solutions to the challenges we face.'
    }
  ]

  const listStacksTecnologies: React.ReactNode[] = [
    <FaGitAlt key={0} color="#F05032" size={25}/>,
    <SiNextdotjs key={0} size={25}/>,
    <IoLogoAngular key={0} color="#DD0031" size={25}/>,
    <FaReact key={0} color="#61DAFB" size={25}/>,
    <SiIonic key={0} color="#3880ff" size={25}/>,
    <SiNgrx key={0} color="#9f1c9c" size={25}/>,
    <SiRedux key={0} color="#764ABC" size={25}/>,
    <SiJavascript key={0} color="#F7DF1E" size={25}/>,
    <SiTypescript key={0} color="#007ACC" size={25}/>,
    <SiHtml5 key={0} color="#E34F26" size={25}/>,
    <SiTailwindcss key={0} color="#1E40AF" size={25}/>,
    <SiCss3 key={0} color="#1572B6" size={25}/>,
    <SiSass key={0} color="#CC6699" size={25} />
  ]

  const experienceList: {nameCompany: string, position: string, details: React.ReactNode, linkCompany: string}[] = [
    {
      nameCompany: 'Guilts',
      position: 'Full Stack Developer',
      details: (<>My main role in this company is implement new views to the projects, increment code quality implementing strategies like principle SOLID replace old code with the objetive to increment performance and make test to the components using jasmine all those things with angular and I have used ionic to implement components UI. <br/><br/> I work implement APIRestFull with framework for backend Nest js, PostgreSql for database, and docker to create containers for databases in the serve and test aplications before send to production.</>),
      linkCompany: 'https://www.linkedin.com/company/guilts/'
    },
    {
      nameCompany: 'Flatiron Software co',
      position: 'Full Stack Developer',
      details: (<>My role here was refactoring old code and fixing bugs in the platform to increase performance, such as overwriting components and making them smaller, implementing atomic design, implementing the open-close principle and interface segregation principle on both the frontend and backend. <br/><br/> For me, a component can not exceed 500 lines of code because they all become more complex and bugs appear, I was implementing the strategy happy-code this is make your code the more easy possible to other developers can understand with easily the code of the project and establish a format how write code in project</>),
      linkCompany: 'https://www.linkedin.com/company/flatironsoftware/posts/?feedView=all'
    }
  ]

  const openWindowUrl = (url: string): void => {
    window.open(url, '_blank');
  }

  const peopleSay = (people: {fullName: string, imgUrl: string, userLink: string, organization: string, comment: string, key: number}): React.ReactNode => {
    return (
      <section key={people.key} className="bg-[#d1daddcb] rounded-[20px] h-[200px] w-[300px] flex flex-col p-[20px] gap-[10px] hover:shadow-[0_10px_20px_1px_rgba(0,0,0,0.3)] duration-[1s] overflow-hidden animate-showElementTransitionRightToLeft">
        <div className="flex items-center gap-[10px] text-[10px] text-left font-semibold">
          <Image
            onClick={() => openWindowUrl(people.userLink)}
            className="rounded-[40px] border-[1px] border-[#1f224f] p-[3px] object-cover cursor-pointer"
            src={people.imgUrl}
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
        <div className="text-start leading-[15px] text-[12px]">
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
        <Link href="#experience">
          <BiBarChartAlt2
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
      <div id="about_me" className="w-full flex 2xl:flex-nowrap max-[1024px]:flex-col items-center py-[30px] gap-[80px]">
        <div className="w-[100%] max-[1024px]:w-full flex items-center max-[1024px]:flex-col">
          <div className="max-[1024px]:flex max-[1024px]:justify-center rounded-[300px] overflow-hidden animate-showElementTransitionRightToLeft [animation-range:0_3%] [animation-timeline:scroll(root)] max-[1024px]:animate-none">
            <Image
              className="2xl:h-[500px] 2xl:w-[500px] xl:h-[450px] xl:w-[450px] lg:h-[400px] lg:w-[400px] md:h-[400px] md:w-[400px] max-[768px]:h-[300px] max-[768px]:w-[300px] max-[640px]:h-[200px] max-[640px]:w-[200px] rounded-[300px] object-cover h-[475px] overflow-hidden cursor-pointer animate-showElementsTransitionOpacity"
              src='/mauricio.JPG'
              width={500}
              height={100}
              alt='Picture of the author'
            />
          </div>

          <div className="w-[650px] 2xl:w-[605px] max-[1280px]:w-[480px] max-[1024px]:w-full flex flex-col justify-center gap-[20px] animate-showElementTransitionOpacityLeftToRight [animation-range:0_3%] [animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:0_5%] max-[1024px]:[animation-timeline:scroll(root)]">
            <h1 className="text-right max-[1024px]:text-center text-[30px] font-medium">Software Engineer</h1>
            <div>
              <hr />
              <p className="font-medium text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
                I started on this journey before attending university, but I didn’t know I’d like to code this much. I’m passionate about technologies to convert ideas into resilient and scalable web apps with good practices and more than <strong>4 years of experience</strong>, always focusing on new technologies.
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-left text-[25px] font-semibold pr-[85px]">Tecnologies</h2>
              <hr id="skills"/>
              <div className="flex flex-wrap gap-[10px] items-center justify-between animate-showElementsTransitionOpacity [animation-range:entry_10%_cover_30%] [animation-timeline:view()]">
                {listStacksTecnologies.map((icon, i) => {
                  return <span key={i}>{icon}</span>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const skills = (): React.ReactNode => {
    return (
      <div className="flex 2xl:flex-nowrap max-[1024px]:flex-col-reverse items-center gap-[80px] max-[1280px]:gap-[45px] animate-showElementTransitionOpacityBottomToTop [animation-range:0%_10%] [animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:10%_30%] max-[1024px]:[animation-timeline:scroll(root)]">
        <div className="w-[50%] max-[1024px]:w-full animate-showElementTransitionRightToLeft">
          <p className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
            I’m skilled at handling and creating apps, producing user-friendly, comprehensible and accessible interfaces. I always have a user-centric mindset, the easier it is to use the app, the more users will engage, everything while always keeping a business logic centered on maintainability and scalability.
          </p>
        </div>
        <div className="w-[50%] max-[640px]:w-full flex flex-col justify-center items-center gap-[20px] animate-showElementTransitionLeftToRight">
          <h1 className="text-center text-[30px] font-medium tracking-[10px] uppercase min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:0%_10%] min-[1024px]:[animation-timeline:scroll(root)]">skills</h1>
          <hr className="w-full" />
          <div className="h-[60px] w-full flex flex-wrap justify-around items-center">
            <BiSolidMobileVibration className="animate-circle" size={30} />
            <PiDeviceTabletFill className="animate-circle" size={35}/>
            <MdWeb className="animate-circle" size={40} />
          </div>
        </div>
      </div>
    )
  }

  const projects = (): React.ReactNode => {
    return (
      <div id="projects" className="w-full text-center flex flex-col justify-center gap-[15px] mb-3">
        <section className="mt-[50px] flex 2xl:flex-nowrap max-[1024px]:flex-col-reverse max-[1390px]:flex-col-reverse max-[1390px]:gap-[40px] items-center gap-[80px]">
          <CardProject imgSrcList={imgListOscarsPool} classNameAnimation="max-[465px]:p-[10px] animate-showElementTransitionRightToLeft min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:0%_25%] min-[1024px]:[animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:25%_40%] max-[1024px]:[animation-timeline:scroll(root)]"/>

          <div className="w-[50%] max-[1024px]:w-full flex flex-col gap-[20px] animate-showElementTransitionRightToLeft min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:0%_30%] min-[1024px]:[animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:25%_45%] max-[1024px]:[animation-timeline:scroll(root)]">
            <h1 className="text-center text-[30px] font-bold tracking-[10px] uppercase">projects</h1>
            <div className="flex flex-col items-center max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:25%_40%] max-[1024px]:[animation-timeline:scroll(root)]">
              <div className="flex items-center min-[1024px]:mb-[30px] min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:0%_25%] min-[1024px]:[animation-timeline:scroll(root)]">
                <h1 className="text-center text-[25px] font-bold pr-[10px]">Oscars <span className="text-[#d1ab5d]">Pool</span></h1>
                <FaLink onClick={() => openWindowUrl(LINK_URLS.oscarsPoolUrl)} className="hover:text-blue-500" cursor='pointer' size={20} />
              </div>
              <hr className="w-full" />
            </div>
            <p className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
              This is an Oscars 2024 predictions app. There you’ll see and choose the actors, directors, movies and more nominees, create groups, add friends via email (@gmail) and be the member of your group with more points and predictions right. Test your luck! See you there!
            </p>
          </div>
        </section>

        <section className="flex 2xl:flex-nowrap max-[1024px]:flex-col-reverse max-[1390px]:flex-col-reverse min-[1390px]:flex-row-reverse max-[1390px]:gap-[40px] items-center gap-[80px]">
          <CardProject imgSrcList={imgListSpazzio} classNameAnimation="min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:0%_45%] min-[1024px]:[animation-timeline:scroll(root)] max-[465px]:p-[10px] animate-showElementTransitionRightToLeft max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:35%_80%] max-[1024px]:[animation-timeline:scroll(root)]" />
          
          <div className="w-[50%] min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:0%_45%] min-[1024px]:[animation-timeline:scroll(root)] max-[1024px]:w-full flex flex-col gap-[20px] 2xl:translate-y-[20px] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:30%_75%] max-[1024px]:[animation-timeline:scroll(root)]">
            <div className="animate-showElementTransitionLeftToRight">
              <div className="mb-[30px] min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:10%_45%] min-[1024px]:[animation-timeline:scroll(root)] flex justify-center items-center max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:35%_70%] max-[1024px]:[animation-timeline:scroll(root)]">
                <h1 className="text-center text-[25px] font-bold pr-[10px]">Sp<span className="text-[#295A95]">a</span>zzio</h1>
                <FaLink onClick={() => openWindowUrl(LINK_URLS.spazzioUrl)} className="hover:text-blue-500" cursor='pointer' size={20} />
              </div>
              <hr className="mb-[20px]"/>
              <p id="experience" className="font-semibold text-wrap text-[18px] text-justify xl:leading-5 2xl:leading-7">
                Spazzio enhances residents’ experience by providing tools to efficiently reserve, report and manage the financial aspects of their condominium.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const experience = (): React.ReactNode => {
    return (
      <>
        <div className="w-full min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:45%_65%] min-[1024px]:[animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:75%_95%] max-[1024px]:[animation-timeline:scroll(root)]">
          <h1 className="text-center text-[30px] font-bold tracking-[10px] uppercase">Experience</h1>
          <div className="h-full flex flex-col py-[10px]">
            {experienceList.map((e, i) => {
              return (
                <ul key={i} className="flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-center items-center gap-1">
                    <h3 className="font-bold uppercase">{e.nameCompany}</h3>
                    <FaLink onClick={() => openWindowUrl(e.linkCompany)} className="hover:text-blue-500" cursor='pointer' size={20} />
                  </div>
                  <div className="h-10 border-l-2 border-solid border-l-[#1f224f]"/>
                  <h3 className="font-semibold" >{e.position}</h3>
                  <div className="h-10 border-l-2 border-solid border-l-[#1f224f]"/>
                  <section className="bg-[#d1daddcb] rounded-[20px] h-auto w-[600px] flex flex-col justify-center p-[20px] hover:shadow-[0_10px_20px_1px_rgba(0,0,0,0.3)] duration-[1s] overflow-hidden animate-showElementTransitionRightToLeft">
                    <p>{e.details}</p>
                  </section>
                  {i == experienceList.length - 1 ? <></> : <div className="h-10 border-l-2 border-solid border-l-[#1f224f]"/>}
                </ul>
              )
            })}
          </div>
        </div>
      </>
    )
  }

  const peopleSayContent = (): React.ReactNode => {
    return (
      <section id="people_say" className="h-auto flex flex-col gap-[10px] min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:70%_95%] min-[1024px]:[animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:75%_95%] max-[1024px]:[animation-timeline:scroll(root)]">
        <h1 className="text-center text-[25px] font-semibold pr-[10px]">People Say</h1>
        <hr />
        <div className="flex flex-wrap gap-[10px] justify-center">
          {peoples.map((people, i) => {
            const { fullName, imgUrl, userLink, organization, comment } = people;
            return peopleSay({fullName, imgUrl, userLink, organization, comment, key: i});
          })}
        </div>
      </section>
    )
  }

  const contactMe = (): React.ReactNode => {
    return (
      <div id="contact_me" className="py-[20px] min-[1024px]:m-[30px] w-full flex justify-between items-center max-[1390px]:flex-col-reverse gap-[20px] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:85%_100%] max-[1024px]:[animation-timeline:scroll(root)]">
        <div className="w-[800px] min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:90%_100%] min-[1024px]:[animation-timeline:scroll(root)] max-[1280px]:w-[450px] max-[640px]:w-[300px] bg-[#d1daddcb] flex justify-center p-[20px] max-[640px]:p-[10px] rounded-[20px]">
          <MessageForm actionFn={getValueMessage} isLoading={isLoading} isDone={isDone}/>
        </div>
        <div className="w-full flex flex-col min-[1024px]:animate-showElementTransitionOpacityBottomToTop min-[1024px]:[animation-range:90%_100%] min-[1024px]:[animation-timeline:scroll(root)] max-[1024px]:animate-showElementTransitionOpacityBottomToTop max-[1024px]:[animation-range:95%_100%] max-[1024px]:[animation-timeline:scroll(root)]">
          <h1 className="text-center text-[30px] font-semibold tracking-[10px] text-nowrap uppercase">contact me</h1>
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
    <section className="h-full xl:w-[75rem] lg:w-[60rem] sm:w-full max-[1024px]:px-[50px] overflow-hidden px-[7px]">
      <Header />
      <main>
        {optionsFloatMenu()}
        {aboutMe()}
        {skills()}
        {projects()}
        {experience()}
        {peopleSayContent()}
        {contactMe()}
        {Number(scrollPosition) > 98 || Number(widthScreen) < 640 ? optionFloatMenuTemporally() : <></>}
      </main>
      <footer className="m-[10px] flex justify-center items-center flex-wrap">
        <h1>© 2025 Copyrights. dsmauricio16@gmail.com</h1>
      </footer>
    </section>
  )
}
