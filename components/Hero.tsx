
import { Button } from "@headlessui/react"
import Image from "next/image"
import Example from "./Button"

const Hero = () => {
  return (
    <section className="flex flex-col pt-8 p-8 max-container padding-container lg:gap-5 lg:pt-8">
      <h1 className="bold-52 text-md lg:text-2xl lg:bold-88 text-center">Aplentify your skills & career growth</h1>
      <p className="regular-20 text-center text-black pt-8">Get instant help from our friendly <span className="font-extrabold">Appie</span> AI assistant and connect with global mentors, tutors, and coaching experts!
      </p>

      <div className="flexCenter justify-center flex flex-col gap-5 w-full mx-auto p-5">
        <Example type="button" title="Help Me Choose" variant="" />
        <Example type="button" title="Select a skill" variant="" />
        <Example type="button" title="Become a Mentor" variant="btn_dark_outline" />
    </div>
    </section>


    // <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    //   <div className="hero-map" />

    //   {/* LEFT */}
    //   <div className="relative z-20 flex flex-1 flex-col xl:1-1/2">
    //     <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"/>
    //     <h1 className="bold-52 lg:bold-88 ">Putuk Truno Camp Area</h1>
    //     <p className="regular-16 mt-5 text-grey-30 xl:max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
    //     <div className="my-11 flex flex-wrap gap-5">
    //       <div className="flex items-center gap-2">
    //         {Array(5).fill(1).map((_, index) =>(
    //           <Image src="/star.svg" alt="stars" width={24} height={24}/>
    //         ))}
    //       </div>
    //       <p className="bold-16 lg:bold-20 text-blue-70">
    //         198k
    //         <span className="regular-16 lg:regular-20 ml-1 underline">Excellent Reviews</span>
    //       </p>
    //     </div>
    //     <div className="flex flex-col w-full gap-3 sm:flex-row">
    //       <Button type="button" title="Download App" variant="btn_green"/>
    //       <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text"/>
    //     </div>
    //   </div>

    //   <div className="relative flex flex-1 items-start">
    //     <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

    //       <div className="flex flex-col">
    //         <div className="flexBetween">
    //           <p className="regular-16 text-gray-20">Location</p>
    //             <Image src="/close.svg" alt="close" width={24} height={24}/>
    //         </div>
    //       </div>
    //         <p className="bold-20 text-white">Aguas Calientes</p>

    //         <div className="flexBetween">
    //           <div className="flex flex-col">
    //             <p className="regular-16 block text-gray-20">Distance</p>
    //             <p className="bold-20 text-white">162.34 miles</p>
    //           </div>
    //           <div className="flex flex-col">
    //             <p className="regular-16 block text-gray-20">Elevation</p>
    //             <p className="bold-20 text-white">2.072 km</p>
    //           </div>
    //         </div>
          
    //     </div>
    //   </div>

    // </section>
  )
}

export default Hero