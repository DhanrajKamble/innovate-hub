import React from 'react'

const page = ({params} : {params : {id : string}}) => {
    const {id} = params;
  return (
    <>
    <section className='profile_container'>
        {id}
    </section>
    </>
  )
}

export default page