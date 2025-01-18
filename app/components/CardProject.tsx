import { ItemCardDesktop } from "./ItemCardDesktop";
import { ItemCardMobile } from "./ItemCardMobile";

export interface ICardProjectProps {
  imgSrcList: string[];
  classNameAnimation: string;
}

export const CardProject = (props: ICardProjectProps): React.ReactNode => {
  const { imgSrcList, classNameAnimation } = props;

  return (
    <div className={"bg-[#d1daddcb] rounded-[20px] p-[20px] flex flex-col justify-center items-center gap-[10px] " + classNameAnimation}>
      <ItemCardDesktop imgSrcList={imgSrcList}/>
      <ItemCardMobile imgSrcList={imgSrcList}/>
    </div>
  )
}