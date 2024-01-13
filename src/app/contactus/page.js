"use client";

import {useRouter} from "next/navigation"

const ContactUs = () => {
    const router = useRouter()

    const handleClick = () => {
     router.push ("/dashboard");
    }

    return (
        <div>
            <h1>Contact Us</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default ContactUs