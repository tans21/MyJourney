import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <NavBar setShowModal={setShowModal} />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
      <section className="pt-16 w-full h-full flex flex-col">
        {/* Main Title Area */}
        <div className="px-10 sm:px-15 md:px-25 lg:px-50 2xl:px-100 h-max">
          <div className="w-full h-20 md:h-30 flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Travel Planner</h1>
          </div>
        </div>
        {/* Input Area */}
        <div className="px-10 sm:px-15 md:px-25 lg:px-50 2xl:px-100 h-max my-5">
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
        <div>

        </div>
      </section>
    </div>
  );
}

export default Home;