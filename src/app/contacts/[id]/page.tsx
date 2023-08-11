import { Input, UpdateContactForm } from "@/components";
import Link from "next/link";



export default function UpdateContact({params}: {params: {id: string}}) {
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-fit h-fit p-4 bg-white border-[1px] border-black rounded-lg relative">
        <UpdateContactForm id={params.id}/>
        <Link href={'/contacts'} className="p-2 border-[1px] border-zinc-300 rounded-lg absolute right-4 bottom-4">
          Voltar
        </Link>
      </div>
    </div>
  )
}