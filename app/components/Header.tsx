import { IconAnimation } from "./Icon-animation"
import { Menu } from "./Menu"

export const Header = () => {
  return (
    <section className="w-full py-[30px] flex flex-wrap items-center justify-between border-b border-blue">
      <div className="flex flex-wrap items-center gap-[20px]">
        <IconAnimation />
        <div className="flex items-center gap-[30px]">
          <h1 className="text-[20px] font-medium tracking-[3px] uppercase">Mauricio Sánchez.</h1>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </section>
  )
}