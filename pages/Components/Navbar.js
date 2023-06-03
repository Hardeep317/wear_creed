import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import AppContext from "@/AppContext";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

const Navbar = () => {
  const ref = useRef();
  const [progress, setProgress] = useState(0);
  const [toggleStatus, setToggleStatus] = useState(false);
  const router = useRouter();

  const { user, logout, addToCart, cart, removeFromCart, clearCart, subt } =
    useContext(AppContext);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(30);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [user.value]);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <LoadingBar
        color="#fafafa"
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex flex-col overflow-x-hidden dark:bg-gray-900 text-white md:flex-row justify-between p-5 items-center ">
        <Link href={"/"}>
          <img
            src="/logo.png"
            className="cursor-pointer"
            width={200}
            height={20}
          />
        </Link>
        <ul className="flex justify-around w-64 mx-auto py-2 mt-4 md:mt-0">
          <Link href={"/tshirts"}>
            <li className="cursor-pointer active:text-white hover:text-gray-400 hover:text-xl">
              T-Shirts
            </li>
          </Link>
          <Link href={"/jeans"}>
            <li className="cursor-pointer active:text-white hover:text-gray-400 hover:text-xl">
              Jeans
            </li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="cursor-pointer active:text-white hover:text-gray-400 hover:text-xl">
              Hoodies
            </li>
          </Link>
        </ul>
        <div className="md:flex md:justify-between items-center absolute right-1 md:right-8 m-auto">
          <div
            onMouseOver={() => {
              setToggleStatus(true);
            }}
            onMouseOut={() => {
              setToggleStatus(false);
            }}
          >
            {user.value && (
              <MdAccountCircle className="mr-4 mb-2 md:mb-0 text-2xl cursor-pointer" />
            )}
            {toggleStatus && (
              <div className="absolute top-6 p-3 right-7 w-32 text-center rounded-lg bg-slate-600">
                <Link href="/orders">
                  <p className="p-2 hover:text-slate-300" onClick={() => {setToggleStatus(false)}}>My Orders</p>{" "}
                </Link>
                <p
                  className="p-2 hover:text-slate-300 cursor-pointer"
                  onClick={() => {
                    logout();
                    setToggleStatus(false);
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
          {user.value === null && (
            <Link href={"/login"}>
              <button className="bg-gray-600 md:px-3 my-1 md:py-1 md:mr-3 text-base p-1 md:text-base rounded-md hover:bg-gray-700">
                Login
              </button>
            </Link>
          )}
          <BsFillCartFill
            onClick={toggleCart}
            className="text-xl md:text-2xl sm:mr-1 text-center cursor-pointer"
          />
        </div>
        <div
          ref={ref}
          className="sideCart fixed overflow-y-scroll top-0 right-0 w-80 z-10 md:w-80 h-full bg-gray-600 text-white p-10  transform transition-transform translate-x-full"
        >
          <AiFillCloseCircle
            onClick={toggleCart}
            className="absolute top-10 right-8 text-2xl cursor-pointer"
          />
          <h2 className="text-bold text-2xl">Shopping Cart</h2>
          {Object.keys(cart).length == 0 && (
            <div>
              <h1>Your Cart is Empty</h1>
            </div>
          )}
          <ol>
            {Object.keys(cart).map((item) => {
              return (
                <li
                  className="mt-4 w-64 rounded-xl border-2 border-slate-200 p-5"
                  key={cart[item].slug}
                >
                  <p className="inline mx-2">{cart[item].title +" "+ cart[item].size +" " +cart[item].variant}</p>
                  <p className="inline mx-2">{cart[item].price}</p>
                  <div className="flex content-center justify-center mt-3">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          item,
                          1,
                          cart[item].title,
                          cart[item].red,
                          cart[item].size,
                          cart[item].price
                        );
                      }}
                      className="mr-3 text-2xl cursor-pointer"
                    />
                    <p className="my-auto">{cart[item].qty}</p>
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          item,
                          1,
                          cart[item].title,
                          cart[item].red,
                          cart[item].size,
                          cart[item].price
                        );
                      }}
                      className="ml-3 text-2xl cursor-pointer"
                    />
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-4">
            <Link href={"/checkout"}>
              <button onClick={toggleCart} className="text-l text-gray-100 bg-cyan-600 px-3 py-2 mx-3 rounded-lg">
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="text-l text-gray-100 bg-cyan-600 px-3 py-2 mx-3 rounded-lg"
            >
              Clear Cart
            </button>
          </div>
          <h1 className="text-center mt-7 text-xl">Total : ₹{subt}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
