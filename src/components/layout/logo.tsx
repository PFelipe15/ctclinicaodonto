
 import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../app/assets/LogoQualidadeAlta.jpg'
 
const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center m-2 gap-2 justify-center  text-xl font-black   "
    >

      <Image
      src={logo}
      width={40}
      height={40}
      alt='Logo'
      className='rounded-lg h-[50px] w-[50px]' 
      />
       <span className="text-primary text-2xl hidden md:flex">Clinica CT</span>
    </Link>
  );
}

export default Logo;