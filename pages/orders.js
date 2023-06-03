import Order from "@/pages/api/models/Order";
import React, { useContext, useEffect, useState } from "react";
import mongoose from "mongoose";
import Link from "next/link";
import AppContext from "@/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function orders() {
  const {user, userdetails, addToCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  let data = {
    email: userdetails.email,
  };

  const getOrders = () => {
    fetch("/api/getorders", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res2) => setProducts(res2));
  };
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
    if (userdetails) {
      getOrders();
    }
    checkLog();
  }, [userdetails, user.value]);
  return (
    <div className="flex flex-col w-4/5 m-auto">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium text-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #Order Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Order Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  products.map((item) => {
                    return (
                      <tr key={item._id} className="border-b text-slate-300">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.orderId}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.address}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.amount}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <Link href={`/order?_id=${item._id}`}> Details</Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//     if (!mongoose.connections[0].readyState) {
//       await mongoose.connect(process.env.MONGO_URI);
//     }
//     let user;
//     if (typeof window !== 'undefined') {
//        user = JSON.parse(localStorage.getItem('user'));
//     }
//     let product;
//     if(user){
//      product = await Order.find({email: user.email});
//     }

//     return {
//       props: {
//         products: JSON.parse(JSON.stringify(product))
//       },
//     };
//   }
export default orders;
