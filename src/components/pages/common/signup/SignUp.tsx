const SignUp = () => {
    return (
        <>
            <div className="h-screen w-screen flex flex-col items-center justify-center">
                <div className="sign-up w-full  md:w-10/12 lg:w-2/6 flex flex-col items-center">
                    <PersonaInformation />
                </div>
            </div>
        </>
    )
}

export default SignUp


const CreateAccount = () => {
    return (
        <>
            <div className="flex  justify-center w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/5 flex-col items-center gap-4">
                <p className="text-lg font-bold">Create account 💻 {/*insert emoji*/}</p>
                <input className="border  p-2 w-full" type="text" placeholder="Email" />
                <input className="border  p-2 w-full" type="password" placeholder="Password" />
                <div className="flex justify-between w-full items-center  ">
                    <div className="checkbox   flex items-center justify-center">
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember" className='text-sm ml-2'>Remember me</label>
                    </div>
                    <div className=" forgot-password flex items-center justify-center">
                        <p className="text-sm ">
                            Forgot Password?
                        </p>
                    </div>
                </div>
                <button className="bg-blue text-white p-2 rounded w-full">Login</button>
            </div>
            <div className="flex justify-center w-full items-center  ">
                <p className="text-sm ">
                    Already have an account?
                </p>
                <p className="text-sm text-blue ml-2">
                    Login
                </p>
            </div>
        </>
    )
}


const PersonaInformation = () => {
    return (
        <>
            <div className="flex justify-center w-10/12 md:w-8/12 lg:w-7/12 xl:w-4/5 flex-col items-center gap-4">
                <p className="text-lg font-bold">Personal Information 🏥</p>
                
                {/* Name Fields */}
                <div className="flex gap-2 justify-between w-full items-center">
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="text" placeholder="First Name" />
                    </div>
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="text" placeholder="Last Name" />
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex  flex-col gap-2 justify-between w-full ">
                    <p className="text-md">Date of Birth</p>
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="date" placeholder="Date of Birth" />
                    </div>
                </div>

                {/* Gender Selection */}
                <div className="flex gap-2 justify-between w-full items-center">
                    <div className="checkbox flex items-center">
                        <input className="mr-2" id="male" type="radio" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div className="checkbox flex items-center">
                        <input className="mr-2" id="female" type="radio" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div className="checkbox flex items-center">
                        <input className="mr-2" id="other" type="radio" name="gender" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="flex gap-2 justify-between w-full items-center">
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="email" placeholder="Email Address" />
                    </div>
                </div>


                {/* Insurance Information */}
                <div className="flex gap-2 justify-between w-full items-center">
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="text" placeholder="Insurance Provider" />
                    </div>
                    <div className="checkbox flex items-center justify-center">
                        <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="text" placeholder="Policy Number" />
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className="flex flex-col gap-2 w-full">
                    <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="text" placeholder="Emergency Contact Name" />
                    <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="tel" placeholder="Emergency Contact Phone" />
                    <input className="border-0 border-b-[1px] border-slate-400 p-2 w-full" type="text" placeholder="Relationship to Patient" />
                </div>

                {/* Submit Button */}
                <button className="bg-blue-600 text-white p-2 rounded w-full">Submit</button>
            </div>
        </>
    );
}
