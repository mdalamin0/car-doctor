import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
               
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully Login',
                    showConfirmButton: false,
                    timer: 1800
                })
               
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })

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
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='button cursor-pointer' value="Login" />
                            </div>
                        </div>
                    </form>
                    
                    <div className='card-body text-center'>
                        <h3 className='text-[18px] font-semibold mb-4'>Or Sign In with</h3>
                        <SocialLogin></SocialLogin>
                        <p className='font-semibold'>New to Car Doctors?<Link to='/signUp' className='text-orange ms-3'>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;