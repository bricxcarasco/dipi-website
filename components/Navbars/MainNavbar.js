import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <Image
                width="180"
                height="50"
                className="content-center items-center"
                src={"/img/wealthid.jpg"}
              ></Image>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-block ml-2 mr-4">Trade</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-block ml-2 mr-4">Loans</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="ml-2 text-indigo-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                    <span className="relative inline-block ml-8">
                      <i
                        className="text-indigo-800 far fa-bell text-2xl leading-lg "
                        style={{ color: "#342E59" }}
                      />
                      <span
                        className="absolute top-0 right-2 inline-block w-5 h-5 transform translate-x-1/2 -translate-y-1/2 text-white bg-yellow-500 rounded-full"
                        style={{ backgroundColor: "#F8A702", top: "-10px" }}
                      >
                        2
                      </span>
                    </span>
                  </div>
                  <span className="lg:hidden inline-block ml-2">
                    Notification
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-indigo-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                    <span className="relative inline-block ml-8">
                      <i
                        className="text-indigo-800 far fa-comment-dots text-2xl leading-lg "
                        style={{ color: "#342E59" }}
                      />
                      <span
                        className="absolute top-0 right-2 inline-block w-5 h-5 transform translate-x-1/2 -translate-y-1/2 text-white bg-yellow-500 rounded-full"
                        style={{ backgroundColor: "#F8A702", top: "-10px" }}
                      >
                        2
                      </span>
                    </span>
                  </div>
                  <span className="lg:hidden inline-block ml-2">Chat</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-indigo-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                    <span className="relative inline-block ml-8">
                      <i
                        className="text-indigo-800 fas fa-gift text-2xl leading-lg "
                        style={{ color: "#342E59" }}
                      />
                      <span
                        className="absolute top-0 right-2 inline-block w-5 h-5 transform translate-x-1/2 -translate-y-1/2 text-white bg-yellow-500 rounded-full"
                        style={{ backgroundColor: "#F8A702", top: "-10px" }}
                      >
                        2
                      </span>
                    </span>
                  </div>
                  <span className="lg:hidden inline-block ml-2">Gift</span>
                </a>
              </li>
              <li className="flex items-center">
                <button
                  className="bg-yellow-500 active:bg-yellow-500 text-white px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  style={{ backgroundColor: "#F8A702" }}
                  type="button"
                  id="connectButton"
                >
                  <i className="fas"></i> Connect
                </button>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="text-indigo-800 p-3 text-center text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500"
                    style={{ backgroundColor: "#F8A702" }}
                  >
                    <i className="text-indigo-800 fas fa-cog text-2xl leading-lg " />
                  </div>
                  <span className="lg:hidden inline-block ml-2">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
