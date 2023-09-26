import Image from "next/image.js";
import { useThemeContext } from "@/context/store.js";

export default function Stories() {
  const [open, setOpen] = useThemeContext();

  return (
    <div
      className={(open ? "storie" : "storie-open") + " grid relative w-full"}
    >
      <div className="storie-image bg-[url('/images/Rectangle28.svg')] relative">
        <div className="create-storie h-1/3 absolute bottom-0 w-full grid grid-cols-4 cursor-pointer">
          <span className="rounded-full bg-[#266ecc] p-2 absolute -top-4 left-[38%]">
            <Image src={"/images/add.svg"} width={20} height={20} />
          </span>
          <span className="col-start-2 col-end-5 text-[10px] text-white text-center font-light bottom-4 absolute">
            Create a story
          </span>
        </div>
      </div>
      <div className="storie-image bg-[url('/images/pexels-sydney-sang-11352656.jpg')] cursor-pointer relative">
        <span className="storie-image-circle bg-[url('/images/pexels-sydney-sang-11352656.jpg')]"></span>
        <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
          <span className="col-start-2 col-end-5">Aisan Maison</span>
        </span>
      </div>
      <div className="storie-image bg-[url('/images/pexels-godisable-jacob-965324.jpg')] cursor-pointer relative">
        <span className="storie-image-circle bg-[url('/images/pexels-godisable-jacob-965324.jpg')]"></span>
        <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
          <span className="col-start-2 col-end-5">Aisan Maison</span>
        </span>
      </div>
      <div className="storie-image bg-[url('/images/pexels-karolina-grabowska-5632325.jpg')] cursor-pointer relative">
        <span className="storie-image-circle bg-[url('/images/pexels-karolina-grabowska-5632325.jpg')]"></span>
        <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
          <span className="col-start-2 col-end-5">Aisan Maison</span>
        </span>
      </div>
      <div className="storie-image bg-[url('/images/pexels-maksim-goncharenok-4352247.jpg')] cursor-pointer relative">
        <span className="storie-image-circle bg-[url('/images/pexels-maksim-goncharenok-4352247.jpg')]"></span>
        <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
          <span className="col-start-2 col-end-5">Aisan Maison</span>
        </span>
      </div>
      <div className="storie-image bg-[url('/images/pexels-maria-orlova-4946662.jpg')] cursor-pointer relative">
        <span className="storie-image-circle bg-[url('/images/pexels-maria-orlova-4946662.jpg')]"></span>
        <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
          <span className="col-start-2 col-end-5">Aisan Maison</span>
        </span>
      </div>
      {!open && (
        <div className="storie-image bg-[url('/images/pexels-koolshooters-6976094.jpg')] cursor-pointer relative">
          <span className="storie-image-circle bg-[url('/images/pexels-koolshooters-6976094.jpg')]"></span>
          <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
            <span className="col-start-2 col-end-5">Aisan Maison</span>
          </span>
        </div>
      )}
      {!open && (
        <div
          className={
            "storie-image bg-[url('/images/pexels-mart-production-7679865.jpg')] cursor-pointer relative"
          }
        >
          <span className="storie-image-circle bg-[url('/images/pexels-mart-production-7679865.jpg')]"></span>
          <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
            <span className="col-start-2 col-end-5">Aisan Maison</span>
          </span>
        </div>
      )}
      {!open && (
        <div
          className={
            "storie-image bg-[url('/images/pexels-max-fischer-5872357.jpg')] cursor-pointer relative"
          }
        >
          <span className="storie-image-circle bg-[url('/images/pexels-max-fischer-5872357.jpg')]"></span>
          <span className="text-[10px] text-white font-light absolute bottom-4 grid grid-cols-4 w-full">
            <span className="col-start-2 col-end-5">Aisan Maison</span>
          </span>
        </div>
      )}
      <div className="icon-glassmorph-next absolute rounded-full p-1 right-4 top-[45%] cursor-pointer">
        <Image src={"/images/arrow-next.svg"} width={20} height={20} />
      </div>
    </div>
  );
}
