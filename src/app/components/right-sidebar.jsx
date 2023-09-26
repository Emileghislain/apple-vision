import Image from "next/image.js";
import { useThemeContext } from "../../context/store.js";

export default function RightSidebar() {
  const [open, setOpen] = useThemeContext();

  return (
    <div className="glassmorph flex flex-col gap-4 p-5">
      <div className="flex gap-4 self-end">
        <div className="icon-glassmorph rounded-full p-3">
          <Image src={"/images/menu.svg"} width="20" height="20" />
        </div>
        <div className="icon-glassmorph rounded-full p-3">
          <Image src={"/images/messenger.svg"} width="20" height="20" />
        </div>
        <div className="icon-glassmorph rounded-full p-3">
          <Image src={"/images/alert.svg"} width="20" height="20" />
        </div>
        <div className="rounded-full">
          <Image src={"/images/image 3.png"} width="40" height="40" />
        </div>
      </div>
      <div className="your flex flex-col gap-2 p-3 text-white rounded-xl justify-center">
        <span>Your Pages</span>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="rounded-full p-[0.4rem] bg-white flex items-center relative">
              <Image src={"/images/figma.svg"} width="25" height="25" />
              <div className="absolute bottom-1 left-[1.8rem]">
                <span className="w-3 h-3 rounded-full bg-[#ED2E5C] text-[0.45rem] flex items-center justify-center">
                  4
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span>Figma</span>
              <span className="font-[200] text-[0.6rem]">Figma</span>
            </div>
          </div>
          <div className="rounded-full p-2 backdrop-blur h-[30px]">
            <Image src={"/images/Vector.svg"} width="15" height="15" />
          </div>
        </div>
      </div>
      <div className="your flex flex-col gap-2 p-3 justify-center text-white rounded-xl items-center">
        <span className="self-start text-[16px]">Birthdays</span>
        <div className="flex justify-between">
          <Image src={"/images/Rectangle 27.png"} width="400" height="122" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-[0.75rem] font-sm">
          <span className="col-start-1 col-end-3">
            Clara, Cross and 2 others have birthdays today.
          </span>
          <div className="col-start-3 col-end-3 flex">
            <div className="border-2 rounded-full h-[30px]">
              <Image src={"/images/image 3.png"} width="25" height={"25"} />
            </div>
            <div className="border-2 rounded-full -ml-[0.6rem] h-[30px]">
              <Image src={"/images/image 3.png"} width="25" height={"25"} />
            </div>
            <div className="border-2 rounded-full -ml-[0.6rem] h-[30px]">
              <Image src={"/images/image 3.png"} width="25" height={"25"} />
            </div>
            <div className="border-2 rounded-full -ml-[0.6rem] h-[30px]">
              <Image src={"/images/image 3.png"} width="25" height={"25"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white gap-5">
        <div className="flex justify-between">
          <span className="font-bold">Contacts</span>
          <div className="flex gap-6">
            <Image src={"/images/camera.svg"} width="18" height={"18"} />
            <Image src={"/images/search.svg"} width="18" height={"18"} />
            <Image src={"/images/setting.svg"} width="18" height={"18"} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center relative">
            <Image src={"/images/image 3.png"} width="40" height={"40"} />
            <span className="bg-[#00ff00] h-2 w-2 rounded-full border-2 absolute bottom-1 left-8"></span>
            <span>Clara cross</span>
          </div>
          <div className="flex gap-4 items-center relative">
            <Image src={"/images/image 3.png"} width="40" height={"40"} />
            <span className="bg-transparent h-2 w-2 rounded-full border-2 absolute bottom-1 left-8"></span>
            <span>Clara cross</span>
          </div>
          <div className="flex gap-4 items-center relative">
            <Image src={"/images/image 3.png"} width="40" height={"40"} />
            <span className="bg-[#00ff00] h-2 w-2 rounded-full border-2 absolute bottom-1 left-8"></span>
            <span>Clara cross</span>
          </div>
          <div className="flex gap-4 items-center relative">
            <Image src={"/images/image 3.png"} width="40" height={"40"} />
            <span className="bg-[#00ff00] h-2 w-2 rounded-full border-2 absolute bottom-1 left-8"></span>
            <span>Clara cross</span>
          </div>
          <div className="flex gap-4 items-center relative">
            <Image src={"/images/image 3.png"} width="40" height={"40"} />
            <span className="bg-[#00ff00] h-2 w-2 rounded-full border-2 absolute bottom-1 left-8"></span>
            <span>Clara cross</span>
          </div>
          <div className="flex gap-4 items-center relative">
            <Image src={"/images/image 3.png"} width="40" height={"40"} />
            <span className="bg-[#00ff00] h-2 w-2 rounded-full border-2 absolute bottom-1 left-8"></span>
            <span>Clara cross</span>
          </div>
        </div>
      </div>
    </div>
  );
}
