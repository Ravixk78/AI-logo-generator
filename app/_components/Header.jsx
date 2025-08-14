import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div> 
         <Image src={'/logo.svg'} alt='Logo' width={180} height={100} />
    </div>
  );
}

export default Header