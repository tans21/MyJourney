import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-[100vw] h-[100vh] bg-gradient-to-b from-slate-50 to-blue-50">
      <NavBar setShowModal={setShowModal} />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}

      <section className="pt-16 w-full h-full flex flex-col">
        {/* Main Hero Area (Background Image) */}
        <div className="px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-48 h-max">
          <div className="w-full h-150 bg-[url(/sky_background.png)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden">
            {/* Overlay for better text readability */}
            <div className="w-full h-full bg-gradient-to-b from-black/20 via-black/10 to-black/30">
              <div className="p-8 md:p-12 w-full h-full flex flex-col justify-center items-center">
                {/* Main Title */}
                <div className="mb-8 text-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4">
                    Travel Planner
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md max-w-2xl">
                    Discover amazing destinations and plan your perfect journey
                  </p>
                </div>

                {/* Input Section */}
                <div className="w-full max-w-4xl">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="w-full flex flex-col md:flex-row gap-4 items-center">
                      {/* From Section */}
                      <div className="w-full md:flex-1">
                        <div className="hidden md:block mb-2">
                          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            From
                          </label>
                        </div>
                        <input
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
                          placeholder="Enter departure city"
                        />
                      </div>

                      {/* To Section */}
                      <div className="w-full md:flex-1">
                        <div className="hidden md:block mb-2">
                          <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            To
                          </label>
                        </div>
                        <input
                          className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
                          placeholder="Enter destination city"
                        />
                      </div>

                      {/* Search Button */}
                      <div className="w-full md:w-auto mt-2 md:mt-6">
                        <button
                          className="w-full md:w-32 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 active:from-blue-700 active:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                          onClick={null}
                        >
                          <span className="text-white font-semibold text-lg group-hover:scale-105 transition-transform duration-200 inline-block">
                            Search
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;