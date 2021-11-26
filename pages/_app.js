/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import Footer from "./api/footer";

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 bg-black">
        <p className="text-4xl font-bold text-white">Kryptopixel Marketplace</p>
        <p className="text-2xl mb-4 text-green-500">
          Promote Pixel Art with NFTS{" "}
        </p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500 hover:text-gray-50">Home</a>
          </Link>
          <Link href="/create-items">
            <a className="mr-6 text-pink-500 hover:text-gray-50">Sell NFTS</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500 hover:text-gray-50">
              NFTS purchased
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500 hover:text-gray-50">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <br />
      <h1 className=" text-center text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
        Welcome to Kryptopixel Marketplace
      </h1>
      <br />
      <hr className="border-b border-green-400 w-1/2 mx-auto" />
      <br />
      <div className="flex justify-evenly">
        <div className="text-2xl mb-4 text-gray-900 font-bold">
          Create and sell a digital asset
        </div>
        <div className="text-2xl mb-4 text-gray-900 font-bold">
          Visit your dashboard
        </div>
        <div className="text-2xl mb-4 text-gray-900 font-bold">
          Buy and see your NFTS
        </div>
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Marketplace;
