import { useLoaderData } from "react-router-dom";
import CheckoutBanner from "./CheckoutBanner";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, price, title, img } = service;

    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const checkout = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price

        }

        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkout)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Service book successfully',
                        showConfirmButton: false,
                        timer: 1800
                    })
                }
            })
    }
    return (
        <>
            <CheckoutBanner></CheckoutBanner>
            <div className="rounded-md bg-base-200 my-[100px]">
                <div className="card-body md:w-3/4 py-[95px] mx-auto">
                    <form onSubmit={handleCheckout}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <input type="text" name="name" placeholder="First Name" className="input" defaultValue={user?.displayName} />
                            </div>
                            <div className="form-control">
                                <input type="date" name="date" className="input" />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Your Email" defaultValue={user?.email} className="input" />
                            </div>
                            <div className="form-control">
                                <input type="text" defaultValue={'$' + price} placeholder="Due Amount" className="input focus:outline-none" />
                            </div>
                        </div>
                        <div className="form-control mt-6 ">
                            <textarea className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="button" type="submit" value="Order Confirm" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;