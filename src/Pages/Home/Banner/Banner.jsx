// import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div className="carousel w-full md:h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-8 md:pl-24 md:w-[460px] space-y-7'>
                        <h2 className='text-2xl md:text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="button me-5">Discover More</button>
                            <button className="px-[22px] py-[13px] text-white rounded-md font-semibold border ">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5"> <FaArrowLeft></FaArrowLeft> </a>
                    <a href="#slide2" className="btn btn-circle"> <FaArrowRight></FaArrowRight> </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-24 w-[460px] space-y-7'>
                        <h2 className='text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="button me-5">Discover More</button>
                            <button className="px-[22px] py-[13px] text-white rounded-md font-semibold border ">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5"> <FaArrowLeft></FaArrowLeft> </a>
                    <a href="#slide3" className="btn btn-circle bg-orange"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-24 w-[460px] space-y-7'>
                        <h2 className='text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="button me-5">Discover More</button>
                            <button className="px-[22px] py-[13px] text-white rounded-md font-semibold border ">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5"> <FaArrowLeft></FaArrowLeft> </a>
                    <a href="#slide4" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white pl-24 w-[460px] space-y-7'>
                        <h2 className='text-6xl font-bold leading-tight'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form </p>
                        <div>
                            <button className="button me-5">Discover More</button>
                            <button className="px-[22px] py-[13px] text-white rounded-md font-semibold border ">Latest Project</button>
                        </div>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;