import { HTMLInputTypeAttribute, useEffect, useState } from "react";

type Props = {
  placeholder: string
  value:       string | number
  onChange:    any
  disabled:    boolean
  type:        HTMLInputTypeAttribute
  checked?:    boolean
}

function Input({ placeholder, value, onChange, disabled, type, checked }: Props) {
 
  return (
      <div className="w-full">
        <input
          disabled={disabled}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type}
          checked={checked}
          className="
          w-full px-2 py-1
          text-md bg-black
          border-2 border-neutral-800
          placeholder-neutral-500/[.7]
          outline-none
          rounded-md
          text-white
          focus:border-sky-500
          transition
          disabled:bg-neutral-900
          disabled:cursor-not-allowed
          "
        />
      </div>
    );
  }
  
  export default Input;