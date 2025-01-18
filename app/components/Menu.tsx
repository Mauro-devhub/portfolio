import Link from "next/link";
import React from "react";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { VscExtensions } from "react-icons/vsc";

export interface IOptionsMenu {
  option: string;
  link: string;
  icon: React.ReactNode;
}

export const Menu = (): React.ReactNode => {

  const optionsMenu: IOptionsMenu[] = [
    {
      option: 'About me',
      link: '#about_me',
      icon: <IoPersonSharp className="text-[#c4c4c4] hover:text-[#1f224f]" cursor='pointer' size={20} />
    },
    {
      option: 'Skills',
      link: '#skills',
      icon: <VscExtensions className="text-[#c4c4c4] hover:text-[#1f224f]" cursor='pointer' size={20} />
    },
    {
      option: 'Projects',
      link: '#projects',
      icon: <GoProjectSymlink className="text-[#c4c4c4] hover:text-[#1f224f]" cursor='pointer' size={20} />
    },
    {
      option: 'Experience',
      link: '#experience',
      icon: <BiBarChartAlt2 className="text-[#c4c4c4] hover:text-[#1f224f]" cursor='pointer' size={20}/>
    },
    {
      option: 'Contact me',
      link: '#contact_me',
      icon: <GrContact className="text-[#c4c4c4] hover:text-[#1f224f]" cursor='pointer' size={20} />
    }
  ]

  return (
    <nav className="max-[640px]:hidden">
      <li className="flex items-center gap-[25px]">
        {optionsMenu.map((e, i) => {
          return <div key={i} className="hover:text-[#1f224f]">
                    <Link className="hover:text-[#1f224f]" href={e.link}>
                      <div className="flex flex-col justify-center items-center">
                        <span>{e.icon}</span>
                        <span className="text-[12px] font-medium uppercase max-[768px]:text-[8px]">{e.option}</span>
                      </div>
                    </Link>
                  </div>
        })}
      </li>
    </nav>
  )
}