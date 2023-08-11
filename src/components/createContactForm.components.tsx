'use client'
import { formatPhone } from "@/utils";
import { Input } from "."
import { createContact } from "@/api";
import { iCreateContact } from "@/interfaces";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


export function CreateContactForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const router = useRouter();

  async function onSubmit(data: iCreateContact) {
    await createContact(data, localStorage.getItem("Book:Token")!)
      .then(res => {
        if (res.status === 201){
          router.push('/contacts')
        }
      })
  }


  return(
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Input type={"text"} name={"Primeiro Nome"} exemple={"Marco"} register={register("firstName")} error={errors.firstName?.message} />
      <Input type={"text"} name={"Sobrenome"} exemple={"Freitas"} register={register("lastName")} error={errors.lastName?.message} />
      <Input type={"email"} name={"Email"} exemple={"email@mail.com"} register={register("email")} error={errors.email?.message} />
      <Input type={"email"} name={"Email 2"} exemple={'mail@email.com'} register={register("email2")} error={errors.recoveryEmail?.message} />
      <Input type={"text"} name={"Celular"} exemple={formatPhone("99999999999999")} register={register("phone1")} error={errors.phone1?.message} />
      <Input type={"text"} name={"Telefone"} exemple={formatPhone("99999999999999")!} register={register("phone2")} error={errors.phone2?.message} />
      <button type="submit" className="w-[100px] h-fit py-2 border-blue-600 border-[1px] rounded-lg bg-blue-600 text-white">
        Criar
      </button>
    </form>
  )
}