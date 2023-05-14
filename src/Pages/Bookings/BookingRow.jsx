import { HiOutlineCheckCircle, HiXCircle } from "react-icons/hi";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, img, price, date, status } = booking;


    return (
        <tr>
            <th>
                <label className="text-3xl cursor-pointer">
                    <HiXCircle onClick={() => handleDelete(_id)}></HiXCircle>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="font-semibold text-slate-600">
                ${price}
            </td>
            <td className="font-semibold text-slate-600">
                {date}
            </td>
            <th>
                {
                    status === 'confirm' ? <div className="flex items-center"><span className="font-bold text-green-700">Confirmed</span> <HiOutlineCheckCircle className="text-2xl text-green-700 ms-2"></HiOutlineCheckCircle> </div> :
                        <button onClick={() => handleBookingConfirm(_id)} className="button ">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;