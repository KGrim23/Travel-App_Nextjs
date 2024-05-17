'use client'
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {

  return (
    <nav className="flex flex-row justify-between items-center mt-8">
        <div className="flex flex-row items-center px-0 py-4 space-x-2">
          <Link href="/">
            <Image src="/Aplentify Logo.png" alt="logo" width={100} height={100} />
          </Link>
          <h1 className="flex font-semibold text-2xl">Aplentify</h1>
        </div>
  
    </nav> 
  )
}
export default Navbar


// const totalSteps = 5
// <div className="flex justify-between py-4 px-0 mb-6">
// {/* Step indicators */}
// {[1, 2, 3, 4].map((indicator) => (
//   <div
//     key={indicator}
//     className={`h-1 w-full ${indicator <= step ? 'bg-black' : 'bg-gray-300'}`}
//   />
// ))}
// </div>