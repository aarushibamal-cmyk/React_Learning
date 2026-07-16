import React, { use } from 'react'

function Cards({username = "Clara" ,age}) {
    console.log(username);
    
    return (
        <div>
            <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
                <div>
                    <img
                        className="size-48 shadow-xl rounded-md"
                        src="https://i.pinimg.com/1200x/49/e3/94/49e3944c434e17c1af73dcaee236f51a.jpg"
                        alt="Class Warfare"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <span className="text-2xl font-medium">
                       {username}
                    </span>

                    <span className="font-medium text-sky-500">
                        {age}
                    </span>

                    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <span>No. 4</span>
                        <span>·</span>
                        <span>2025</span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Cards

