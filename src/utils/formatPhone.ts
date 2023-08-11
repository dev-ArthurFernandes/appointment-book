

export function formatPhone(phone?: string){
  const regex = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
  const subst = `($1) $2-$3`;

  const newPhone = phone?.replace(regex, subst)

  return newPhone
}