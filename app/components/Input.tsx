'use client';

import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

export const Input = (props: {textInputValue: any, actionFn: any}) => {

  const [textAreaValue, setTextAreaValue] = useState('');

  const onChangeTextAreaValue = (onChangeTextAreaValue: any) => {
    setTextAreaValue(onChangeTextAreaValue.target.value)
    props.textInputValue(textAreaValue)
  }

  return (
    <section className="flex flex-col w-[360px] gap-[10px]">
      <div className="flex flex-col items-end gap-[10px]">
        <textarea value={textAreaValue} placeholder="send email" onChange={onChangeTextAreaValue} className="bg-[] h-[130px] w-[420px] p-[20px] resize-none rounded-[10px] outline-none" />
        <button onClick={() => {props.actionFn, setTextAreaValue('')}} className="overflow-hidden uppercase bg-[#071630] text-[white] text-[12px] h-[30px] w-[50px] p-[5px] rounded-[20px] hover:w-[90px] duration-[1s] relative">
          <BiMailSend className="animate-[sendEmail_1.5s_ease-in-out_infinite] transition-transform duration-300" size={25} />
        </button>
      </div>
    </section>
  )
}