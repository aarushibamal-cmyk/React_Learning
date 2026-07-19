import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div className="w-full max-w-md rounded-3xl border border-pink-200 bg-white/80 p-8 shadow-2xl backdrop-blur-md text-center">
                <h1 className="text-3xl font-bold text-rose-500">
                    Please Login
                </h1>

                <p className="mt-3 text-gray-500">
                    Enter your username and password to continue.
                </p>
            </div>
        )
    } else {
        return (
            <div className="w-full max-w-md rounded-3xl border border-pink-200 bg-white/80 p-8 shadow-2xl backdrop-blur-md text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-4xl">
                    👤
                </div>

                <h1 className="text-3xl font-bold text-purple-700">
                    Welcome!
                </h1>

                <p className="mt-3 text-2xl font-semibold text-indigo-600">
                    {user.userName}
                </p>

                <p className="mt-2 text-gray-500">
                    Glad to have you here.
                </p>
            </div>
        )
    }
}

export default Profile