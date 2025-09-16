"use client";


const Footer = () => {
  const year=new Date().getFullYear()

  return (
    <div className="dark:border-[#ffffff60] h-[100px] flex flex-co  border-t border-black mt-6">
      <footer
     
        className=" text-[14px] w-full items-center font-ppneue  flex justify-between  text-center pt-5 px-10"
      >
        <p>© {year} humanly. All rights reserved.</p>
        <p>Lagos, Nigeria</p>
      </footer>
    </div>
  );
};
export default Footer;
