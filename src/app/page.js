'use client'
import Image from 'next/image'
import RightSidebar from './components/right-sidebar.jsx'
import LeftSidebar from './components/left-sidebar.jsx'
import CenterBar from './components/center-bar.jsx'
import { useThemeContext } from '@/context/store.js'

export default function Home() {
  const [open, setOpen] = useThemeContext();

    console.log(open)
  return (
    <main className={"flex w-full min-h-screen p-10 flex-col items-center justify-between bg-white/10"}>
      <div className={(open ? "grid-cols-4" : "grid-anim")+" grid gap-4"}>
        <div className='col-span-1'>
          <LeftSidebar />
        </div>
        <div className={open ? 'col-span-2' : 'col-span-3'}>
          <CenterBar />
        </div>
        <div className='col-span-1'>
          <RightSidebar />
        </div>
      </div>
    </main>
  )
}
