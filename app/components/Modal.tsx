export class ConfirmModalProps {
  title!: string;
  message?: string;
  acceptLabel!: string;
  cancelLabel!: string;
  accept!: () => void;
  cancel!: () => void;
}

export const ConfirmModal = (
  { 
    title,
    message,
    accept,
    cancel,
    acceptLabel,
    cancelLabel
  }: ConfirmModalProps) => {
  return (
    <div className="w-[360px] bg-white flex flex-col justify-center gap-8 rounded-md p-5">
      <div className="flex flex-col justify-center gap-[10px]">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-[12px] font-medium empty:hidden">
          {message}
        </span>
      </div>
      <div className="flex gap-3 justify-end">
        <button 
          // theme={buttonAcceptTheme}
          onClick={accept}>
          { acceptLabel }
        </button>
        <button 
          // theme={buttonCancelTheme}
          // mode='outline'
          onClick={cancel}>
          { cancelLabel }
        </button>
      </div>
    </div>
  )
}