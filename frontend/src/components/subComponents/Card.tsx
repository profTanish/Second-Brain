import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidShareAlt } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import { ImYoutube } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";

export default function Card() {

    

    return (
        <div className={` bg-[#ffffff] mx-8 my-10 drop-shadow-xl px-4 rounded-xl w-60 pb-5`}>
            <div className="pt-3 flex pb-2">
                <div className="pt-2   flex gap-2 justify-start">
                    <IoDocumentTextOutline className={`size-5`} />
                    <div className={`font-bold -translate-y-0.5 $`}>
                        Project Ideas
                    </div>
                    <div className="flex ml-5 justify-end gap-3 -translate-y-2  ">
                        <button>
                            <BiSolidShareAlt className={"w-4 h-10"} />
                        </button>
                        <button>
                            <IoTrashOutline className={"w-4 h-10 "} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-2xl font-bold pt-0 pb-3 -translate-y-3">
                    Future Projects
                </div>
            </div>

            <div className=" pt-1 -translate-y-3">

                <div className="flex">
                    <div className="font-bold mr-2">• </div>Build a personal
                </div>
            </div>

            <div className="flex gap-3 pt-1 pb-3">
                <div className="bg-[#cbccfa] rounded-lg px-2 text-sm text-[#4343dc] text-opacity-80">
                    #productivity
                </div>
                <div className="bg-[#cbccfa] rounded-lg px-2 text-sm text-[#4343dc] text-opacity-80">
                    #ideas
                </div>
            </div>

            <div className="text-xs pt-5 text-[#666a6e] -translate-y-3 text-opacity-70">
                Added on 7/02/2025
            </div>
        </div>

    )
}
