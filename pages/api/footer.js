/*Page footer with copyright*/

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div
        className="
        container
        px-5
        py-24
        mx-auto
        flex
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
        flex-wrap flex-col
      "
      >
        <div
          className="
          flex-grow flex flex-wrap
          md:pl-20
          -mb-10
          md:mt-0
          mt-10
          md:text-left
          text-center
        "
        >
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
              title-font
              font-medium
              text-gray-400
              tracking-widest
              text-sm
              mb-3
            "
            >
              Docs
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://docs.polygon.technology/docs/develop/getting-started"
                  className="text-white hover:text-red-400"
                >
                  Developers
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
              title-font
              font-medium
              text-gray-400
              tracking-widest
              text-sm
              mb-3
            "
            >
              Social networks
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href=" https://www.facebook.com/cinecapsuleofficial
                  "
                  className="text-white hover:text-red-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cine_capsule/
                  "
                  className="text-white hover:text-red-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href=" https://twitter.com/cine_capsule
                  "
                  className="text-white hover:text-red-400"
                >
                  Twitter
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
              title-font
              font-medium
              text-gray-400
              tracking-widest
              text-sm
              mb-3
            "
            >
              Open source
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://github.com/Margotte83/Kryptopixel-marketplace"
                  className="text-white hover:text-red-400"
                >
                  Github
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
              title-font
              font-medium
              text-gray-400
              tracking-widest
              text-sm
              mb-3
            "
            >
              Inspiration
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://pixelchain.art/"
                  className="text-white hover:text-red-400"
                >
                  PixelChain
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href=""
            className="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            text-yellow-300
          "
          >
            <i className="fas fa-cubes fa-lg text-purple-500"></i>
            <span className="ml-3 text-ms">
              How to use CineCapsule 3.0?
              <p className="text-white">
                Connect your Metamask wallet to use this DApp. Polygon-Mainnet
                or Mumbai-Testnet network is required.
              </p>
            </span>
          </a>
        </div>
      </div>
      <div className="bg-black">
        <div
          className="
          container
          mx-auto
          py-4
          px-5
          flex flex-wrap flex-col
          sm:flex-row
        "
        >
          <p className="text-white text-sm text-center sm:text-left">
            CineCapsule 3.0 © 2021 Copyright | Built with ❤️ by :
            <a
              href=""
              className="text-gray-100 ml-1 hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              CineCapsule Dev Team
            </a>
          </p>
          <span
            className="
            inline-flex
            sm:ml-auto sm:mt-0
            mt-2
            justify-center
            sm:justify-start
          "
          >
            <a href="" className="text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="" className="ml-3 text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
