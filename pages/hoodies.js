import Products from "@/pages/api/models/Product";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import mongoose from "mongoose";
import Image from "next/image";

const Hoodies = ({ products }) => {

  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center -m-2 space-x-2 space-y-3">
            {Object.keys(products).length === 0 ? (
              <div className="text-center">
                {" "}
                <Image
                  src="/out-of-stock.jpg"
                  width={500}
                  height={500}
                  className="m-auto mb-7"
                  alt="Picture of the author"
                />
                <h1 className="text-2xl text-red-700">
                  Oops! Out of stock. We will notify you as soon as the stock
                  will be available
                </h1>{" "}
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

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const products = await Products.find({ category: "hoodies" });

  let hoodies = {};
  for (let item of products) {
    if (item.title in hoodies) {
      if (
        !hoodies[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        hoodies[item.title].color.push(item.color);
      }

      if (
        !hoodies[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        hoodies[item.title].size.push(item.size);
      }
    } else {
      hoodies[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        hoodies[item.title].color = [item.color];
        hoodies[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(hoodies)) },
  };
}
export default Hoodies;
