import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className="text-center my-14 space-y-4">
                <h4 className="text-orange text-xl font-bold">Service</h4>
                <h2 className="font-bold text-5xl">Our Service Area</h2>
                <p className="text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
                <div className="text-center my-8">
                    <button className="button-outline">More Services</button>
                </div>
        </>
    );
};

export default Services;