
function Login({
    login
}) {

    return (
        <form className='flex justify-center items-center h-screen w-screen bg-black border-2 border-blue-500 '>
            <h1>Login</h1>
            <button
                onClick={() => { login() }}
                type='button'
                className='bg-gray-900 px-4 py-2 rounded-lg text-amber-50 cursor-pointer font-medium flex items-center mt-4 px-auto'
            >
                <h1 className="flex gap-4" >
                    <img className="w-8 h-8 " src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg" alt="google" />
                    <span className="text-xl">
                        Sign in with Google
                    </span>
                </h1>
            </button>

        </form>
    )
}

export default Login
