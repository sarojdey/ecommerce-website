import { FaUserCircle } from "react-icons/fa";
export default function ReviewCard({ review }) {
  return (
    <div className="md:w-full lg:w-2/3 mx-auto bg-white rounded-md shadow-sm border p-10 flex flex-col mb-10">
      <div className="flex items-center border-b mb-3">
        <FaUserCircle className="text-gray-500 text-4xl mr-4" />
        <div className="flex flex-col mb-1">
          <span className="font-bold text-gray-900">{review.username}</span>
          <span className="text-sm text-gray-500 ">
            {new Date(review.createdate).toLocaleDateString()}
          </span>
        </div>
      </div>
      <p className="text-gray-900">{review.message}</p>
    </div>
  );
}
