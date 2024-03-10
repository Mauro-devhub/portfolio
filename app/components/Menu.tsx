import Link from "next/link";

export interface IOptionsMenu {
  option: string;
  link: string;
}

export const Menu = () => {

  const optionsMenu: IOptionsMenu[] = [
    {
      option: 'About me',
      link: '#about_me'
    },
    {
      option: 'Skills',
      link: '#skills'
    },
    {
      option: 'Works',
      link: '#works'
    },
    {
      option: 'Contact me',
      link: '#contact_me'
    }
  ]

  return (
    <nav>
      <li className="flex items-center gap-[25px]">
        {optionsMenu.map((e, i) => {
          return <Link key={i} href={e.link}>{e.option}</Link>
        })}
      </li>
    </nav>
  )
}