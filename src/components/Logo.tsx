import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="ml-10">
              <Link href="/">
                <h1 className="tracking-tight  font-bold text-2xl cursor-pointer transition-all duration-200">
                  All<span className="text-red-400 hover:text-green-500">in</span>one.
                </h1>
              </Link>
              
   </div>
  );
};

export default Logo;
