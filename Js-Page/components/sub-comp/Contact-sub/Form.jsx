import { useEffect, useState } from "react"


function Form() {

    const [userInfo , setUserInfo] = useState({
        name: "" , email:"" , phone: "" , message:""
    })

    function handleChange(event) {
        const {name , value} = event.target
        setUserInfo((prev) => {
            return {
                ...prev,[name]: value
            }   
        })
    }
    const[message , setMessage]  = useState(false)
    function submit(event) {
        event.preventDefault()
    }

    function handleClick() {
        if (userInfo.message !== "" && userInfo.email !== "") { 
            setMessage(true) 
         }
    }
    useEffect(() => {
        setTimeout(() => {
            setMessage(false)
        } , 3000)
    } , [message])
    return (

        <>
            <form onSubmit={submit} className="flex flex-col w-full sm:w-[30rem] items-center">
                        <input className="my-4 py-2 pl-4 shadow-[-4px_4px_1px_-0px_rgba(0,0,0,1)] font-['Montserrat'] font-bold outline-0 w-50 text-[0.7rem] sm:text-sm sm:w-full" type="text" name="name" onChange={handleChange} value={userInfo.name}  id="name" placeholder="ENTER YOUR NAME*"/>

                        <input className="my-4 py-2 pl-4 shadow-[-4px_4px_1px_-0px_rgba(0,0,0,1)] font-['Montserrat'] font-bold outline-0 w-50 text-[0.7rem] sm:text-sm sm:w-full" type="email" name="email" value={userInfo.email}  id="email" onChange={handleChange} placeholder="ENTER YOUR EMAIL*"/>

                        <input className="my-4 py-2 pl-4 shadow-[-4px_4px_1px_-0px_rgba(0,0,0,1)] font-['Montserrat'] font-bold  outline-0 w-50 text-[0.7rem] sm:text-sm sm:w-full" type="tel" name="phone" value={userInfo.phone} id="phone" onChange={handleChange}   placeholder="PHONE NUMBER"/>

                        <textarea className="my-4 py-2 px-4 shadow-[-4px_4px_1px_-0px_rgba(0,0,0,1)] font-['Montserrat'] font-bold  resize-none outline-0 w-40 text-[0.7rem] sm:text-sm sm:w-full" name="message" value={userInfo.message} onChange={handleChange} rows="5" id="message"  placeholder="YOUR MESSAGE*"></textarea>
                        
                        {message && <p className="mt-5 text-green-800 font-bold text-base text-center">Your message have been submited</p>}

                        <input onClick={handleClick} className="font-bold border-x-4 border-black px-8 cursor-pointer my-8" type="submit" value="SUBMIT" />
                    </form>
                    
        </>
    )
}

export default Form