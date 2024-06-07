import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    return (
      
        <section className='text-gray-600 bg-white body-font w-full h-screen flex flex-col mt-10 items-center'>
            <div className='lg:w-2/6 md:w-1/2 bg-gray-200 bg-opacity-50 rounded-lg p-8 flex flex-col w-8/12 mt-10 md:mt-0'>
                <h2 className='text-gray-900 text-lg font-medium title-font mb-4'>Login</h2>
                    <form onSubmit={loginUser}>
                        <div className='relative mb-4'>
                            <label for='email' className='leading-7 text-sm text-gray-600'>Email</label>
                            <input type='email' name='email' id='email' className='w-full bg-white rounded border focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
                        </div>

                        <div className='relative mb-4'>
                            <label for='password' className='leading-7 text-sm text-gray-600'>Palavra-passe</label>
                            <input type='password' name='password' id='password' className='w-full bg-white rounded border focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'/>
                        </div>

                        <button type='submit' className='text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded md:text-lg'>Login</button>
                    </form>
            </div>
        </section>


    )
}

export default LoginPage