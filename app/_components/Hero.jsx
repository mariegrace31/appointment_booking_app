import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <Image
            alt="doctor"
            src="/doctors.jpg"
            width={800}
            height={800}
            className="absolute inset-0 rounded-3xl h-3/4 w-full object-cover"
          />
        </div>
      </div>
      
      <div className="relative flex items-center h-4/5 bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>
        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Welcome to <span className='text-primary'>ZoneDoctor</span> : Your Simple Solution for Booking Doctors!
          </h2>

          <p className="mt-4 text-gray-600">
          This is your go-to place for booking appointments with doctors. Whether you need a regular check-up, a special visit,
           or quick medical help, we're here to help. Our app is super easy to use, and we have lots of doctors for you to choose from. 
           Take charge of your health today by booking appointments with a few clicks. Your health matters to us, and we're here to help you out.
          </p>
          <Button className="mt-7">Find a Doctor</Button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero;
