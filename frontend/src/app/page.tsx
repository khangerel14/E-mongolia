'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className='relative w-full h-screen'>
      <div onClick={togglePopover} className='cursor-pointer'>
        <Image
          src='/background.jpg'
          alt='Background'
          fill
          className='object-cover w-full h-full'
          quality={90}
        />
      </div>
      <div
        onClick={togglePopover}
        className={`absolute bottom-0 left-0 w-full h-full bg-black/50 transform transition-transform duration-300 ease-in-out ${
          isPopoverOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Image
          src='/popover.jpg'
          alt='Popover'
          fill
          className='object-cover w-full h-full'
          quality={90}
        />
      </div>
    </div>
  );
}
