'use client';

import React from "react";
import { MdDone } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";

export class ButtonProps {
  isLoading!: boolean;
  isDone?: boolean;
  children: React.ReactNode;
  onClick!: () => void;
}

export const Button = ({ isLoading, isDone = false, onClick, children }: ButtonProps): React.ReactNode => {

  const showComponentCharge = (): React.ReactNode => {
    if (isDone) {
      return <MdDone className="duration-[0.5s]" fontSize={20} color="green"/>;
    }

    if (isLoading) {
      return <VscLoading className="animate-spin" fontSize={20} color="white" />;
    } else {
      return children;
    }
  }

  return (
    <>
      <button onClick={() => onClick()} className="flex justify-center overflow-hidden uppercase bg-[#071630] text-[white] text-[12px] h-[30px] w-[50px] p-[5px] rounded-[20px] hover:w-[75px] duration-[1s] relative">
        {showComponentCharge()}
      </button>
    </>
  )
}