import { useState } from "react";
const LoginContainerForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    state: "Login"
  });
  const handleUserNameFieldChange = (event) => {
    setValues({ ...values, username: event.target.value });
  };
  const handlePasswordFieldChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div id="LoginContainerForm">
      <div className="container mx-auto">
        <form className="">
          <div className="flex flex-col my-4 text-center">
            <input
              type="text"
              value={values.email}
              autoFocus="true"
              onChange={handleUserNameFieldChange}
              id="LoginFormUsernameField"
              className="w-3/4 font-normal placeholder:text-slate-600 text-slate-600 border-2 border-indigo-400 rounded-md focus:ring-2 focus:ring-indigo-400 transition outline-none bg-transparent p-2 mx-auto"
              placeholder="Username"
            />
            {submitted && !values.username ? (
              <span className="text-red-400 my-2">Please Enter a Username</span>
            ) : null}
          </div>
          <div className="flex my-4 flex-col text-center">
            <input
              type="password"
              value={values.password}
              id="LoginFormPasswordField"
              onChange={handlePasswordFieldChange}
              className="w-3/4 font-normal placeholder:text-slate-600 text-slate-600 border-2 border-indigo-400 rounded-md ease-in-out focus:ring-2 focus:ring-indigo-400 transition outline-none bg-transparent p-2 mx-auto"
              placeholder="Password"
            />
            {submitted && !values.password ? (
              <span className="text-red-400 my-2">Please Enter a Password</span>
            ) : null}
          </div>
          <div className="flex my-3 mt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="mx-auto bg-indigo-500 rounded-md text-lg hover:bg-indigo-600 transition ease-in text-white py-2 px-4"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginContainerForm;
