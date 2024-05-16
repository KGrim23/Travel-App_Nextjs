import { Button } from "@headlessui/react"
import Image from "next/image"
import Example from "./Button"
import Search from "./Search"

const HumanMentor = () => {
    return (
        <>  
            <h1 className="bold-52 text-md lg:text-2xl lg:bold-88 text-center">Build your career with global experts</h1>
            <p className="regular-16 text-center text-black pt-8">Book and meet international mentors, tutors, and coaching experts for one-off and long-term 1:1 sessions. <span className="font-extrabold">You choose!</span>AI assistant and connect with global mentors, tutors, and coaching experts!
            </p>
            <Search value="Design"/>
  
        </>
    )
}
export default HumanMentor