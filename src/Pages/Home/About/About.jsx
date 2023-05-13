import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 lg:h-96 rounded-lg  " />
                    <img src={parts} className="w-1/2 rounded-lg  absolute top-1/2
                     right-16 border-6 border-white" />
                </div>
                <div className="mt-[100px] lg:w-1/2 pe-10 ">
                    <h3 className='text-xl text-[#FF3811] font-semibold mb-5'>About Us</h3>
                    <h1 className="text-5xl font-bold leading-tight ">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="button ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;