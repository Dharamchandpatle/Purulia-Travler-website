import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John McCulling",
    date: "August 28, 2021",
    rating: 5,
    text: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.",
  },
  {
    name: "Kate Berg",
    date: "July 21, 2021",
    rating: 4,
    text: "This is another example of a review text. It might contain feedback or comments that reflect the user experience with the service or product.",
  },
];

const starRating = (rating) => {
  const filledStars = Array.from({ length: rating }, (_, i) => (
    <FaStar key={i} className="text-yellow-400" />
  ));
  const emptyStars = Array.from({ length: 5 - rating }, (_, i) => (
    <FaStar key={i + rating} className="text-gray-300" />
  ));
  return [...filledStars, ...emptyStars];
};

const Review = ({ review }) => (
  <div className="flex flex-col gap-3 py-4 md:py-6">
    <div>
      <span className="block text-sm font-bold">{review.name}</span>
      <span className="block text-sm text-gray-500">{review.date}</span>
    </div>
    <div className="-ml-1 flex gap-0.5">{starRating(review.rating)}</div>
    <p className="text-gray-600">{review.text}</p>
  </div>
);

const ratingCategories = [
  { label: "Cleanliness", rating: 4.5 },
  { label: "Accuracy", rating: 3 },
  { label: "Communication", rating: 3 },
  { label: "Location", rating: 5 },
  { label: "Check-in", rating: 2 },
  { label: "Value", rating: 5 },
];

const RatingsSection = () => (
  <div className="my-5 flex flex-col gap-2 border-t border-b py-5">
    {ratingCategories.map((category) => (
      <div key={category.label} className="flex items-center gap-3">
        <span className="w-32 whitespace-nowrap text-left text-sm text-gray-600">
          {category.label}
        </span>
        <div className="flex h-2 flex-1 overflow-hidden rounded bg-gray-200">
          <span
            className="h-full rounded bg-green-400"
            style={{ width: `${(category.rating / 5) * 100}%` }}
          ></span>
        </div>
      </div>
    ))}
  </div>
);

const ReviewsSection = () => (
  <div className="bg-white lg:px-28 py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div className="rounded-lg border p-4 lg:col-span-1">
          <h2 className="mb-3 text-lg font-bold text-gray-800 lg:text-xl">
            Customer Reviews
          </h2>
          <div className="mb-0.5 flex items-center gap-2">
            <div className="-ml-1 flex gap-0.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <FaStar key={i} className="h-6 w-6 text-yellow-400" />
              ))}
              <FaStar className="h-6 w-6 text-gray-300" />
            </div>
            <span className="text-sm font-semibold">4/5</span>
          </div>
          <span className="block text-sm text-gray-500">
            Based on 27 reviews
          </span>
          <RatingsSection />
          <a
            href="#"
            className="block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Write a review
          </a>
        </div>

        <div className="lg:col-span-2">
          <div className="border-b pb-4 md:pb-6">
            <h2 className="text-lg font-bold text-gray-800 lg:text-xl">
              Top Reviews
            </h2>
          </div>
          <div className="divide-y">
            {reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewsSection;
