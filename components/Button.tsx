import { Button } from "@headlessui/react";
// import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;

}


function Example() {
  return (
    <div className="flexCenter justify-center flex flex-col gap-5 w-full mx-auto p-5">
      <Button className="rounded text-center bg-black py-2 px-4 text-lg lg:w-96 lg:h-12 w-full h-14 text-white data-[hover]:bg-gray-500 data-[active]:bg-black-700">
      Help Me Choose
      </Button>
      <Button className="rounded text-center bg-black py-2 px-4 text-lg lg:w-96 lg:h-12 w-full h-14 text-white data-[hover]:bg-gray-500 data-[active]:bg-black-700">
      Select a Skill
      </Button>
      <p>OR</p>
      <Button className="rounded flex flexCenter gap-2 underline text-center py-2 px-2 text-lg lg:w-96 lg:h-12 w-full h-14 text-black data-[hover]:bg-gray-500 data-[active]:bg-black-700">
        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
        </svg>Become a Mentor
      </Button>

    </div>
  )
}


// const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
//   return (
    
//     <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} 
//         type={type}>
//         {icon && <Image src={icon} alt={title} width={24} height={24}/>}
//         <label className="bold-16" whitespace-nowrap cursor-pointer>{title}</label>
        
//     </button>
    
//   )
// }

export default Example