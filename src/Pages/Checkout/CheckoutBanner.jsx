import img from '../../assets/images/checkout/checkout.png'
import vector from '../../assets/images/checkout/Vector.png'

const CheckoutBanner = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full ">
            <img src={img} className="w-full rounded-xl" />
            <img className='lg:w-[296px] lg:h-[49px] absolute bottom-0 left-1/3' src={vector} alt="" />
            <h4 className='text-xl font-semibold text-white absolute bottom-[10px] left-[490px]'>Home/Checkout</h4>
            <div className="absolute h-full rounded-xl flex items-center bg-gradient-to-r from-[#111111] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white pl-8 md:pl-24 md:w-[460px] space-y-7'>
                    <h2 className='text-2xl md:text-6xl font-bold leading-tight'>Check Out</h2>
                </div>
            </div>
        </div>
    );
};

export default CheckoutBanner;