'use client'
import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor';

const ProjectForm = () => {
   return (
      <div className="flex justify-center items-center ">
         <form action="/" className="project-form flex flex-col items-center">
            <div className="flex flex-col w-[70vw]">
               <label htmlFor="title" className="mb-1">Title</label>
               <Input
                  id="title"
                  name="title"
                  required
                  placeholder="Project Title"
                  className="w-full rounded-lg p-2 border-2 border-gray-500"
               />
            </div>

            <div>
               <label htmlFor="description" className='flex flex-col w-[70vw]'>Description</label>
               <Textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Project Description"
                  className="w-full rounded-lg p-2 border-2 border-gray-500"
               />
            </div>

            <div>
               <label htmlFor="category" className='flex flex-col w-[70vw]'>
                  Category
               </label>
               <Input
                  id="category"
                  name="category"
                  required
                  placeholder="Project Category(DIY, Electronics, NextJs, Java...)"
                  className="w-full rounded-lg p-2 border-2 border-gray-500"
               />
            </div>
            <div>
               <label htmlFor="category" className='flex flex-col w-[70vw]'>
                  Image Url
               </label>
               <Input
                  id="link"
                  name="link"
                  required
                  placeholder="Project Thumbnail Url"
                  className="w-full rounded-lg p-2 border-2 border-gray-500 mb-5"
               />
            </div>
            <div data-color-mode='light'>
               <label htmlFor="details">
                  Details
               </label>
               <MDEditor
               id='details'
               preview='edit'
               height={300}
               style={{borderRadius: 20, overflow: 'hidden'}}
               textareaProps={{
                  placeholder: 'Describe your project in detail.'
               }}
               previewOptions={{
                  disallowedElements: ['style']
               }}
               />
            </div>

         </form>
      </div>

   )
}

export default ProjectForm