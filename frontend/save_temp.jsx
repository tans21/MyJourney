import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isResult, setIsResult] = useState(false);

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <NavBar setShowModal={setShowModal} />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}

      <section className="pt-16 w-full h-full flex flex-col">

        {/* Main Title Area */}
        <div className="px-10 sm:px-15 md:px-25 lg:px-50 2xl:px-100 h-max">
          <div className="w-full h-20 md:h-25 flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Travel Planner</h1>
          </div>
        </div>

        {/* Input Area */}
        <div className="px-10 sm:px-15 md:px-25 lg:px-50 2xl:px-100 h-max mb-2 md:mb-5">
          <div className="w-full h-45 md:h-20 p-2 flex flex-col md:flex-row gap-2 items-center">
            <div className="hidden md:block basis-20 lg:basis-40">
              <h1 className="text-center">From</h1>
            </div>
            <input
              className="w-full h-12 p-2 border border-gray-600 rounded-md"
              placeholder="from"
            />
            <div className="hidden md:block basis-20 lg:basis-40">
              <h1 className="text-center">To</h1>
            </div>
            <input
              className="w-full h-12 p-2 border border-gray-600 rounded-md"
              placeholder="to"
            />
            <div className="w-full md:w-max h-12 flex justify-center items-center">
              <button
                className="w-20 h-10 md:h-12 rounded-md bg-blue-600 hover:bg-blue-500 active:bg-blue-700 hover:cursor-pointer"
                onClick={null}
              >
                <h1 className="text-white">Search</h1>
              </button>
            </div>
          </div>
        </div>

        {/* Result Area */}
        <div className="px-10 sm:px-15 md:px-25 lg:px-50 2xl:px-100 h-max flex flex-col">

          {/* Result 1: Distance */}
          <div className="w-full h-10 md:h-15 flex justify-center items-center bg-amber-200">
            <h1 className="text-xl font-semibold">Distance : 100km</h1>
          </div>

          <div className="w-full h-max my-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            {/* Result 2: Itinerary */}
            <div className="w-full h-60 p-2 flex flex-col bg-amber-200">
              {/* Itinerary Title */}
              <div className="w-full">
                <h1 className="text-xl font-semibold">Itinerary for you</h1>
              </div>
              {/* Content */}
              <div className="w-full p-2 grow-1 flex flex-col gap-2">
                <div className="w-full grow-1 flex gap-1">
                  <div>
                    <h1 className="font-semibold">Day 1:</h1>
                  </div>
                  <div className="grow-1">
                    <h1>Visit Taj Mahal, Agra Fort</h1>
                  </div>
                </div>
                <div className="w-full grow-1 flex gap-1">
                  <div>
                    <h1 className="font-semibold">Day 2:</h1>
                  </div>
                  <div className="grow-1">
                    <h1>Explore Fatehpur Sikri</h1>
                  </div>
                </div>
                <div className="w-full grow-1 flex gap-1">
                  <div>
                    <h1 className="font-semibold">Day 3:</h1>
                  </div>
                  <div className="grow-1">
                    <h1>Shopping and local cuisine tour</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Result 3: Tips */}
            <div className="w-full h-60 md:h-120 bg-amber-200">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;