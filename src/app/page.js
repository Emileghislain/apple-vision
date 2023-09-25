'use client'
import Image from 'next/image'
import RightSidebar from './components/right-sidebar.jsx'
import LeftSidebar from './components/left-sidebar.jsx'
import CenterBar from './components/center-bar.jsx'

export default function Home() {
  return (
    <main className="flex w-full min-h-screen p-10 flex-col items-center justify-between bg-white/10">
      <div className="grid gap-4 grid-cols-4">
        <div className='grid col-span-1'>
          <LeftSidebar />
        </div>
        <div className='grid col-span-2'>
          <CenterBar />
        </div>
        <div className='grid col-span-1'>
          <RightSidebar />
        </div>
      </div>
    </main>
  )
}
