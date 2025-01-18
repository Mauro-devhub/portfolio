'use client';

import React, { useEffect, useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { EmailDto } from "../context/service-email.context";
import { Button } from "./Button";

export class MessageProps {
  isLoading!: boolean;
  isDone?: boolean;
  actionFn!: (emailDto: EmailDto | null) => void | null;
};

export const MessageForm = ({actionFn, isLoading, isDone = false}: MessageProps): React.ReactNode => {

  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [messageValue, setMessageValue] = useState<string>('');
  const [isWrongEmail, setIsWrongEmail] = useState<boolean>(false);
  const [isValidMessage, setIsInvalidMessage] = useState<boolean>(false);

  const onChangeNameValue = (name: any): void => {
    setNameValue(name.target.value);
  };

  const onChangeEmailValue = (email: any): void => {
    if (isWrongEmail && emailValue.includes('@') && emailValue.split('@')[1].includes('.')) {
      setIsWrongEmail(false);
    }
    setEmailValue(email.target.value);
  };

  const onChangeMessageValue = (message: any): void => {
    if (isValidMessage && messageValue.length >= 10) {
      setIsInvalidMessage(false);
    }
    setMessageValue(message.target.value);
  };

  const control: EmailDto = {
    name: nameValue,
    email: emailValue,
    message: messageValue
  };

  const validateForm = () => {
    if (emailValue.includes('@') && emailValue.split('@')[1].includes('.')) {
      setIsWrongEmail(false);
    } else {
      setIsWrongEmail(true);
    }

    if (messageValue.length >= 10) {
      setIsInvalidMessage(false);
    } else {
      setIsInvalidMessage(true);
    }

    if (!isWrongEmail && !isValidMessage) {
      actionFn(Object.values(control).every(a => a.length <= 0) ? null : control);
    } else {
      actionFn(null);
    }
  }

  useEffect(() => {
    setNameValue('');
    setEmailValue('');
    setMessageValue('');
  }, [isDone])

  return (
    <section className="flex flex-col w-[360px] gap-[10px]">
      <div className="flex flex-col items-center gap-[10px]">
        <input value={nameValue} type="text" placeholder="Name" onChange={onChangeNameValue} className="h-[30px] w-[420px] max-[640px]:w-[200px] max-[640px]:p-[10px] p-[20px] resize-none rounded-[10px] outline-none hover:shadow-[0_5px_30px_5px_rgba(0,0,0,0.3)] duration-[1s]" />
        <input value={emailValue} type="text" placeholder="Email*" onChange={onChangeEmailValue} className="h-[30px] w-[420px] max-[640px]:w-[200px] max-[640px]:p-[10px] p-[20px] resize-none rounded-[10px] outline-none hover:shadow-[0_5px_30px_5px_rgba(0,0,0,0.3)] duration-[1s]" />
        {
          isWrongEmail ?
          <span className="text-[12px] text-[#ff6061]">Email is not valid, please introduce an email valid</span> :
          <></>
        }
        <textarea value={messageValue} placeholder="Message*" onChange={onChangeMessageValue} className="h-[130px] w-[420px] max-[640px]:w-[200px] max-[640px]:p-[10px] p-[20px] resize-none rounded-[10px] outline-none hover:shadow-[0_5px_30px_5px_rgba(0,0,0,0.3)] duration-[1s]" />
        {
          isValidMessage ?
          <span className="text-[12px] text-[#ff6061]">Introduce more than 10 characters to message valid</span> :
          <></>
        }
        <Button
          isLoading={isLoading}
          isDone={isDone}
          onClick={() => {
            validateForm();
          }}
        >
          <BiMailSend size={25} />
        </Button>
      </div>
    </section>
  );
};