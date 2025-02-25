import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { ThreeDCardDemo } from '@/components/ui/ThreeDCard';
import React from 'react'

const page = ({params} : {params : {id : string}}) => {
    const {id} = params;
  return (
    <>
    <section className='profile_container'>
         <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col max-w-sm mx-auto p-4 relative h-[30rem] items-center">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="hover" imageUrl='https://imgs.search.brave.com/5JcIgi56K3nwFqHCXraBtH8AvZHBN3l_4sw20-P2Ld8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hZGRs/b2dvLmltYWdlb25s/aW5lLmNvL2xvZ28t/aW1hZ2UuanBn' />
 
      <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
        Name LastName
      </h2>
      <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pd-11">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere sunt maiores quasi illum ipsam assumenda distinctio sapiente, rerum consectetur deserunt harum cumque quibusdam? Corrupti earum ab distinctio labore quod nisi numquam, totam accusantium!
      </p>
    </div>

    <div className='flex flex-1 flex-col gap-5 lg:mt-5'>
      <p className='text-30-bold'>All Projects</p>
       <ul className='mt-7 card_grid grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 justify-center'>
              {
                [
                  {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'},
                  {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'},
                  {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'},
                  {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'},
                  {'id': 123, 'title': 'A NEW PROJECT', 'desc': 'A GREATE DESCRIP'}
      
                ].map((item, index) => (
                   <ThreeDCardDemo key={index} />
                ))
              }
              </ul>
    </div>
    </section>
    </>
  )
}

export default page