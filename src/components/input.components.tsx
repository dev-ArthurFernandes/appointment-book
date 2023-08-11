'use client'
import { useState } from 'react';


interface InputProps{
  name: string;
  exemple: string;
  type: string;
  register: any;
  error?: any | null;
}

export function Input({ name, exemple, type, register, error, ...res}: InputProps){

  const [phone, setPhone] = useState("")
  
  
  function handlePhone(event: any) {
    const regex = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
    const subst = `($1) $2-$3`;
    var str = event.target.value;

    const result = str.replace(regex, subst);

    setPhone(result);
  }

  return (
    <div className="w-fit h-fit flex flex-col gap-1">
      <label className="pl-2">
        {name}
      </label>
      {type === 'tel' ?
      <input type={type} name={name} placeholder={exemple} value={phone} {...register} className="w-[400px] h-[47px] border-zinc-600 border-[1px] rounded-lg pl-2 focus:border-blue-300" onChange={handlePhone.bind(this)} />
      :
      <input type={type} name={name} placeholder={exemple} {...register} className="w-[400px] h-[47px] border-zinc-600 border-[1px] rounded-lg pl-2 focus:border-blue-300"/>}
      <p className="text-red-600">{error}</p>
    </div>
  )
}