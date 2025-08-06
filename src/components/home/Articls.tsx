import { Link } from "react-router-dom";

const Articals = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4  gap-4 lg:mx-16 items-center my-10 cursor-pointer">
      {/** the first one */}

      <div className=" flex justify-between  flex-col border  relative h-full">
        <div className="z-10 p-10">
          <h2 className="text-2xl font-semibold">Lorem ipsum </h2>
          <h5 className="text-sm font-semibold">met consecte</h5>
          <p className="text-xs mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem hic rerum ut, ex dicta architecto recusandae, magnam
            velit molestiae, explicabo nemo
          </p>
          <Link
            className="bg-white rounded text-xs px-3 py-1 mt-2 w-fit block "
            to={"#"}
          >
            Voir Plus
          </Link>
        </div>
        <div className="top-0 left-0 bottom-0 right-0 absolute">
          <img
            src="https://placehold.co/300x100"
            className=" object-cover w-full h-full z-0"
            alt=""
          />
        </div>
      </div>

      {/* the second componant*/}

      <div className=" flex justify-between  flex-col border  relative col-span-2 h-full">
        <div className="z-10 p-10">
          <h2 className="text-2xl font-semibold">Lorem ipsum </h2>
          <h5 className="text-sm font-semibold">met consecte</h5>
          <p className="text-xs mt-2 w-[50%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem hic rerum ut, ex dicta architecto recusandae, magnam
            velit molestiae, explicabo nemo
          </p>
          <Link
            className="bg-white rounded text-xs px-3 py-1 mt-2 w-fit block "
            to={"#"}
          >
            Voir Plus
          </Link>
        </div>
        <div className="top-0 left-0 bottom-0 right-0 absolute">
          <img
            src="https://placehold.co/300x100"
            className=" object-cover w-full h-full z-0"
            alt=""
          />
        </div>
      </div>
      {/*the third comp*/}
      <div className=" flex justify-between  flex-col border  relative h-full">
        <div className="z-10 p-10">
          <h2 className="text-2xl font-semibold">Lorem ipsum </h2>
          <h5 className="text-sm font-semibold">met consecte</h5>
          <p className="text-xs mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem hic rerum ut, ex dicta architecto recusandae, magnam
            velit molestiae, explicabo nemo
          </p>
          <Link
            className="bg-white rounded text-xs px-3 py-1 mt-2 w-fit block "
            to={"#"}
          >
            Voir Plus
          </Link>
        </div>
        <div className="top-0 left-0 bottom-0 right-0 absolute">
          <img
            src="https://placehold.co/300x100"
            className=" object-cover w-full h-full z-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Articals;
