import "./champions.css";
import LolAPI from "../api/lolAPI";

function Champions() {
  let champs = LolAPI();
  let champArray = champs.data.entries()
  debugger
  console.log(champArray);
  return (
    <div className="Champions container mx-auto p-2 text-gray-800">
      <div class="relative  md:mr-0 md:block">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="email-adress-icon"
          class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm "
          placeholder="Search a champion..."
        />
      </div>

      <div className="mt-2">
        <div className="py-4">
          <h1 className="font-bold text-3xl">Pick a champion</h1>
        </div>

        <div className="cards-container grid gap-x-4 gap-y-4 grid-cols-4">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>;
        </div>
      </div>
    </div>
  );
}
export default Champions;
