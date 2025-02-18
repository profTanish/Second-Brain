import { LuBrain } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from "axios";
import { inputEmail, inputPassword, inputUsername, checkBox } from "../store/InputStates";
import { useAtomValue, useSetAtom } from "jotai";

export default function Signup() {
    const setInputUsername = useSetAtom(inputUsername);
    const setInputEmail = useSetAtom(inputEmail);
    const setInputPassword = useSetAtom(inputPassword);
    const setCheck = useSetAtom(checkBox);

    const username = useAtomValue(inputUsername)
    const email = useAtomValue(inputEmail)
    const password = useAtomValue(inputPassword)
    const Check = useAtomValue(checkBox)

    const handelUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUsername(e.target.value)
    }
    const handelEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.target.value)
    }
    const handelPass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(e.target.value)
    }

    return (
        <>
            <div className="w-screen h-screen text-center bg-[#ffffff] px-96">
                <div className="text-[#35495d] flex justify-center text-5xl font-sans font-bold pt-44">
                    <div>
                        <LuBrain className="fill-blue-700 mr-5 size-14" />
                    </div>
                    <div>
                        Second Brain
                    </div>
                </div>
                <div className="ml-5 mt-2">
                    have an account?
                    <Link to={"/login"} className="text-blue-400 font-bold pl-2 ">Login</Link>
                </div>
                <div>
                    <div className="mt-10 ml-5">
                        <input type="text" name="username" placeholder="Username" onChange={handelUsername} className=" text-xl w-1/2 h-14 px-4 py-2 border-2 border-gray-300 rounded-lg bg-[#f4f8fa]" />
                    </div>
                </div>
                <div>
                    <div className="mt-7 ml-5">
                        <input type="text" name="Email" placeholder="Email" onChange={handelEmail} className=" text-xl w-1/2 h-14 px-4 py-2 border-2 border-gray-300 rounded-lg bg-[#f4f8fa]" />
                    </div>
                </div>
                <div>
                    <div className="mt-7 ml-5">
                        <input type={Check === true ? "text" : "password"} name="Password" placeholder="Password" onChange={handelPass} className="text-xl w-1/2 h-14 px-4 py-2 border-2 border-gray-300 rounded-lg bg-[#f4f8fa]" />
                    </div>
                </div>
                <div className="flex justify-center mt-4 w-1/2 ml-23.5 ">
                    <input type={"checkbox"} onClick={() => setCheck(Check === true ? false : true)} className="size-6 mr-2" />
                    <div className="text-lg -translate-y-0.5">
                        Remember me
                    </div>
                </div>
                <div className="mt-7">
                    <a onClick={async ()=> {
                        await axios.post('http://localhost:3000/signup', {      //// ADDD
                            username: username,
                            email: email,
                            password: password
                        })
                        setTimeout(()=> {
                            window.location.href = "/"
                        }, 5000)
                    }}>
                        <button className=" w-1/2 rounded-xl cursor-pointer shadow-sm bg-[#f4f8fa] ml-5 h-13">Sign up</button>
                    </a>
                </div>
            </div>
        </>
    )
}
