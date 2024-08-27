import React from 'react'

// type Props = {
//     userTypes: string[]
// }
import docImage from '../../../../assets/images/doc-1.png'

const Login = () => {
    return (
        <div className=" lg:h-screen w-screen flex flex-col items-center  justify-center">
            <div className="flex lg:w-10/12  mx-auto flex-col-reverse  justify-center lg:flex-row  items-center gap-4">
                <div className="images h-screen  flex flex-col items-center justify-center lg:w-3/6 mx-auto ">
                    <div className="image ">
                        <img src={docImage} alt="" className='h-64 md:h-full' />
                    </div>
                    <div className="content">
                        <p className="text-slate-400 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita magni in eum distinctio nisi consectetur beatae quasi! Unde nesciunt dolor veritatis possimus! Hic sint eius unde reiciendis eligendi. Quam ex similique adipisci fugiat at esse veniam hic deserunt ea.
                        </p>
                    </div>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login

export const LoginForm = () => {
    return (
        <>
            <div className="form-content w-full h-screen border-b  lg:w-2/6 mx-auto flex lg:h-full justify-center  flex-col items-center gap-4">
                <div className="flex md:h-full justify-center w-10/12 md:w-5/12 lg:w-4/5 xl:w-3/5 flex-col items-center gap-4">
                    <p className="text-lg font-bold">Welcome Back {/*insert emoji*/}</p>
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
            </div>

        </>
    )

}