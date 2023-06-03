import Order from "@/models/Order";
import mongoose from "mongoose";
import React from "react";

function order({ product, prodmap }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Wear Creed
            </h2>
            <h1 className="text-gray-200 text-3xl title-font font-medium mb-4">
              OrderId : #{product.orderId}
            </h1>
            <p className="text-gray-200 leading-relaxed mb-4">
              Your order has been placed successfully.
            </p>
            <div className="flex justify-between mb-4">
              <a className="flex-grow text-center text-gray-300  text-lg px-1">
                Description
              </a>
              <a className="flex-grow text-center text-gray-300  text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow text-center text-gray-300  text-lg px-1">
                Size
              </a>
            </div>
            {Object.keys(prodmap).map((item) => {
              return (
                <div
                  key={prodmap[item] + " " + Math.random().toString()}
                  className="flex justify-around border-t border-gray-200 py-2"
                >
                  <span className="text-gray-300">
                    {prodmap[item].title.slice(0, 10) + " " + prodmap[item].variant}
                  </span>
                  <span className="ml-auto text-gray-300">
                    {prodmap[item].qty}
                  </span>
                  <span className="ml-auto text-gray-300">
                    {prodmap[item].size}
                  </span>
                </div>
              );
            })}

            <div className="flex">
              <span className="title-font font-medium my-5 text-2xl text-gray-400">
                ₹{product.amount}
              </span>
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://t4.ftcdn.net/jpg/04/53/71/03/360_F_453710303_TjrEk8RvALJstGF2hVrQX5NNYGFupO6j.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Order.findOne({ _id: context.query._id });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      prodmap: JSON.parse(JSON.stringify(product.products)),
    },
  };
}
export default order;
