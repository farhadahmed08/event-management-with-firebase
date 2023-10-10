import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {
  const { eventName, description, picture ,id} = card;

  return (
    <div className="mb-10">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
          <img src={picture} alt="img-blur-shadow" layout="fill" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {eventName}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/services/${id}`}>
          <button
            className="btn btn-accent"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
