import { Boxes } from '@/components/ui/background-boxes'
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

      </section>
    </>
  )
}

export default Detail