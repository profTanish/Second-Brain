import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidShareAlt } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import { ImYoutube } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";

export default function Card() {

    const inputValues = {
        brains: [
            {
                id: 1,
                type: "youtube",
                title: "How to Build a Second Brain ",
                subtitle : "Future Projects",
                description: "Andrew Tate, Fresh and Fit, and DJ Akademiks | Explosive Podcast Episode Unfiltered Discussion",
                link: "https://www.youtube.com/watch?v=BaBei8L_FHo",
                tags: ["productivity", "ideas"],
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().toLocaleDateString(),
            },
            {
                id: 2,
                type: "normal",
                title: "Projects Ideas",
                subtitle : "Future Projects",
                description: "Andrew Tate, Fresh and Fit, and DJ Akademiks | Explosive Podcast Episode Unfiltered Discussion",
                link: "https://www.youtube.com/watch?v=BaBei8L_FHo",
                tags: ["productivity", "ideas"],
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().getTime,
            },
            {
                id: 1,
                type: "twitter",
                title: "Productivity Tips",
                link: <> <blockquote className=" twitter-tweet"><p lang="en" dir="ltr">The cult knows it has lost! <a href="https://t.co/N88ozvOaJl">https://t.co/N88ozvOaJl</a></p>&mdash; Alex Jones (@RealAlexJones) <a href="https://twitter.com/RealAlexJones/status/1885248616454922437?ref_src=twsrc%5Etfw">January 31, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> </>,
                tags: ["productivity", "ideas"],
                createdAt: new Date().toLocaleDateString(),
                updatedAt: new Date().getTime,
            },
        ]
    }

    console.log(inputValues.createdAt)
    const type: "youtube" | "normal" = "youtube";

    return (
        <div className="inline-flex">        
        {inputValues.brains.map((items, index) => <div className={` bg-[#ffffff] ml-8 my-7 drop-shadow-xl px-4 h-full rounded-xl w-60 ${items.type === "twitter" ? "w-70" : "w-60"} pb-5`}>
            <div key={index} className={`pt-3 flex ${items.type === "twitter" && "pb-0"} ${items.type === "normal" && "pb-2"} ${items.type === "youtube" && "pb-3"} `}>
                <div className="pt-2  mb-0 flex gap-2 justify-start">
                    {items.type === "normal" && <IoDocumentTextOutline className={`fill-[#666a6e] size-5`} />}
                    {items.type === "youtube" && <ImYoutube className={`fill-[#666a6e] size-5`} />}
                    {items.type === "twitter" && <GrTwitter className={`fill-[#666a6e] size-5`} />}
                    <div className={`font-bold -translate-y-0.5 $`}>
                        {items.title}
                    </div>
                    <div className="flex ml-5 justify-end gap-3 -translate-y-2  ">
                        <button onClick={() => alert("share button clicked " + parseInt(index+1))}>
                            <BiSolidShareAlt className={"w-4 h-10 fill-[#666a6e]"} />
                        </button>
                        <button onClick={() => alert("delete button clicked " + parseInt(index+1))}>
                            <IoTrashOutline className={"w-4 h-10 fill-[#666a6e]"} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {items.type === "normal" && <div className="text-2xl font-bold pt-0 pb-3 -translate-y-3">
                    {items.subtitle}
                </div>}
                {items.type === "youtube" && <iframe 
                src={"https://www.youtube.com/watch?v=BaBei8L_FHo".replace("watch", "embed").replace("?v=", "/")}
                width="200"
                height="100"
                className="text-2xl font-bold pt-0 -translate-y-2 rounded-lg w-full mb-3"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen/>}
                {items.type === "twitter" && items.link}
            </div>

            <div className=" pt-1 -translate-y-3">
                <div className="flex">
                    {items.description}
                </div>
            </div>

            <div className="flex gap-3 pt-1 pb-3">
                {items.tags.map((items, index) => <div key={index} className="bg-[#cbccfa] rounded-lg px-2 text-sm text-[#4343dc] text-opacity-80">
                    #{items}
                </div>)}
                
            </div>

            <div className="text-xs pt-5 text-[#] -translate-y-3 text-opacity-70">
                Added on {items.createdAt}
            </div>
        </div>)}
        </div>
    )
}
