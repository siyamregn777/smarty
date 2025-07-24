"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { BsBookmarks } from "react-icons/bs";


const Header = () => {
  const dispatch = useDispatch();
  const [IsSrolled, setIsScrolled]=useState(false)

  const { data: session } = useSession();
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );

  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY > 10) 
    }
    window.addEventListener('scroll',handleScroll)

    return ()=>window.removeEventListener('scroll',handleScroll)
  },[])
 
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);
  return (
    // <div className= "bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">// </div>
    // <div className= "[mask-image:linear-gradient(to_right,transparent, black, transparent)]"></div>
    // <div className='bg-gradient-to-r from-orange-500 to-orange-800'></div>
    <div className={`bg-bodyColor h-20 top-0 sticky ml-10px z-50 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#13EC2,#EAEEFE_66%)] ${IsSrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,10,0.9)]' : ""}`}>
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start ml-3">
        <Logo />
        {/* Search Field */}
        
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none bg-white"
          />
        </div>
        <div className="justify-center items-center p-5 ">
            <Link className="px-5 py-1 m-2 hover:bg-gradient-to-r from-gray-300 to-white hover:bg-gray-400 border rounded-[20px] transition-all duration-600" href="/">Home</Link>
            <Link className="px-5 py-1 m-2 hover:bg-gradient-to-r from-gray-300 to-white hover:bg-gray-400 border rounded-[20px] transition-all duration-600" href="/about">About_Us</Link>
            <Link className="px-5 py-1 m-2 hover:bg-gradient-to-r from-gray-300 to-white hover:bg-gray-400 border rounded-[20px] transition-all duration-600" href="/contact">Contact</Link>
            <Link className="px-5 py-1 m-2 hover:bg-gradient-to-r from-gray-300 to-white hover:bg-gray-400 border rounded-[20px] transition-all duration-600" href="/products">Products</Link>
          </div>
        {/* Login/Register */}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv cursor-pointer">
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        {/* Cart button */}
        <Link href={"/cart"}>
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">
              <FormattedPrice amount={totalAmt ? totalAmt : 0} />
            </p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        {/* user Image */}
        {session && (
          <Image
            src={session?.user?.image as string}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        {/* Order button */}
        {orderData?.order?.length > 0 && session && (
          <Link
            href={"/order"}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <BsBookmarks className="text-2xl" />
            <p className="text-sm font-semibold">Orders</p>
          </Link>
        )}
        {/* Logout button */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;