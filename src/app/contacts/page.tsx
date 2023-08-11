'use client'
import { ContactList, ContactCard } from '@/components';
import { getContacts } from '@/api';
import { iContact } from '@/interfaces';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Contacts(){

  const [contacts, setContacts] = useState([])


  useEffect(() => {
    async function fetchData() {
      await getContacts(localStorage.getItem("Book:Token")!)
      .then(res => setContacts(res.data))
    }
    fetchData()
  })

  return (
    <>
      <h1 className="text-[4rem] absolute top-[10%]">Contacts</h1>
      <Link href={'/contacts/new'}>Novo Contato</Link>
      <ContactList>
        {contacts.map(item => <ContactCard contact={item} />)}
      </ContactList>
    </>
  )
}