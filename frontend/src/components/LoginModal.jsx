import { useState } from "react";

function LoginModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RequestLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);

      // 토큰 저장 (ex. localStorage)
      localStorage.setItem("token", data.token);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const RequestRegister = async () => {
    try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Register failed");
    }

    const data = await response.json();
    console.log("Register success:", data);

  } catch (error) {
    console.error("Error:", error);
  }
  };

  return (
    <>
      {/* background mask */}
      <div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-100 bg-[rgba(0,0,0,0.4)]"
        onClick={onClose}
      >
        {/* Login Area */}
        <div
          className="w-70 h-100 sm:w-100 sm:h-100 p-5 rounded-xl flex flex-col bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Title */}
          <div className="mb-2 w-full basis-15 flex justify-center items-center">
            <h1 className="text-4xl font-sans font-semibold">
              {isLogin ? "Log In" : "Register"}
            </h1>
          </div>
          {/* Input Section */}
          <div className="w-full basis-50 p-2 flex flex-col">
            {/* Name Section */}
            {!isLogin &&
              <div className="w-full ">
                <div className="w-full h-9/20 flex items-center">
                  <h1 className="text-2xl">User Name</h1>
                </div>
                <div className="w-full h-11/20 py-2">
                  <input
                    className="w-full h-full p-1 border rounded-md"
                    placeholder="Enter user name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            }
            {/* Email Section */}
            <div className="w-full ">
              <div className="w-full h-9/20 flex items-center">
                <h1 className="text-2xl">E-mail</h1>
              </div>
              <div className="w-full h-11/20 py-2">
                <input
                  className="w-full h-full p-1 border rounded-md"
                  placeholder="Enter e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Password Section */}
            <div className="w-full ">
              <div className="w-full h-9/20 flex items-center">
                <h1 className="text-2xl">Password</h1>
              </div>
              <div className="w-full h-11/20 py-2">
                <input
                  className="w-full h-full p-1 border rounded-md"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Login button */}
          <div className="w-full basis-15 flex justify-center items-center">
            <button
              className="w-25 h-10 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 hover:cursor-pointer"
              onClick={isLogin ? RequestLogin : RequestRegister}
            >
              <h1 className="text-white font-sans">
                {isLogin ? "Log In" : "Register"}
              </h1>
            </button>
          </div>
          {/* footer */}
          <div className="w-full basis-10 p-2 flex justify-end-safe items-center">
            <h1
              className="text-blue-700 hover:cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "register here" : "login here"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;