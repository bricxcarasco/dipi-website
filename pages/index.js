/* eslint-disable react/jsx-no-target-blank */
import Image from "next/image";

import Navbar from "components/Navbars/MainNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <Navbar transparent />
      <main>
        <br />
        <br />
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <Image
            width="577"
            height="154"
            className="content-center items-center"
            src={"/img/wealthid.jpg"}
          ></Image>
        </div>
        <section className="pb-20 bg-white -mt-24">
          <br />
          <div className="container mx-auto px-2">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-yellow-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-gray-200"
                      style={{
                        backgroundColor: "#FEF9EB",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="text-yellow-400 fas fa-dollar-sign text-2xl"
                        style={{ color: "#F8A702", fontSize: "30px" }}
                      ></i>
                    </div>
                    <h6 className="text-xl font-semibold">EDIPI Pool</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Earn Digital Passive Income on a guaranteed APRs
                    </p>
                    <a href="false" style={{ color: "#F8A702" }}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-yellow-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-gray-200"
                      style={{
                        backgroundColor: "#FEF9EB",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="text-yellow-400 fas fa-dollar-sign text-2xl"
                        style={{ color: "#F8A702", fontSize: "30px" }}
                      ></i>
                    </div>
                    <h6 className="text-xl font-semibold">DIPI Swap</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      WAP/Pools/LPs/Exchange - Digital Passive Income (coming
                      soon)
                    </p>
                    <a href="false" style={{ color: "#F8A702" }}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-yellow-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-gray-200"
                      style={{
                        backgroundColor: "#FEF9EB",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="text-yellow-400 fas fa-dollar-sign text-2xl"
                        style={{ color: "#F8A702", fontSize: "30px" }}
                      ></i>
                    </div>
                    <h6 className="text-xl font-semibold">DIPI Pool</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      WAP/Pools/LPs/Exchange - Digital Passive Income (coming
                      soon)
                    </p>
                    <a href="false" style={{ color: "#F8A702" }}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 bg-white -mt-24">
          <div className="container mx-auto px-2">
            <div className="justify-center flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-yellow-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-gray-200"
                      style={{
                        backgroundColor: "#FEF9EB",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="text-yellow-400 fas fa-dollar-sign text-2xl"
                        style={{ color: "#F8A702", fontSize: "30px" }}
                      ></i>
                    </div>
                    <h6 className="text-xl font-semibold">DIPILP</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Earn and Stake Liquidity Tokens with DIPILP
                    </p>
                    <a href="false" style={{ color: "#F8A702" }}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-yellow-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-gray-200"
                      style={{
                        backgroundColor: "#FEF9EB",
                        width: "80px",
                        height: "80px",
                      }}
                    >
                      <i
                        className="text-yellow-400 fas fa-dollar-sign text-2xl"
                        style={{ color: "#F8A702", fontSize: "30px" }}
                      ></i>
                    </div>
                    <h6 className="text-xl font-semibold">GDIPI</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Governance Token on the future of DIPI
                    </p>
                    <a href="false" style={{ color: "#F8A702" }}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
