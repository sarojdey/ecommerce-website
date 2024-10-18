export default function Empty({ msg }) {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <divflex className=" flex-col justify-center  items-center">
        <div className="w-56 h-56 flex  items-center mx-auto justify-center">
          <img
            className="h-full w-full object-contain"
            src="/empty.png"
            alt="404"
          />
        </div>
        <span className="text-3xl mx-auto font-bold text-gray-900">{msg}</span>
      </divflex>
    </div>
  );
}
