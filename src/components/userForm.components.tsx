'use client'
import { connect, updateUser } from '@/api';
import { Input } from '@/components';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CgProfile } from 'react-icons/cg';
import { iUpdateUser, iUser } from '@/interfaces';

export function UpdateUserForm(){

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();

  const [user, setUser] = useState({});

  useEffect(() => {
    const regex = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
    const subst = `($1) $2-$3`;
    const getUser = async () => {
      await connect(localStorage.getItem("Book:Token")!)
      .then(res => {
        setUser({
          ...res.data,
          phone1: res.data.phone1.replace(regex, subst),
          phone2: res.data.phone2.replace(regex, subst),
        })
      })
    }

    getUser()
  })

  async function onSubmit(data:iUpdateUser) {
    await updateUser(data, localStorage.getItem("Book:Token")!)
    .then(res => console.log(res))
  }

  return(
    <>
      <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
        <CgProfile size={100} />
        <Input type={"text"} name={"Primeiro Nome"} exemple={user.firstName} register={register("fistName")} error={errors.firstName?.message} />
        <Input type={"text"} name={"Sobrenome"} exemple={user.lastName} register={register("lastName")} error={errors.lastName?.message} />
        <Input type={"email"} name={"Email"} exemple={user.email} register={register("email")} error={errors.email?.message} />
        <Input type={"email"} name={"Email de Recuperação"} exemple={user.recoveryEmail} register={register("recoveryEmail")} error={errors.recoveryEmail?.message} />
        <Input type={"tel"} name={"Celular"} exemple={user.phone1} register={register("phone1")} error={errors.phone1?.message} />
        <Input type={"tel"} name={"Telefone"} exemple={user.phone2} register={register("phone2")} error={errors.phone2?.message} />
        <div className='w-full flex justify-end'>
          <button className="p-2 bg-blue-600 rounded-lg text-white" type='submit'>
            Salvar
          </button>
        </div>
      </form>
    </>
  )
}