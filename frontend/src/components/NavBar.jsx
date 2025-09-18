function NavBar({ setShowModal }) {
  return (
    <nav className="fixed top-0 left-0 z-10 flex w-[100vw] h-16 justify-end-safe ">
      {/* LogIn Button */}
      <div className="h-full p-2 flex justify-center items-center">
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 hover:cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <span className="text-sm">Log In</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;