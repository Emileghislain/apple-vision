import Image from "next/image.js";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../context/store.js";

export default function LeftSidebar() {
  const [open, setOpen] = useThemeContext();

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        (open ? "" : " max-w-max items-center") + " flex flex-col gap-4"
      }
    >
      <div
        className={
          (open ? "p-6" : "p-4 items-center") +
          " animtransition glassmorph flex flex-col gap-6"
        }
      >
        <div className="flex justify-between items-center text-white">
          {open && <span className="font-bold text-lg">Facebook</span>}
          <div
            className="rounded-full icon-glassmorph p-3 cursor-pointer"
            onClick={changeOpen}
          >
            <Image
              src={
                open
                  ? "/images/circle-remove.svg"
                  : "/images/circle-upright.svg"
              }
              height={15}
              width={15}
            />
          </div>
        </div>
        <div
          className={
            (open ? "" : "items-center") +
            " flex flex-col text-white font-light gap-5 cursor-pointer"
          }
        >
          <div className="flex items-center gap-4">
            <Image
              src={"/images/users.svg"}
              height={open ? 20 : 30}
              width={open ? 20 : 30}
            />
            {open && <span>Friends</span>}
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src={"/images/marketplace.svg"}
              height={open ? 20 : 30}
              width={open ? 20 : 30}
            />
            {open && <span>Marketplace</span>}
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src={"/images/groups.svg"}
              height={open ? 20 : 30}
              width={open ? 20 : 30}
            />
            {open && <span>Groups</span>}
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src={"/images/watch.svg"}
              height={open ? 20 : 30}
              width={open ? 20 : 30}
            />
            {open && <span>Watch</span>}
          </div>
          <div
            className={(open ? "" : "self-center") + " flex items-center gap-4"}
          >
            <div
              className={
                (open ? "h-[20px] p-[0.37rem]" : "h-[40px] p-[.74rem]") +
                " justify-center rounded-full icon-glassmorph flex items-center cursor-pointer"
              }
            >
              <Image
                src={"/images/see-more.svg"}
                height={open ? 8 : 16}
                width={open ? 8 : 16}
              />
            </div>
            {open && <span>See More</span>}
          </div>
        </div>
      </div>
      <div
        className={(open ? "p-6" : "p-4") + " glassmorph flex flex-col gap-6"}
      >
        {open && (
          <span className="font-bold text-lg items-center text-white">
            Gaming
          </span>
        )}
        <div
          className={
            (open ? "w-full" : "max-w-max") +
            " gap-5 flex flex-col text-white font-light "
          }
        >
          <div className="your flex gap-4 items-center p-3 rounded-xl cursor-pointer">
            <Image
              src={"/images/Rectangle 25.svg"}
              height={open ? 80 : 30}
              width={open ? 80 : 30}
            />
            {open && (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-12 items-center">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-[14px]">Wade Warren</span>
                    <span className="font-light text-[12px]">
                      25K Followers
                    </span>
                  </div>
                  <span className="bg-[#266ecc] px-4 py-1 h-[25px] rounded-full text-[0.7rem]">
                    Follow
                  </span>
                </div>
                <div className="flex justify-between font-light text-[12px] items-center">
                  <span>Mario Rabbids</span>
                  <span className="h-1 w-1 bg-white rounded-full"></span>
                  <span>1.3K Watching</span>
                </div>
              </div>
            )}
          </div>
          <div className="your flex items-center gap-4 p-3 rounded-xl cursor-pointer">
            <Image
              src={"/images/Rectangle 25.svg"}
              height={open ? 80 : 30}
              width={open ? 80 : 30}
            />
            {open && (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between gap-12 items-center">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-[14px]">Wade Warren</span>
                    <span className="font-light text-[12px]">
                      25K Followers
                    </span>
                  </div>
                  <span className="bg-[#266ecc] px-4 py-1 h-[25px] rounded-full text-[0.7rem]">
                    Follow
                  </span>
                </div>
                <div className="flex justify-between font-light text-[12px] items-center">
                  <span>Mario Rabbids</span>
                  <span className="h-1 w-1 bg-white rounded-full"></span>
                  <span>1.3K Watching</span>
                </div>
              </div>
            )}
          </div>
          <div
            className={(open ? "" : "self-center") + " flex items-center gap-4"}
          >
            <div
              className={
                (open ? "h-[20px] p-[0.37rem]" : "h-[40px] p-[.74rem]") +
                " justify-center rounded-full icon-glassmorph flex items-center cursor-pointer"
              }
            >
              <Image
                src={"/images/see-more.svg"}
                height={open ? 8 : 16}
                width={open ? 8 : 16}
              />
            </div>
            {open && <span>See More</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
