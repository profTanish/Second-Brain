import { IoTrashOutline, IoDocumentTextOutline } from "react-icons/io5";
import htmr from 'htmr';
import { BiSolidShareAlt } from "react-icons/bi";
import { ImYoutube } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Card() {

    type Brain = {
        id: number,
        type: string,
        title: string,
        subtitle: string,
        discription: string,
        link: string,
        tags: string[],
        createdAt: string,
        updatedAt: string,
        userId: number,
        user: {
            id: number,
            username: string,
            email: string,
            password: string,
            brains: Brain[]
        }
    }

    const [brains, setBrains] = useState<Brain[]>()

    useEffect(() => {
        const usefetchData = async () => {
            const response = await axios.post('http://localhost:3000/api/brains')
            setBrains(response.data)
        }
        usefetchData()
    }, [])

    return (
        <div className="inline-flex">
            {brains ? brains.map((items, index) => <div key={index} className={` bg-[#ffffff] ml-8 my-7 drop-shadow-xl px-4 h-full rounded-xl ${items.type === "twitter" ? "w-70" : "w-60"} pb-5`}>
                <div className={`pt-3 flex ${items.type === "twitter" && "pb-0"} ${items.type === "normal" && "pb-2"} ${items.type === "youtube" && "pb-3"} `}>
                    <div className="pt-2  mb-0 flex gap-2 justify-start">
                        {items.type === "normal" && <IoDocumentTextOutline className={`fill-[#666a6e] size-5`} />}
                        {items.type === "youtube" && <ImYoutube className={`fill-[#666a6e] size-5`} />}
                        {items.type === "twitter" && <GrTwitter className={`fill-[#666a6e] size-5`} />}
                        <div className={`font-bold -translate-y-0.5 $`}>
                            {items.title}
                        </div>
                        <div className="flex ml-5 justify-end gap-3 -translate-y-2  ">
                            <button onClick={() => alert(`share button clicked ${index + 1}`)}>
                                <BiSolidShareAlt className={"w-4 h-10 fill-[#666a6e]"} />
                            </button>
                            <button onClick={() => alert(`delete button clicked ${index + 1}`)}>
                                <IoTrashOutline className={"w-4 h-10 fill-[#666a6e]"} />
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    {items.type === "normal" && <div className="text-2xl font-bold pt-0 pb-3 -translate-y-3">
                        {items.subtitle}
                    </div>}
                    {items.type === "youtube" && <>
                        <iframe 
                            src={items.link} 
                            width="200" 
                            height="100" 
                            className="text-2xl font-bold pt-0 -translate-y-2 rounded-lg w-full mb-3"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                            title="YouTube video player" 
                            allowFullScreen>
                        </iframe>
                        </>}
                        {/* .replace("width=640&height=360", "width=200&height=100") */}
                    {items.type === "twitter" && htmr(items.link)}
                </div>

                <div className=" pt-1 -translate-y-3">
                    <div className="flex">
                        {items.discription}
                    </div>
                </div>

                <div className="flex gap-3 pt-1 pb-3">
                    {items.tags.map((items, index) => <div key={index} className="bg-[#cbccfa] rounded-lg px-2 text-sm text-[#4343dc] text-opacity-80">
                        #{items}
                    </div>)}

                </div>

                <div className="text-xs pt-5 text-[#] -translate-y-3 text-opacity-70">
                    Added on {items.createdAt.substring(0, 10).replace("-", "/").replace("-", "/")}
                </div>
            </div>) : " "}
        </div>
    )
}
