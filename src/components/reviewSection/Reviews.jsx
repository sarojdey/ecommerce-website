import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews }) {
  return (
    <div className=" py-5 px-5 sm:px-10">
      <h3 className="md:w-full lg:w-2/3 mx-auto text-xl font-bold text-gray-900 mb-4">
        Reviews
      </h3>
      {reviews?.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  );
}
