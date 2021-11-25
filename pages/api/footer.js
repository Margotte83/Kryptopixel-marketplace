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
              text-gray-900
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
                  href="https://polygon.technology/"
                  className="text-gray-600 hover:text-pink-400"
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
              text-gray-900
              tracking-widest
              text-sm
              mb-3
            "
            >
              Community
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="" className="text-gray-600 hover:text-pink-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-pink-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-pink-400">
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
              text-gray-900
              tracking-widest
              text-sm
              mb-3
            "
            >
              More
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://github.com/Margotte83/Kryptopixel-marketplace"
                  className="text-gray-600 hover:text-pink-400"
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
              text-gray-900
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
                  className="text-gray-600 hover:text-pink-400"
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
            text-gray-900
          "
          >
            <i className="fas fa-cubes fa-lg text-purple-500"></i>
            <span className="ml-3 text-xl">
              How to use Kryptopixel marketplace?
            </span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Connect your Metamask wallet to use this DApp. Polygon or Fuse
            network is required.
          </p>
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
          <p className="text-green-500 text-sm text-center sm:text-left">
            Kryptopixel Marketplace © 2021 Copyright | Built with ❤️ by :
            <a
              href="https://www.linkedin.com/in/marjorie-ngoupende-dev/"
              className="text-gray-100 ml-1 hover:text-pink-400"
              target="_blank"
            >
              Marjorie Ngoupende
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
