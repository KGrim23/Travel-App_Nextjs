import { Button } from "@headlessui/react";
// import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
}

function Example({ type, title, variant }: ButtonProps) {
  return (
    <button type={type} className="rounded flex flexCenter gap-2 text-center py-2 px-2 text-lg lg:w-96 lg:h-12 w-full h-14 text-white bg-black data-[hover]:bg-gray-500 data-[active]:bg-black-700">
    <label>{title}</label>
    </button>
  )
}


<div>
<label className="block mb-1">Related Disciplines</label>
<div>
  <input
    type="checkbox"
    name="relatedDisciplines"
    value="UX UI Design"
    checked={formData.relatedDisciplines.includes('UX UI Design')}
    onChange={handleCheckboxChange}
    className="mr-2"
  />
  <label>UX UI Design</label>
</div>
{/* Add more checkboxes as needed */}
</div>
<div>
<label className="block mb-1">Skills</label>
<div>
  <input
    type="checkbox"
    name="skills"
    value="Collaboration"
    checked={formData.skills.includes('Collaboration')}
    onChange={handleCheckboxChange}
    className="mr-2"
  />
  <label>Collaboration</label>
</div>
{/* Add more checkboxes as needed */}
</div>

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