import { Boxes } from '@/components/ui/background-boxes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Detail = () => {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <p className='tag relative'>28 December 2024</p>
        <h1 className="heading relative">
          This is a great masterpiece project
        </h1>
        <p className="sub-heading !max-w-5xl relative line-clamp-3">
          This is a nice project description
        </p>

      </div>
      <section className='section_container'>
        <Image src='https://i.pinimg.com/originals/19/9f/d2/199fd29184c6cff24e3445f849af463e.gif' alt='project image'  width={64} height={64} className='w-full h-auto rounded-xl' />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
          <div className='flex-between gap-5'>
            <Link href='/' className='flex gap-2'>
            <Image src="https://imgs.search.brave.com/eaJXt3xCppyGgtGL_FuEn62ntVMxVLYPasIqVp1gSu4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvcmVh/bC1lc3RhdGUtbG9n/by1kZXNpZ25fMjMt/MjE1MTI0OTc5My5q/cGc_c2VtdD1haXNf/aHlicmlk" alt='user logo' width={64} height={64} className='rounded-full drop-shadow-lg' />

            <div>
              <p className='text-20-medium'>AUTHOR NAME</p>
              <p className='text-16-medium'>@USERNAME</p>
            </div>
            </Link>

            <p className='category-tag !text-500-black'>
              Computer Science
            </p>

          </div>

          <h3 className='text-30-bold'>Project Details</h3>
          <p className='no-result'>No Details Provided</p>
        </div>
        <hr className='divider'/>
      </section>
    </>
  )
}

export default Detail