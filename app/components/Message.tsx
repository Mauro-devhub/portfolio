'use client';

import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

export class MessageProps {
  actionFn!: ({name, email, message}: {[key: string]: string}) => void;
}

export const Message = ({actionFn}: MessageProps) => {

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const message = {
    name: nameValue,
    email: emailValue,
    message: messageValue
  }

  const onChangeNameValue = (name: any) => {
    setNameValue(name.target.value);
  }

  const onChangeEmailValue = (email: any) => {
    setEmailValue(email.target.value);
  }

  const onChangeMessageValue = (message: any) => {
    setMessageValue(message.target.value);
  }

  return (
    <section className="flex flex-col w-[360px] gap-[10px]">
      <div className="flex flex-col items-center gap-[10px]">
        <input value={nameValue} type="text" placeholder="Name" onChange={onChangeNameValue} className="h-[30px] w-[420px] max-[640px]:w-[200px] max-[640px]:p-[10px] p-[20px] resize-none rounded-[10px] outline-none hover:shadow-[0_5px_30px_5px_rgba(0,0,0,0.3)] duration-[1s]" />
        <input value={emailValue} type="text" placeholder="Email" onChange={onChangeEmailValue} className="h-[30px] w-[420px] max-[640px]:w-[200px] max-[640px]:p-[10px] p-[20px] resize-none rounded-[10px] outline-none hover:shadow-[0_5px_30px_5px_rgba(0,0,0,0.3)] duration-[1s]" />
        <textarea value={messageValue} placeholder="Message" onChange={onChangeMessageValue} className="h-[130px] w-[420px] max-[640px]:w-[200px] max-[640px]:p-[10px] p-[20px] resize-none rounded-[10px] outline-none hover:shadow-[0_5px_30px_5px_rgba(0,0,0,0.3)] duration-[1s]" />
        <button onClick={() => actionFn({name: message.name, email: message.email, message: message.message})} className="overflow-hidden uppercase bg-[#071630] text-[white] text-[12px] h-[30px] w-[50px] p-[5px] rounded-[20px] hover:w-[90px] duration-[1s] relative">
          <BiMailSend className="animate-[sendEmail_1.5s_ease-in-out_infinite] transition-transform duration-300" size={25} />
        </button>
      </div>
    </section>
  )
}