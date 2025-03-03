import SearchForm from '@/components/SearchForm';
import { Boxes } from '@/components/ui/background-boxes';
import { ThreeDCardDemo } from '@/components/ui/ThreeDCard';
// import { cn } from '@/lib/utils';
import React from 'react'

const MainPage = () => {
  return (
    <>
      <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className="heading relative">
          Welcome To Innovate Hub
        </h1>
        <p className="sub-heading !max-w-3xl relative">
          Where project meet like minded people
        </p>

        <SearchForm /> 
      </div>
      <section className='section_container'>
        <p className='text-30-semibold'>
          Trendy Projects
        </p>
        <ul className='mt-7 card_grid grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center'>
        {
          [
            {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'},
            {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'},
            {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'}

          ].map((item, index) => (
             <ThreeDCardDemo />
          ))
        }
        </ul>
      </section>
    </>
  );
}

export default MainPage