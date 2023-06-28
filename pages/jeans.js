import Link from "next/link";
import React, { useEffect, useState } from "react";
import mongoose from "mongoose";
import Image from "next/image";
import { useRouter } from "next/router";

const Jeans = () => {
  const [products, setProducts] = useState({});

  const getProducts = () => {
    fetch("https://average-pink-fly.cyclic.app/getjeans")
      .then((res) => res.json())
      .then((hood) => setProducts(hood.jeans));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-2 space-x-2 space-y-3">
            {Object.keys(products).length === 0 ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              Object.keys(products).map((item) => (
                <Link
                  href={`/products/${products[item].slug}`}
                  className="lg:w-80 md:w-1/2 bg-slate-100 p-2 w-full"
                  key={products[item].slug}
                >
                  <div>
                    <img
                      alt="ecommerce"
                      className="object-cover w-80 h-96 block"
                      src={products[item].img}
                    />
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className="mt-2">
                        {products[item].size.includes("S") && (
                          <span className="border-2 border-black rounded-md p-1 m-1">
                            S
                          </span>
                        )}
                        {products[item].size.includes("SM") && (
                          <span className="border-2 border-black rounded-md p-1 m-1">
                            SM
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border-2 border-black rounded-md p-1 m-1">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border-2 border-black rounded-md p-1 m-1">
                            L
                          </span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border-2 border-black rounded-md p-1 m-1">
                            XL
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border-2 border-black rounded-md p-1 m-1">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        {products[item].color.includes("Red") && (
                          <button className="border-2 border-gray-700 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Blue") && (
                          <button className="border-2 border-gray-700 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("White") && (
                          <button className="border-2 border-gray-500 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Black") && (
                          <button className="border-2 border-gray-700 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Green") && (
                          <button className="border-2 border-gray-700 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Purple") && (
                          <button className="border-2 border-gray-700 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Brown") && (
                          <button className="border-2 border-gray-700 ml-1 bg-orange-900 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Gray") && (
                          <button className="border-2 border-gray-700 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jeans;
