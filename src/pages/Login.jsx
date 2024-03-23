import { useState } from "react";
import { loginAdmin } from "../Redux/admin-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoLogin from "../assets/Logo-login.svg";
import carBackground from "../assets/background-admin.png";

const Login = () => {
  const [emailAdmin, setEmailAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [isError, setIsError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailAdmin = (e) => {
    setEmailAdmin(e.target.value);
  };

  const handlePasswordAdmin = (e) => {
    setPasswordAdmin(e.target.value);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    dispatch(loginAdmin({ email: emailAdmin, password: passwordAdmin }))
      .unwrap()
      .then((resolve) => {
        console.log(resolve);
        if (resolve) {
          navigate("/");
        }
        // setTimeout(() => {
        //   setShowToast(true);
        // }, 1000);

        setTimeout(() => {
          window.location.reload();
        }, 800);
      })
      .catch((error) => {
        setTimeout(() => {
          setIsError(true);
        }, 1500);
      });
  };

  return (
    <>
      {showToast && (
        <ToastContainer className="p-3" position="top-center">
          <Toast className="d-inline-block m-1" bg="success" onClose={() => setShowToast(false)} delay={3000}>
            <ToastHeader>
              <strong className="me-auto text-dark">Message</strong>
              <small className="text-dark">now</small>
            </ToastHeader>
            <ToastBody className="text-white fw-bold">Login Successful !</ToastBody>
          </Toast>
        </ToastContainer>
      )}
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-8">
          <img className="object-cover h-screen" src={carBackground} alt="background-admin" />
        </div>
        <div className="col-span-4 px-4 py-8 lg:py-24">
          <div className="max-w-md mx-auto bg-white rounded-lg p-8">
            <div className="text-center">
              <img src={logoLogin} alt="Sign-In-Admin-BCR" />
              <h1 className="font-bold mt-5 text-2xl" data-testid="title-Login">
                Welcome, Admin BCR
              </h1>
              {isError && <div className="text-red-600">Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</div>}
            </div>
            <form onSubmit={handleAdminLogin} className="mt-8">
              <div className="mt-4">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={handleEmailAdmin}
                  placeholder="Contoh: kingemyu@gmail.co.uk"
                  className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={handlePasswordAdmin}
                  minLength="6"
                  placeholder="6+ character"
                  className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button type="submit" className="w-full px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
