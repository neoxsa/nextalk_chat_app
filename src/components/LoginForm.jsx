import { useDispatch } from "react-redux";
import {setSession} from "../features/sessionSlice.js";

function LoginForm({
    login,
    session
}) {

    const dispatch = useDispatch();

    const setSessionHandler = async() => {
        dispatch(setSession(session));
    }

    return (
            <div className="bg-gray-800 p-7 rounded-lg shadow-lg shadow-blue-900 justify-center items-center flex flex-col">
                <h1 className="text-3xl font-medium ">Login</h1>
                <p className="mt-4" >Not registered? <a href="#" className="text-blue-500 underline ">Create an account</a></p>
                <form
                    className='flex flex-col gap-4 my-4'
                >
                    <div className="flex flex-col gap-5">
                        <label name="email" >
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-64 p-2 rounded-lg text-white bg-gray-700 border-2 border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                        <label name="password">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-64 p-2 rounded-lg text-white bg-gray-700 border-2 border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className='bg-blue-500 px-4 py-2 rounded-lg text-amber-50 cursor-pointer font-medium flex items-center mt-4 px-auto justify-center w-full'
                    >
                        Submit
                    </button>
                </form>

                <h2 className="text-xl">or</h2>

                <button
                    onClick={() => { login(); setSessionHandler() }}
                    type='button'
                    className='bg-gray-900 px-4 py-2 rounded-lg text-amber-50 cursor-pointer font-medium flex items-center mt-4 px-auto'
                >
                    <h1 className="flex gap-4" >
                        <img className="w-6 h-6 " src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg" alt="google" />
                        <span className="text-lg">
                            Sign in with Google
                        </span>
                    </h1>
                </button>

            </div>
    )
}

export default LoginForm
