const Services = () => {
  return (
    <div className="mx-1 lg:mx-16 my-16  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex p-2 gap-2 border text-black/90 rounded hover:bg-gray-100 cursor-pointer"
        >
          <img src={service.url} alt="service type" />
          <div className="flex flex-col justify-center gap-2">
            <h2 className="font-bold">{service.name}</h2>
            <h5 className="text-xs text-blue-800">{service.detail}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

const services = [
  {
    url: "https://placehold.co/70x70",
    name: "Free Delevery",
    detail: "From All orders",
  },
  {
    url: "https://placehold.co/70x70",
    name: "Support 24/7",
    detail: "shop with an expert",
  },
  {
    url: "https://placehold.co/70x70",
    name: "Gift voucher",
    detail: "Refer a friend",
  },
  {
    url: "https://placehold.co/70x70",
    name: "Return & Refund",
    detail: "Free return over $200",
  },
  {
    url: "https://placehold.co/70x70",
    name: "Secure Paiment",
    detail: "100% Protected",
  },
];
export default Services;
