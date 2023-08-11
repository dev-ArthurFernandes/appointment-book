



export function ContactList({children}: {children: React.ReactNode}) {
  return(
    <ul className="grid grid-cols-2 px-2">
      {children}
    </ul>
  )
}