'use client'
import { iUpdateContact } from "@/interfaces";
import { Input } from ".";
import { useEffect, useState } from "react";
import { getContactById, getContacts, updateContact } from "@/api";
import { formatPhone } from "@/utils";
import { useForm } from "react-hook-form";


export function UpdateContactForm(id: string) {

  const [contact, setContact] = useState({});


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    async function fetchData(){
      await getContactById(id, localStorage.getItem("Book:Token")!)
      .then(res => setContact(res.data))
    }

    fetchData()
  })

  async function onSubmit(data:iUpdateContact) {
    await updateContact(id, data, localStorage.getItem("Book:Token")!)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Input type={"text"} name={"Primeiro Nome"} exemple={contact.firstName} register={register("firstName")} error={errors.firstName?.message} />
      <Input type={"text"} name={"Sobrenome"} exemple={contact.lastName!} register={register("lastName")} error={errors.lastName?.message} />
      <Input type={"email"} name={"Email"} exemple={contact.email} register={register("email")} error={errors.email?.message} />
      <Input type={"email"} name={"Email 2"} exemple={contact.email2!} register={register("email2")} error={errors.recoveryEmail?.message} />
      <Input type={"text"} name={"Celular"} exemple={formatPhone(contact.phone1)!} register={register("phone1")} error={errors.phone1?.message} />
      <Input type={"text"} name={"Telefone"} exemple={formatPhone(contact.phone2!)!} register={register("phone2")} error={errors.phone2?.message} />
      <button type="submit" className="w-[100px] h-fit py-2 border-blue-600 border-[1px] rounded-lg bg-blue-600 text-white">
        Salvar
      </button>
    </form>
  )
}