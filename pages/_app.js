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
      <div className="container mx-auto px-5 py-4">
        <image
          className="rounded mt-4"
          width="350"
          src="./assets/light-bulb.png"
        />
        <div class="flex justify-around ...">
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
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Marketplace;
