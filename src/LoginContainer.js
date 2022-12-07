import LoginContainerForm from "./LoginContainerForm";
const LoginContainer = () => {
  return (
    <div className="max-sm:w-screen w-2/4 backdrop-blur-sm mx-auto mt-20 rounded-xl bg- max-sm:mt-0 max-sm:rounded-none max-sm:h-auto p-2 bg-white/30">
      <div className="p-2 text-center text-2xl text-indigo-500">
        <i class="fa-brands animate-pulse fa-3x fa-react"></i>
      </div>
      <div>
        <LoginContainerForm />
      </div>
    </div>
  );
};
export default LoginContainer;
