import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="border-2 rounded-md">
            <figure className="card-body pt-5">
                <img src={img} alt="" className="rounded-md h-[208px] w-full" />
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