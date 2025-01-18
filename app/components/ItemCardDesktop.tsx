import Image from "next/image";

export interface IItemCardDesktopProps {
  imgSrcList: string[];
}

export const ItemCardDesktop = (props: IItemCardDesktopProps): React.ReactNode => {
  const { imgSrcList } = props;

  return (
    <>
      <div className="flex justify-center items-center gap-[20px] max-[695px]:hidden">
        <Image
          className="object-center rounded-[10px]  hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='desktop-image'
          src={imgSrcList[0]}
          width={400}
          height={400}/>

        <Image
          className="rounded-[10px]  hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='mobile-image'
          src={imgSrcList[1]}
          width={100}
          height={100}/>
      </div>

      <div className="flex max-[1390px]:flex-row-reverse justify-center items-center gap-[20px] max-[695px]:hidden">
        <Image
          className="object-center rounded-[10px]  hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='desktop-image'
          src={imgSrcList[2]}
          width={400}
          height={400}/>

        <Image
          className="rounded-[10px]  hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='mobile-image'
          src={imgSrcList[3]}
          width={100}
          height={100}/>
      </div>
    </>
  )
}