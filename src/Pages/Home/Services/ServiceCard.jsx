import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="card w-96 shadow-md">
            <figure className="px-5 pt-8">
                <img src={img} alt="" className="rounded-md h-[208px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-slate-700">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <p className="text-orange font-bold">Price: {price}</p>
                    <button className="text-orange text-sm"> <FaArrowRight></FaArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;