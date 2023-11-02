"use client";
import { useCallback } from "react";
import Button from "../buttons/button";
import { useRouter } from "next/navigation";

type Props = {
  isOpen:      boolean;
  onClose:     any;
  onSubmit:    any;
  title:       string;
  body:        JSX.Element;
  actionLabel: string;
  footer?:     JSX.Element;
  disabled:    boolean;
  cancel?:     boolean;
}

function Form({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled, cancel }: Props) {
  
  const router = useRouter()
  
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        justify-center 
        items-center 
        flex 
        h-full
        outline-none 
        focus:outline-none
        bg-neutral-800
        bg-opacity-70
      "
    >
      <div className="relative w-full  my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
        {/*content*/}
        <div className="
          h-full
          lg:h-auto
          border-0 
          rounded-lg 
          shadow-lg 
          relative 
          flex 
          flex-col 
          w-full 
          bg-black
          outline-none 
          focus:outline-none
          "
        >
          {/*header*/}
          <div className="
            flex 
            items-center 
            justify-between 
            mx-2
            rounded-t
            "
          >
            <h3 className="text-3xl p-5 font-semibold text-white">
              {title}
            </h3>
            <button
              className="
                p-1 
                ml-auto
                border-0 
                text-white
                hover:text-sky-500
                transition
              "
              onClick={handleClose}
            >
            </button>
          </div>
          {/*body*/}
          <div className="relative px-5 pb-5 flex-auto">
            {body}
          </div>
          {/*footer*/}
          <div className="flex flex-col gap-2 px-10 pb-10">
            <div className="flex flex-row justify-center gap-10">
              <Button disabled={disabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit} />
              {cancel? 
                <Button disabled={disabled} label={'Cancel'} secondary fullWidth large onClick={() => router.push('/')} /> : <></> }
            </div>
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;