/*Page footer with copyright*/

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div
        class="
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
          class="
          flex-grow flex flex-wrap
          md:pl-20
          -mb-10
          md:mt-0
          mt-10
          md:text-left
          text-center
        "
        >
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="
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
            <nav class="list-none mb-10">
              <li>
                <a
                  href="https://polygon.technology/"
                  class="text-gray-600 hover:text-pink-400"
                >
                  Developers
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="
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
            <nav class="list-none mb-10">
              <li>
                <a href="" class="text-gray-600 hover:text-pink-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" class="text-gray-600 hover:text-pink-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="" class="text-gray-600 hover:text-pink-400">
                  Twitter
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="
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
            <nav class="list-none mb-10">
              <li>
                <a
                  href="https://github.com/Margotte83/Kryptopixel-marketplace"
                  class="text-gray-600 hover:text-pink-400"
                >
                  Github
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              class="
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
            <nav class="list-none mb-10">
              <li>
                <a
                  href="https://pixelchain.art/"
                  class="text-gray-600 hover:text-pink-400"
                >
                  PixelChain
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href=""
            class="
            flex
            title-font
            font-medium
            items-center
            md:justify-start
            justify-center
            text-gray-900
          "
          >
            <i class="fas fa-cubes fa-lg text-purple-500"></i>
            <span class="ml-3 text-xl">
              How to use Kryptopixel marketplace?
            </span>
          </a>
          <p class="mt-2 text-sm text-gray-500">
            Connect your Metamask wallet to use this DApp. Polygon or Fuse
            network is required.
          </p>
        </div>
      </div>
      <div class="bg-black">
        <div
          class="
          container
          mx-auto
          py-4
          px-5
          flex flex-wrap flex-col
          sm:flex-row
        "
        >
          <p class="text-green-500 text-sm text-center sm:text-left">
            Kryptopixel Marketplace © 2021 Copyright | Built with ❤️ by :
            <a
              href="https://www.linkedin.com/in/marjorie-ngoupende-dev/"
              class="text-gray-100 ml-1 hover:text-pink-400"
              target="_blank"
            >
              Marjorie Ngoupende
            </a>
          </p>
          <span
            class="
            inline-flex
            sm:ml-auto sm:mt-0
            mt-2
            justify-center
            sm:justify-start
          "
          >
            <a href="" class="text-gray-500">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="" class="ml-3 text-gray-500">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
