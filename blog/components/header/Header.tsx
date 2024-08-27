import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-5 text-lg">
      <Image src="/a2sv-logo.svg" alt="a2sv logo" width={120} height={30} />
      <div className="flex gap-[25px] font-semibold text-[#565656]">
        <Link href="#">Home</Link>
        <Link href="#">Teams</Link>
        <Link href="#">Success Stories</Link>
        <Link href="#">About Us</Link>
        <Link
          href="#"
          className="border-b-4 rounded-b-sm font-bold text-xl border-b-[#264FAD] text-[#264FAD]"
        >
          Blogs
        </Link>
        <Link href="#">Get Involved</Link>
      </div>
      <div className="flex gap-[25px] font-bold">
        <button className="text-[#3C3C3C]">Login</button>
        <button className="text-white bg-[#264FAD] rounded-xl py-2 px-7">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
