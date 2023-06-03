import AppContext from "@/AppContext";
import React, {
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import Head from "next/head";
import Script from "next/script";
import $ from "jquery";
import { useRouter } from "next/router";

const Checkout = () => {
  const {
    userdetails,
    user,
    addToCart,
    cart,
    removeFromCart,
    clearCart,
    subt,
  } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userdetails.email);
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [isdisabled, setIsdisabled] = useState(true);
  const [pin, setPin] = useState("");

  let orderId;
  const router = useRouter();

  if (typeof window !== "undefined") {
    // Perform localStorage action
  }

  const getOrderId = () => {
    let settings = {
      url: "/api/orderid",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        amount: subt,
      }),
    };

    //creates new orderId everytime
    $.ajax(settings).done(function (response) {
      orderId = response.orderId;
    });
  };

  const getPin = () => {
    fetch("/api/checkpin")
      .then((res) => res.json())
      .then((res2) => setPin(res2));
  };
  useEffect(() => {
    if (user.value == null) {
      router.push("/login");
    }
    getOrderId();
    getPin();
  }, []);
  let oid = Math.random() * Date.now();

  const handleChange = (e) => {
    e.preventDefault();

    if (
      userdetails &&
      name.length > 3 &&
      pincode.length > 4 &&
      phone.length > 3
    ) {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }

    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "pincode") {
      setPincode(e.target.value);
      if (e.target.value.length === 6) {
        if (Object.keys(pin).includes(e.target.value)) {
          setState(pin[e.target.value][1]);
          setAddress(pin[e.target.value][0]);
        }
      }
      if (e.target.value.length < 6) {
        setState("");
        setAddress("");
      }
    }
  };

  return (
    <div>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"
      ></Script>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="mb-7 sm:w-4/5 md:w-4/6 text-white sm:m-auto py-5 md:py-10 block md:grid md:grid-cols-2 md:gap-3">
        <div className="m-auto w-4/5">
          <p className="my-2">Name :</p>
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange(e)}
            name="name"
            className="py-1 px-2 rounded-lg w-full text-black md:w-4/6"
          />
        </div>
        <div className="m-auto w-4/5">
          <p className="my-2">Email :</p>
          <input
            type="email"
            value={userdetails.email}
            name="email"
            className="py-1 px-2 rounded-lg w-full text-black md:w-4/6"
            readonly
          />
        </div>

        <div className="m-auto w-4/5">
          <p className="my-2">Contact No. :</p>
          <input
            type="number"
            value={phone}
            onChange={(e) => handleChange(e)}
            name="phone"
            className="py-1 px-2 rounded-lg w-full text-black md:w-4/6"
          />
        </div>
        <div className="m-auto w-4/5">
          <p className="my-2">Pin Code :</p>
          <input
            type="number"
            value={pincode}
            onChange={(e) => handleChange(e)}
            name="pincode"
            className="py-1 px-2 rounded-lg w-full text-black md:w-4/6"
          />
        </div>
        <div className="m-auto w-4/5">
          <p className="my-2">State :</p>
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => handleChange(e)}
            className="py-1 px-2 rounded-lg w-full text-black md:w-4/6"
            readOnly
          />
        </div>

        <div className="m-auto w-4/5">
          <p className="my-2">City :</p>
          <input
            type="text"
            value={address}
            onChange={(e) => handleChange(e)}
            name="address"
            className="py-1 px-2 rounded-lg w-full text-black md:w-4/6"
            readOnly
          />
        </div>
      </div>

      <div className="md:my-20 text-center">
        <h1 className="text-gray-300 text-2xl text-center">Item Details</h1>
        <ol>
          {cart &&
            Object.keys(cart).map((item) => {
              return (
                <li
                  className="mt-4 p-2 md:p-4 w-5/6 md:w-2/6 m-auto text-gray-300 rounded-xl border-2 border-slate-200 "
                  key={cart[item].slug}
                >
                  <p className="inline mx-7">{cart[item].title}</p>
                  <p className="inline mx-7">{cart[item].price}</p>
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

        <h1 className="text-gray-300 text-2xl text-center my-7">
          {" "}
          Payable Amount : {subt}
        </h1>
        <button
          disabled={isdisabled}
          onClick={async (e) => {
            let options = {
              key: "rzp_test_lF6z6BhaRshzO2", // Enter the Key ID generated from the Dashboard
              amount: subt*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: "INR",
              name: userdetails.name,
              description: "Making the best possible",
              image:
                "https://cdn.shopify.com/s/files/1/0505/4631/1368/files/creed-wear_1200x1200.png?v=1613547203",
              order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              handler: function (response) {
                response.orderId = orderId;

                let settings = {
                  url: "/api/verify",
                  method: "POST",
                  timeout: 0,
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify({ response }),
                };

                $.ajax(settings).done(function (response) {});
                const sendData = {
                  email: userdetails.email,
                  orderId: oid,
                  products: cart,
                  address: address,
                  amount: subt,
                };

                fetch("/api/saveorders", {
                  method: "POST",
                  body: JSON.stringify(sendData),
                  headers: {
                    "content-type": "application/json",
                  },
                }).then(() => {
                  clearCart();
                  router.push("/orders");
                });
              },
            };
            let rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", function (response) {});
            rzp1.open();
            e.preventDefault();
          }}
          className="disabled:bg-gray-400 bg-gray-600 p-2 w-32 items-center text-lg rounded-lg text-white"
        >
          Pay {subt}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
