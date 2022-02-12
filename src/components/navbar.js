
import "./navbar.css";

import Champions from "./champions";

function Navbar() {
  const toggleButton = (e) => {
    e.preventDefault()
    let responsiveMenu = document.getElementById('mobile-menu')
    responsiveMenu.classList.toggle('hidden');
  }
  return (
   <>


    <div className="Navbar font-sans text-white ">
      <nav className=" flex flex-wrap justify-between items-center mx-auto bg-gray-800 p-4">
        <div className="">
          <h1 className="font-bold text-3xl text-white hover:text-gray-300">
            <a href="">LoL APP</a>
          </h1>
        </div>
        <button
          onClick={toggleButton}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
              >
                Champions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
              >
                Follow me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="renderedComponent">
        <Champions/>
      </div>
    </div>
    </>
  );
}

export default Navbar;
