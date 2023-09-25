import Image from "next/image.js"

export default function Feeds(){
    return(
        <div className="glassmorph flex flex-col p-6 gap-5">
            <div className="your flex flex-col p-8 rounded-[2rem] gap-5 text-white font-light">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <Image src={'/images/image 3.png'}
                            width={40}
                            height={40} 
                        />
                        <div className="flex flex-col">
                            <span className="font-bold">Jane Smith</span>
                            <div className="flex items-center gap-2 text-[0.65rem] font-light">
                                <span className="">30min</span>
                                <span className="h-1 w-1 bg-white rounded-full"></span>
                                <Image 
                                    src={"/images/world.svg"}
                                    width={15}
                                    height={15}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <Image src={"/images/menu-dots.svg"}
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <span>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </span>
                <div className="flex justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                        <span className="bg-[#ED2E5C] rounded-full p-1">
                            <Image src={'/images/like.svg'} width={8} height={8}/>
                        </span>
                        <span>You & others</span>
                    </div>
                    <span>0 Comment</span>
                </div>
                <div className="grid grid-cols-3 text-sm justify-center gap-4">
                    <span className="flex gap-1 items-center hover:bg-[#266ecc] rounded-full p-2 justify-center cursor-pointer">
                        <Image src={'/images/like.svg'} width={20} height={20}/>
                        Like
                    </span>
                    <span className="flex gap-1 items-center hover:bg-[#266ecc] rounded-full p-2 justify-center cursor-pointer">
                        <Image src={'/images/comment.svg'} width={20} height={20}/>
                        Comments
                    </span>
                    <span className="flex gap-1 items-center hover:bg-[#266ecc] rounded-full p-2 justify-center cursor-pointer">
                        <Image src={'/images/share.svg'} width={20} height={20}/>
                        Share
                    </span>
                </div>
            </div>
            <div className="your flex flex-col p-8 rounded-[2rem] gap-5 text-white font-light">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <Image src={'/images/image 3.png'}
                            width={40}
                            height={40} 
                        />
                        <div className="flex flex-col">
                            <span className="font-bold">Jane Smith</span>
                            <div className="flex items-center gap-2 text-[0.65rem] font-light">
                                <span className="">30min</span>
                                <span className="h-1 w-1 bg-white rounded-full"></span>
                                <Image 
                                    src={"/images/world.svg"}
                                    width={15}
                                    height={15}
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <Image src={"/images/menu-dots.svg"}
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </span>
                    <Image src={'/images/pexels-tara-winstead-6479584.jpg'} className="rounded-[24px]" width={670} height={500} loading="lazy"/>
                </div>
                <div className="flex justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                        <span className="bg-[#ED2E5C] rounded-full p-1">
                            <Image src={'/images/like.svg'} width={8} height={8}/>
                        </span>
                        <span>You & others</span>
                    </div>
                    <span>0 Comment</span>
                </div>
                <div className="grid grid-cols-3 text-sm justify-center gap-4">
                    <span className="flex gap-1 items-center hover:bg-[#266ecc] rounded-full p-2 justify-center cursor-pointer">
                        <Image src={'/images/like.svg'} width={20} height={20}/>
                        Like
                    </span>
                    <span className="flex gap-1 items-center hover:bg-[#266ecc] rounded-full p-2 justify-center cursor-pointer">
                        <Image src={'/images/comment.svg'} width={20} height={20}/>
                        Comments
                    </span>
                    <span className="flex gap-1 items-center hover:bg-[#266ecc] rounded-full p-2 justify-center cursor-pointer">
                        <Image src={'/images/share.svg'} width={20} height={20}/>
                        Share
                    </span>
                </div>
            </div>
        </div>
    )
}