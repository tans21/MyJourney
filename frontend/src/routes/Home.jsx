import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [heroHeight, setHeroHeight] = useState("150");

  const OnClickSearch = () => {
    setHeroHeight("max");
    setShowResult(true);
  };

  return (
    <div className="relative w-[100vw] h-[100vh] bg-gradient-to-b from-slate-50 to-blue-50">
      <NavBar setShowModal={setShowModal} />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}

      <section className="pt-16 w-full h-full flex flex-col overflow-y-auto">
        {/* Main Hero Area (Background Image) */}
        <div className="px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-48 h-max">
          <div className={`w-full h-${heroHeight} bg-[url(/sky_background.png)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out`}>
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
                          onClick={OnClickSearch}
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

        {/* Search Result (Itinerary & Travel Tips) */}
        {showResult &&
          <div className="px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-48 my-10 h-max animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Result 1: Itinerary */}
            <div className="w-full h-max flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              {/* Title */}
              <div className="w-full p-6 flex justify-center items-center bg-gradient-to-r from-slate-100 to-blue-100 border-b border-slate-300">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-700 tracking-wide">
                  Your Itinerary
                </h1>
              </div>
              <div className="w-full p-6 flex flex-col gap-4">
                {/* Itinerary Items */}
                <div className="border-2 border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Day #n */}
                  <div className="md:w-24 flex-shrink-0">
                    <div className="bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-lg p-3 text-center shadow-md">
                      <h1 className="font-bold text-lg">Day 1</h1>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      Explore the historic downtown district and visit local museums
                    </h1>
                  </div>
                  {/* picture placeholder */}
                  <div className="w-full md:w-32 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full opacity-50"></div>
                  </div>
                </div>

                <div className="border-2 border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Day #n */}
                  <div className="md:w-24 flex-shrink-0">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-3 text-center shadow-md">
                      <h1 className="font-bold text-lg">Day 2</h1>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      Nature trails and scenic viewpoints with photography opportunities
                    </h1>
                  </div>
                  {/* picture placeholder */}
                  <div className="w-full md:w-32 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full opacity-50"></div>
                  </div>
                </div>

                <div className="border-2 border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Day #n */}
                  <div className="md:w-24 flex-shrink-0">
                    <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-lg p-3 text-center shadow-md">
                      <h1 className="font-bold text-lg">Day 3</h1>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      Cultural experiences and local cuisine tasting tour
                    </h1>
                  </div>
                  {/* picture placeholder */}
                  <div className="w-full md:w-32 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result 2: Travel Tips */}
            <div className="mt-10 w-full h-max flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              {/* Title */}
              <div className="w-full p-6 flex justify-center items-center bg-gradient-to-r from-slate-100 to-blue-100 border-b border-slate-300">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-700 tracking-wide">
                  Travel Tips
                </h1>
              </div>
              <div className="w-full p-6 flex flex-col gap-4">
                <div className="border-2 border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      Best time to visit is early morning for Taj Mahal
                    </h1>
                  </div>
                </div>
                <div className="border-2 border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      Carry water bottles as weather can be hot
                    </h1>
                  </div>
                </div>
                <div className="border-2 border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-4 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <h1 className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      Try Mughlai cuisine at local restaurants
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {/* Reset Button */}
        {showResult &&
          <div className="px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-48 h-max">
            <div className="mt-10 mb-20 flex justify-center items-center">
              <button
                className="w-full md:w-32 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 active:from-blue-700 active:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                onClick={() => {
                  setHeroHeight("150");
                  setShowResult(false);
                }}
              >
                <span className="text-white font-semibold text-lg group-hover:scale-105 transition-transform duration-200 inline-block">
                  Reset
                </span>
              </button>
            </div>
          </div>
        }
      </section>
    </div>
  );
}

export default Home;