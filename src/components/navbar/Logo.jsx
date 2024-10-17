import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/");
      }}
      className="flex  items-center space-x-3"
    >
      <div className="text-2xl h-7 w-7 block text-gray-700">
        <img className="h-full w-full " src="/headphones.png" alt="logo" />
      </div>
      <h1 className="text-2xl font-bold text-black">ECW</h1>
    </button>
  );
}
