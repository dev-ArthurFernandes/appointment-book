'use client'
import { Input } from ".";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { iLogin } from "@/interfaces";
import { login } from "@/api";
import { useState } from "react";
import { IoWarningOutline } from 'react-icons/io5';
import { useRouter } from "next/navigation";
import Link from "next/link";


// Server Action being called inside a Client Component
export default function LoginForm(){
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const [error, setError] = useState(false);

  const router = useRouter();

  async function onSubmit(data:iLogin) {
    await login(data)
    .then(res => {
      if (res.status === 201) {
        localStorage.setItem("Book:Token", res.data.token);
        router.push('/user');
      }
    })
    .catch(err => {
      console.log(err);
      setError(true);
      setTimeout(() => {setError(false)}, 10000);
    })
  }

  return (
    <>
      <form className="flex flex-col items-center gap-4 border-[1px] border-zinc-500 p-2 rounded-lg bg-white drop-shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        
        <Input type={"email"} name={"Email"} exemple="email@mail.com" error={errors.email?.message} register={register('email')} />
        
        <Input type={"password"} name={"Senha"} exemple="*********" error={errors.password?.message} register={register('password')}/>
        
        <button type="submit" className="w-[100px] h-fit py-2 border-blue-600 border-[1px] rounded-lg bg-blue-600 text-white">
          Entrar
        </button>
        
        {error ? <div className="w-fit h-fit p-3 bg-red-600 text-white rounded-lg absolute top-[-30%] flex gap-1">
        
          <IoWarningOutline size={40} />
        
          <p>Email or Password Wrong</p>
        
        </div> : ''}
        
        <p className="text-zinc-400 absolute bottom-[-20%] w-fit">Ainda não tem cadastro? <Link href={'/register'} className="text-blue-500 underline italic">Cadastre-se</Link></p>

      </form>
    </>
  )
}