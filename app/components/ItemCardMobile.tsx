import Image from "next/image";

export interface IItemCardMobileProps {
  imgSrcList: string[];
}

export const ItemCardMobile = (props: IItemCardMobileProps): React.ReactNode => {
  const { imgSrcList } = props;

  return (
    <>
      <div className="flex justify-center items-center gap-[20px] min-[695px]:hidden">
        <Image
          className="rounded-[10px]  hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='mobile-image'
          src={imgSrcList[3]}
          width={100}
          height={100}/>

        <Image
          className="rounded-[10px]  hover:rotate-[10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='mobile-image'
          src={imgSrcList[1]}
          width={100}
          height={100}/>
      </div>

      <div className="flex flex-col justify-center items-center gap-[20px] min-[695px]:hidden">
        <Image
          className="max-[640px]:h-[170px] max-[640px]:w-[300px] object-center rounded-[10px]  hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='desktop-image'
          src={imgSrcList[0]}
          width={400}
          height={400}/>

        <Image
          className="max-[640px]:h-[170px] max-[640px]:w-[300px] object-center rounded-[10px]  hover:rotate-[-10deg] hover:shadow-[0_10px_10px_15px_rgba(0,0,0,0.3)] duration-[1s]"
          objectFit="cover"
          alt='desktop-image'
          src={imgSrcList[2]}
          width={400}
          height={400}/>
      </div>
    </>
  )
}