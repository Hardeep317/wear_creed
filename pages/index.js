// import { Inter } from "next/font/google";
import AppContext from "@/AppContext";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {user} = useContext(AppContext);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Wear Creed - the fashion you want</title>
      </Head>
      <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://d2fzf9bbqh0om5.cloudfront.net/images/5514/original/how_assassins_creed_is_changing_mens_fashion.jpg?1548055173')] h-[550px]">
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-gray-300 md:px-12">
            <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight">
              Are you ready <br /><span>for an adventure</span>
            </h2>
            <button type="button"
            onClick={() => { 
              if(!user){
                router.push('/login')
              }else{
                router.push('/tshirts')
              }
             }}
              className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl text-gray-400 font-bold">
      There are good reasons to
      <u className="text-primary dark:text-primary-400">be proud</u>
    </h2>
    <div className="grid md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 text-gray-400 p-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-primary text-gray-400  dark:text-primary-400">
          1000
        </h3>
        <h5 className="text-lg font-medium text-gray-400 ">
          Happy customers
        </h5>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="h-6 w-6  text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-primary text-gray-400 dark:text-primary-400">
          70%
        </h3>
        <h5 className="text-lg font-medium text-gray-400">
          Growth
        </h5>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
            stroke="currentColor" className="h-6 w-6  text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-primary text-gray-400 dark:text-primary-400">
          49
        </h3>
        <h5 className="text-lg font-medium text-gray-400">
          Projects
        </h5>
      </div>
    </div>
  </section>
</div>


      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl  text-gray-400 font-bold">
            Meet the <u className="text-primary dark:text-primary-400">team</u>
          </h2>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                    className="w-full rounded-t-lg"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg
                    className="absolute text-white dark:text-neutral-700 left-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="currentColor"
                      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Maria Smith</h5>
                  <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                    Frontend Developer
                  </p>
                  <ul className="mx-auto flex list-inside justify-center">
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                    className="w-full rounded-t-lg"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg
                    className="absolute text-white dark:text-neutral-700  left-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="currentColor"
                      d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Darren Randolph</h5>
                  <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                    Marketing expert
                  </p>
                  <ul className="mx-auto flex list-inside justify-center">
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                    className="w-full rounded-t-lg"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                  </a>
                  <svg
                    className="absolute text-white dark:text-neutral-700 left-0 bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="currentColor"
                      d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Ayat Black</h5>
                  <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                    Web designer
                  </p>
                  <ul className="mx-auto flex list-inside justify-center">
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <div className="flex justify-center">
      <div className="max-w-[700px] text-center">
        <p className="mb-6 font-bold text-gray-400 uppercase text-primary dark:text-primary-400">
          Features
        </p>
        <h2 className="mb-6 text-3xl text-gray-500 font-bold">Why is it so great?</h2>
        <p className="mb-16 text-gray-400">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
          iaculis malesuada. Aenean gravida magna orci, non efficitur est
          porta id. Donec magna diam.
        </p>
      </div>
    </div>

    <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 h-5 w-5 text-gray-400 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Support 24/7</p>
            <p className="text-gray-400">
              Pellentesque mollis, metus nec fringilla aliquam
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 text-gray-400 h-5 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Tracking</p>
            <p className="text-gray-400">
              Magna lacus iaculis elit, quis pharetra varius.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 text-gray-400 h-5 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500" >Reporting</p>
            <p className="text-gray-400">
              Pellentesque varius ex vel consequat quis.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 h-5 text-gray-400 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Analytics</p>
            <p className="text-gray-400">
              Vestibulum gravida iaculis nisl, vel lobortis eros.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 text-gray-400 h-5 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Huge community</p>
            <p className="text-gray-400">
              Praesent vulputate lacus bibendum augue .
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 text-gray-400 h-5 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Easy to use</p>
            <p className="text-gray-400">
              Sed mauris ex, imperdiet sit amet nisl ac, ultrices.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 h-5 text-gray-400 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Frequent updates</p>
            <p className="text-gray-400">
              Aenean lectus ex, placerat id tellus in eros.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex">
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" className="mr-3 h-5 text-gray-400 w-5 text-success">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-2 grow">
            <p className="mb-1 font-bold text-gray-500">Responsive</p>
            <p className="text-gray-400">
              Donec consequat orci quis volutpat imperdiet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


<div className="container my-24 mx-auto border-t-2 border-white pt-6 md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl  text-gray-400 font-bold">Testimonials</h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 className="mb-2 text-lg font-bold text-gray-400">Maria Smantha</h5>
        <h6 className="mb-4 font-medium text-primary text-gray-400 dark:text-primary-400">
          Web Developer
        </h6>
        <p className="mb-4 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
          id officiis hic tenetur quae quaerat ad velit ab hic.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block  w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul className="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning text-amber-500">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div className="mb-12 md:mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 className="mb-2 text-lg text-gray-400 font-bold">Lisa Cudrow</h5>
        <h6 className="mb-4 text-gray-400 font-medium text-primary dark:text-primary-400">
          Graphic Designer
        </h6>
        <p className="mb-4 text-gray-400">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid commodi.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6 ">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul className="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div className="mb-0">
        <div className="mb-6 flex justify-center">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
            className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 className="mb-2 text-lg text-gray-400 font-bold">John Smith</h5>
        <h6 className="mb-4 text-gray-400 font-medium text-primary dark:text-primary-400">
          Marketing Specialist
        </h6>
        <p className="mb-4 text-gray-400">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul className="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-amber-500 text-warning">
              <path fill="currentColor"
                d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>
      {/* <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script> */}
    </div>
  );
}
