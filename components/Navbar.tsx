import Link from "next/link"
import Image from "next/image"
// import { NAV_LINKS } from "@/constants"
// import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center container mx-auto px-4 py-8">
        <div className="flex flex-row items-center">
          <Link href="/">
            <Image src="/Aplentify Logo.png" alt="logo" width={100} height={100} />
          </Link>
          <h1 className="font-semibold text-2xl">Aplentify</h1>
        </div>
        <div>
          <p className="text-gray-500">Step 1/5</p>
        </div>
       

      
    </nav>
    
  )
}

export default Navbar

 {/* <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=> (
            <Link href={link.href} key={link.key} className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}

        </ul>
        <div className="lg:flexCenter hidden">
          <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
        </div>
        <Image src="menu.svg"  alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" /> */}