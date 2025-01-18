import { IconAnimation } from "./Icon-animation"
import { Menu } from "./Menu"

export const Header = () => {
  return (
    <section className="w-full py-[30px] flex flex-wrap items-center justify-between max-[640px]:justify-center border-b border-blue">
      <div className="flex flex-wrap items-center gap-[20px]">
        <IconAnimation />
        <div className="flex items-center gap-[30px]">
          <h1 className="text-nowrap text-[20px] max-[768px]:text-[15px] font-medium uppercase">Mauricio De Los Santos</h1>
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </section>
  )
}