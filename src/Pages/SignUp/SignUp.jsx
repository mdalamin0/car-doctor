import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);


    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email)

        createUser(email, password)
        .then(() => {
            // const user = result.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'successfully Sign Up',
                showConfirmButton: false,
                timer: 1800
            })
            form.reset()
        })
        .catch(error => {
            console.log(error.message)
        })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="rounded-md flex-shrink-0 w-full lg:w-1/2  border-2 ">
                    <form onSubmit={handleSignUP}>
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='button cursor-pointer' value="Sign Up" />
                            </div>
                        </div>
                    </form>
                    <div className='card-body text-center'>
                        <h3 className='text-[18px] font-semibold'>Or Sign In with</h3>
                        <p className='font-semibold'>Already have an account?<Link to='/login' className='text-orange ms-3'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;