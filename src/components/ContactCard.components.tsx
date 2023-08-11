'use client'
import { formatPhone } from '@/utils';
import { iContact } from '../interfaces/contact.interfaces';
import { CgProfile } from 'react-icons/cg';
import { BiSolidEdit } from 'react-icons/bi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ContactCardProp{
  contact: iContact
}


export function ContactCard({contact}: ContactCardProp) { 

  const router = useRouter();

  return (
    <div className='p-4 border-black border-2 rounded-lg flex items-center gap-3 relative'>
      <CgProfile size={50}/>
      <div className='flex flex-col gap-3'>
        <p className='text-[2rem]'>{contact.firstName} {contact.lastName}</p>
        <div className='grid grid-cols-2 gap-2'>
          <p>{contact.email}</p>
          <p>{contact.email2}</p>
          <p>{formatPhone(contact.phone1)}</p>
          <p>{formatPhone(contact.phone2)}</p>
        </div>
        <button className='absolute top-2 right-2' onClick={() => router.push(`/contacts/${contact.id}`)}>
          <BiSolidEdit size={30}/>
        </button>
      </div>
    </div>
  )
}