import AppContext from "@/AppContext";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subt, setSubt] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [userdetails, setUserDetails] = useState("");
  const router = useRouter();

  const saveCart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let total = 0;
    let keys = Object.keys(mycart);

    for (let i = 0; i < keys.length; i++) {
      total += cart[keys[i]].price * cart[keys[i]].qty;
    }
    setSubt(total);
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }

    const token = localStorage.getItem("token");
    const userCredentials = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setUser({ value: token });
      setUserDetails(userCredentials);
    }
  }, [router.query]);

  function addToCart(itemcode, qty, title, variant, size, price) {
    let newCart = cart;

    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newCart[itemcode] = { qty: 1, title, variant, size, price };
    }

    setCart(newCart);
    saveCart(newCart);
  }

  function removeFromCart(itemcode, qty, title, variant, size, price) {
    let newCart = cart;

    if (itemcode in cart && newCart[itemcode].qty > 0) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }

    if (newCart[itemcode].qty <= 0) {
      toast.error("Item Removed from cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      delete newCart[itemcode];
    }

    setCart(newCart);
    saveCart(newCart);
  }

  function clearCart() {
    setCart({});
    saveCart({});
    toast.warn("Cart Cleared", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setCart({});
    saveCart({});
    localStorage.removeItem("user");
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={11}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppContext.Provider
        value={{
          userdetails,
          user,
          logout,
          addToCart,
          cart,
          removeFromCart,
          clearCart,
          subt,
        }}
      >
        <Navbar />
        <Component cart={cart} {...pageProps} />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}
