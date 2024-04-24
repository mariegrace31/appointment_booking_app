import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IoSearch } from "react-icons/io5";
import React from 'react';

function CategorySearch() {
  return (
    <div className='flex flex-col items-center gap-2 mb-4'>
      <h2 className='font-bold text-3xl tracking-wide'>Find a Doctor</h2>
      <p className="text-gray-400 text-lg">Search for a doctor and book appointment in one click</p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search a Doctor..." />
        <Button type="submit">Search 
          <IoSearch className='w-6 h-4' />
        </Button>
        
    </div>
    </div>
  )
}

export default CategorySearch;
