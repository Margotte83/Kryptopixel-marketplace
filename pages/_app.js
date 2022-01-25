/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import Footer from "./api/footer";

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 bg-black">
        <p className="text-4xl font-bold text-pink-600">
          KryptoPixel Marketplace 🖼
        </p>
        <p className="text-2xl mb-4  text-indigo-500">
          An original marketplace to buy and sell NFTs{" "}
        </p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-gray-50 hover:text-pink-500">Home</a>
          </Link>
          <Link href="/create-items">
            <a className="mr-6 text-gray-50 hover:text-pink-500">Sell NFTS</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-gray-50 hover:text-pink-500">
              NFTS purchased
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-gray-50 hover:text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <br />
      <h1 className=" text-center text-6xl font-normal leading-normal mt-0 mb-2 text-pink-600">
        For an explosion of trendy NFTs 💣
      </h1>
      <br></br>
      <hr className="border-b border-yellow-400 w-1/2 mx-auto" />
      <br></br>
      <br></br>

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Marketplace;
