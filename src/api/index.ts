import axios from 'axios';
import { iContact, iCreateContact, iCreateUser, iLogin, iUpdateContact, iUpdateUser } from "@/interfaces";



export async function login(data: iLogin) {
  const response = await axios.post('http://localhost:3000/login', { ...data })

  return response

}

export async function connect(token: string) {
  const response = await axios.get('http://localhost:3000/users', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return response
}

export async function createUser(data: iCreateUser) {
  console.log(data)
  const response = await axios.post('http://localhost:3000/users', { ...data })

  return response
}



export async function updateUser(data: iUpdateUser, token: string) {
  console.log(token)
  const response = await axios.patch(`http://localhost:3000/users`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: { ...data }
  })

  return response
}

export async function getContacts(token: string) {
  return await axios.get('http://localhost:3000/contacts', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export async function getContactById(id: string, token: string) {
  return await axios.get(`http://localhost:3000/contacts/${Object.values(id)[0]}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  )
}

export async function updateContact(id: string, data: iUpdateContact, token: string) {
  return await axios.patch(`http://localhost:3000/contacts/${Object.values(id)[0]}`, {
    ...data,
    headers: {
      'Authorization': 'Bearer' + token,
      'Content-Type': 'application/json'
    }
  })
}

export async function createContact(data: iCreateContact, token: string) {
  return await axios.post('http://localhost:3000/contacts', {
    ...data,
    headers: {
      'Authorization': "Bearer" + token,
      'Content-Type': "application/json"
    }
  })
  .then(res => res)
}