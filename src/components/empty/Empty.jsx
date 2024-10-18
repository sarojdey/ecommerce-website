export default function Empty({ msg }) {
  return (
    <div className="flex justify-center items-center min-h-[80vh] w-full">
      <divflex className="flex flex-col justify-center  items-center">
        <div className="w-56 h-56 flex  items-center justify-center">
          <img
            className="h-full w-full object-contain"
            src="/empty.png"
            alt="404"
          />
        </div>
        <span className="text-3xl font-bold text-gray-900">{msg}</span>
      </divflex>
    </div>
  );
}
