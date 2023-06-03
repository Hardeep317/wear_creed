import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AppContext from "@/AppContext";
import Products from "@/models/Product";
import mongoose from "mongoose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Slug({ product, variants, slug }) {
  const { addToCart, user } = useContext(AppContext);
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);
  const router = useRouter();

  const checkLog = () => {
    if (user.value === null) {
      setTimeout(() => {
        router.push("/login");
      }, 1000);
      toast.warn("Please login first!", {
        position: "top-right",
        toastId: "warn 1",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "dark",
      });
    }
  };
  useEffect(() => {
    checkLog();
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:max-h-full .h-64 object-cover object-center rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Wear Creed
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">
                {product.title} {`(${color}/ ${size})`}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-white">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("Red") &&
                    Object.keys(variants["Red"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Red");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Red"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${
                          color == "Red" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Blue") &&
                    Object.keys(variants["Blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Blue");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Blue"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none ${
                          color == "Blue" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("White") &&
                    Object.keys(variants["White"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("White");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["White"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-white rounded-full w-6 h-6 focus:outline-none ${
                          color == "White" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Black") &&
                    Object.keys(variants["Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Black");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Black"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${
                          color == "Black" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Green") &&
                    Object.keys(variants["Green"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Green");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Green"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none ${
                          color == "Green" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Purple") &&
                    Object.keys(variants["Purple"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Purple");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Purple"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none ${
                          color == "Purple" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Brown") &&
                    Object.keys(variants["Brown"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Brown");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Brown"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-orange-900 rounded-full w-6 h-6 focus:outline-none ${
                          color == "Brown" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Gray") &&
                    Object.keys(variants["Gray"]).includes(size) && (
                      <button
                        onClick={() => {
                          setColor("Gray");
                          setSize(size);
                          let url = `http://localhost:3000/products/${variants["Gray"][size]["slug"]}`;
                          router.push(url);
                        }}
                        className={`border-2  ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none ${
                          color == "Gray" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        setColor(color);
                        setSize(e.target.value);
                        let url = `http://localhost:3000/products/${
                          variants[color][e.target.value]["slug"]
                        }`;
                        router.push(url);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    >
                      {Object.keys(variants[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(variants[color]).includes("SM") && (
                        <option value={"SM"}>SM</option>
                      )}
                      {Object.keys(variants[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(variants[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(variants[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  ₹ {product.price}
                </span>
                <button
                  onClick={() => {
                    user.value !== null &&
                      addToCart(
                        slug,
                        1,
                        product.title,
                        color,
                        size,
                        product.price
                      );
                  }}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Products.findOne({ slug: context.query.slug });
  let variants = await Products.find({ title: product.title });
  let slug = context.query.slug;
  let colorSizeSlug = {};

  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
      slug: slug,
    },
  };
}

export default Slug;
