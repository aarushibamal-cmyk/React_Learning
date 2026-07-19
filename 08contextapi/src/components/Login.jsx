import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }

    return (
        <div className="w-full max-w-md rounded-3xl border border-pink-200 bg-white/80 p-8 shadow-2xl backdrop-blur-md">
            <h2 className="mb-6 text-center text-3xl font-bold text-purple-700">
                Login
            </h2>

            <input
                type="text"
                value={userName}
                placeholder="Username"
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
                className="mb-4 w-full rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
            />

            <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                className="mb-6 w-full rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
            />

            <button
                onClick={handleSubmit}
                className="w-full rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:from-pink-500 hover:to-purple-500 active:scale-95"
            >
                Submit
            </button>
        </div>
    )
}

export default Login