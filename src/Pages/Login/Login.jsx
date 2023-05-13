import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="rounded-md flex-shrink-0 w-full lg:w-1/2  border-2 ">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='button cursor-pointer' value="Sign In" />
                            </div>
                        </div>
                    </form>
                    <div className='card-body text-center'>
                        <h3 className='text-[18px] font-semibold'>Or Sign In with</h3>
                        <p className='font-semibold'>Have an account?<Link className='text-orange ms-3'>Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;