import ProjectForm from '@/components/ProjectForm'
import React from 'react'

const Create = () => {
  return (
    <>
    <section className='form_container !min-h-[230px] bg-blue-400 flex items-center justify-center'>
        <h1 className='heading'>
            Submit Your Project
        </h1>
    </section>
    <ProjectForm />
    </>
  )
}

export default Create