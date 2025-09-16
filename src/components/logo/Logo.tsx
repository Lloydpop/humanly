
import Link from "next/link";
import Image from "next/image";
import brand from '../../../public/img/logo.jpg'

import React from "react";

interface LogoProps {
  fontClass?: string;
  colorClass?: string; 
  extraClass?: string;  
  
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  fontClass,

  extraClass = "filter invert-0 dark:invert-[100%]",
  onClick
}) => {
  return (
   <Link
   href='/home'
  onClick={onClick}
  className={`flex font-[700] font-ppneue items-center gap-4 w-fit`}
>
<Image
  src={brand.src}
  alt="logo"
  height={100}
  width={100}
  className={` ${extraClass}`}
/>


</Link>

  );
};

export default Logo