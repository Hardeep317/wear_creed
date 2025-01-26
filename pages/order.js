
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function order() {
  const [product, setProduct] = useState({});
  const [prodmap, setProdmap] = useState({});

  const router = useRouter();
  const id = router.query._id;

  const getOrder = () => {

    const data = {
      id : id
    }
    fetch('https://wear-server.onrender.com/getorder', {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res2) => {
      setProduct(res2)
      setProdmap(res2.products)
    })
  }

  useEffect(() => {
    getOrder();
  }, [product])
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {Object.keys(product).length > 0 ? <div className="container px-5 py-24 mx-auto">
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
            <table>
              <thead className="border-b font-medium text-slate-300">
              <tr>
                  <th scope="col" className="px-6 py-4">
                  Description
                  </th>
                  <th scope="col" className="px-6 py-4">
                  Quantity
                  </th>
                  <th scope="col" className="px-6 py-4">
                  Size
                  </th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(prodmap).map((item) => {
              return (
                <tr
                  key={prodmap[item] + " " + Math.random().toString()}
                  className="border-b text-slate-300"
                >
                  <td className="whitespace-nowrap px-6 py-4 ">
                    {prodmap[item].title.slice(0, 10) + " " + prodmap[item].variant}
                  </td>
                  <td className="ml-auto whitespace-nowrap px-6 py-4 ">
                    {prodmap[item].qty}
                  </td>
                  <td className="ml-auto whitespace-nowrap px-6 py-4 ">
                    {prodmap[item].size}
                  </td>
                </tr>
              );
            })}
            </tbody>
            </table>
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
      </div> : <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>}
    </section>
  );
}

export default order;
