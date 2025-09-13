import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <NavBar setShowModal={setShowModal} />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Home;