import { IconAnimation } from "./Icon-animation"
import { Menu } from "./Menu"

export const Header = () => {
  return (
    <section className="w-full py-[30px] flex items-center justify-between border-b border-blue">
      <div className="flex items-center gap-[20px]">
        <IconAnimation />
        <div className="flex items-center gap-[30px]">
          <h1 className="text-[25px]">Mauricio Sánchez.</h1>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </section>
  )
}