import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    // recived authinfo data
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    console.log("state in the location login page", location.state);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    // form handle
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // user sign in
        signIn(email, password).then((res) => {
            const user = res.user;
            console.log(user);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Sign In Sucessfully",
                showConfirmButton: false,
                timer: 1500
            });
        });
        navigate(from, { replace: true });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };

    return (
        <>
            <Helmet>
                <title>BISTRO BOSS | SIGN IN</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                    </div>
                    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        {/* login form */}
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onBlur={handleValidateCaptcha}
                                    type="text"
                                    name="captcha"
                                    placeholder="Type the captcha above"
                                    className="input input-bordered"
                                    required
                                />
                                <button

                                    className="btn btn-outline btn-xs mt-2"
                                >
                                    Validate
                                </button>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    disabled={disabled}
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Log In"
                                />
                            </div>
                        </form>
                        {/* SignUp page toggle */}
                        <div className="text-center p-5">
                            <p>
                                <small>
                                    New Here?{" "}
                                    <Link to="/signup" className="link-hover">
                                        {" "}
                                        Create an account
                                    </Link>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
