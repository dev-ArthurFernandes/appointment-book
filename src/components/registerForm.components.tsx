'use client'
import { useForm } from 'react-hook-form';
import { Input } from '.';
import { iCreateUser } from '@/interfaces';
import { createUser } from '@/api';
import { useRouter } from 'next/navigation';


export function RegisterForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const router = useRouter();

  async function onSubmit(data:iCreateUser) {
    await createUser(data)
    .then(res => {
      if (res.status === 201){
        router.push('/')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <form className="flex flex-col items-center gap-4 border-[1px] border-zinc-500 p-2 rounded-lg bg-white drop-shadow-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-bold text-[2rem]">Cadastro</h1>
        <Input type={"text"} name={"Primeiro Nome"} exemple={"João"} register={register("firstName")} error={errors.firstName?.message} />
        <Input type={"text"} name={"Sobrenome"} exemple={'Abravanel'} register={register("lastName")} error={errors.lastName?.message} />
        <Input type={"email"} name={"Email"} exemple={"email@mail.com"} register={register("email")} error={errors.email?.message} />
        <Input type={"email"} name={"Email de Recuperação"} exemple={"email@mail.com"} register={register("recoveryEmail")} error={errors.recoveryEmail?.message} />
        <Input type={"password"} name={"Senha"} exemple={'*********'} register={register("password")} error={errors.password?.message} />
        <Input type={"text"} name={"Celular"} exemple={"DDD 00000-0000"} register={register("phone1")} error={errors.phone1?.message} />
        <Input type={"text"} name={"Telefone"} exemple={"DDD 00000-0000"} register={register("phone2")} error={errors.phone2?.message} />
        <button type="submit" className="w-[100px] h-fit py-2 border-blue-600 border-[1px] rounded-lg bg-blue-600 text-white">
          Cadastrar
        </button>

      </form>
    </>
  )
}