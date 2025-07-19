import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LatestNew = () => {
  const [n, setN] = useState(0);

  const handleAdd = () => {
    if (n == 8) {
      return;
    } else {
      setN((prev) => prev + 1);
    }
  };
  const handleless = () => {
    if (n == 0) {
      return;
    } else {
      setN((prev) => prev - 1);
    }
  };

  const visibleNew = news.slice(n, n + 4);
  console.log(visibleNew);
  return (
    <div className="lg:px-16 p-2 my-20">
      <div className="pb-2 flex items-center justify-between border-b mb-4">
        <div>
          <h2 className=" text-lg font-semibold">Latest News & Events</h2>
          <h5 className="text-sm">From our blog, Forum</h5>
        </div>
        <div className="flex gap-3">
          <IoIosArrowBack
            onClick={handleless}
            className="border text-4xl px-1 rounded cursor-pointer "
          />
          <IoIosArrowForward
            onClick={handleAdd}
            className="border text-4xl px-1 rounded cursor-pointer"
          />
        </div>
      </div>

      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {visibleNew.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <img className="rounded" src={item.image} alt="" />
            <h5 className="text-xs my-2 bg-gray-200 w-fit font-semibold px-2  rounded">
              #{item.tag}
            </h5>
            <h2 className="font-semibold text-sm">{item.title}</h2>
            <div className="flex justify-between text-xs ">
              <h5>{item.date}</h5>
              <h5>{item.estimatedTimeToRead} Mins read</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const news = [
  {
    id: 1,
    image: "https://placehold.co/300x200?text=new1",
    tag: "technology",
    title: "The latest technologies to be used for VR in 2022",
    date: "August 30, 2022",
    estimatedTimeToRead: 4,
  },
  {
    id: 2,
    image: "https://placehold.co/300x200",
    tag: "business",
    title: "Global markets react to new economic policies",
    date: "September 15, 2022",
    estimatedTimeToRead: 6,
  },
  {
    id: 3,
    image: "https://placehold.co/300x200",
    tag: "health",
    title: "Breakthrough in cancer research shows promising results",
    date: "October 5, 2022",
    estimatedTimeToRead: 5,
  },
  {
    id: 4,
    image: "https://placehold.co/300x200?text=new4",
    tag: "sports",
    title: "World Cup 2022: Unexpected team reaches semifinals",
    date: "November 20, 2022",
    estimatedTimeToRead: 3,
  },
  {
    id: 5,
    image: "https://placehold.co/300x200",
    tag: "entertainment",
    title: "Major streaming platform announces price increases",
    date: "December 1, 2022",
    estimatedTimeToRead: 2,
  },
  {
    id: 6,
    image: "https://placehold.co/300x200",
    tag: "science",
    title: "NASA's new telescope reveals stunning cosmic images",
    date: "January 10, 2023",
    estimatedTimeToRead: 7,
  },
  {
    id: 7,
    image: "https://placehold.co/300x200?text=new7",
    tag: "politics",
    title: "Landmark legislation passes after months of debate",
    date: "February 15, 2023",
    estimatedTimeToRead: 5,
  },
  {
    id: 8,
    image: "https://placehold.co/300x200",
    tag: "technology",
    title: "New smartphone breaks sales records in first week",
    date: "March 5, 2023",
    estimatedTimeToRead: 4,
  },
  {
    id: 9,
    image: "https://placehold.co/300x200",
    tag: "environment",
    title: "Renewable energy surpasses coal in electricity generation",
    date: "April 22, 2023",
    estimatedTimeToRead: 6,
  },
  {
    id: 10,
    image: "https://placehold.co/300x200?text=new10",
    tag: "education",
    title: "Universities report record enrollment numbers this year",
    date: "May 10, 2023",
    estimatedTimeToRead: 3,
  },
  {
    id: 11,
    image: "https://placehold.co/300x200",
    tag: "travel",
    title: "New airline routes make international travel more accessible",
    date: "June 15, 2023",
    estimatedTimeToRead: 4,
  },
  {
    id: 12,
    image: "https://placehold.co/300x200?text=new12",
    tag: "food",
    title: "Plant-based meat alternatives gaining mainstream popularity",
    date: "July 5, 2023",
    estimatedTimeToRead: 3,
  },
];

export default LatestNew;
