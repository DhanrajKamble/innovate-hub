import React from 'react'
import Form from 'next/form'
import { SearchIcon } from 'lucide-react';

const SearchForm = () => {
  return (
    <Form 
        action="/"
        scroll={false}
        className='search-form relative'
    >
        <input type='text' name='query' defaultValue="" className='search-input' placeholder='Search Projects.....'/>
        <div className='flex gap-2'>
            {true && (
                <div>
                    Reset
                </div>
            )}
            <button type='submit' className='search-btn text-white'> 
                <SearchIcon className='size-5' />
            </button>
        </div>
    </Form>
  )
}

export default SearchForm