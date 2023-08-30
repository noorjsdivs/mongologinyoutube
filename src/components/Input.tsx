import React, { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  inputType: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<Props> = ({
  label,
  placeholder,
  inputType,
  value,
  onChange,
}: any) => {
  return (
    <div className="flex flex-col gap-y-4">
      <label className="text-sm mb-1">{label}</label>
      <input
        className="outline-none bg-transparent border-b-[1px] border-b-gray-500 placeholder:text-xs placeholder:text-zinc-400 text-white tracking-wide"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
