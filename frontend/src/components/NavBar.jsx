function NavBar({ setShowModal }) {
  return (
    <nav className="fixed top-0 left-0 z-10 flex w-[100vw] h-16 justify-end-safe">
      {/* LogIn Button */}
      <div className="h-full p-2">
        <button
          className="w-30 h-full rounded-md bg-blue-600 hover:bg-blue-500 active:bg-blue-700 hover:cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <div className="flex justify-center items-center">
            <h1 className="text-white font-sans">Log In</h1>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;