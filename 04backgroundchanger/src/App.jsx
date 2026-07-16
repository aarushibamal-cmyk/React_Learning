import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="fixed inset-0 flex items-end justify-center px-6 py-10"
      style={{ backgroundColor: color }}
    >
      <div
       className="flex flex-wrap justify-center items-center gap-5 w-full max-w-7xl h-16 mb-8 rounded-xl bg-white px-8 shadow-2xl"
      >
        <button onClick={()=> setColor("green")} className="min-w-28 rounded-full bg-green-600 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Green
        </button>

        <button onClick={()=>{setColor("blue")}} className="min-w-28 rounded-full bg-blue-600 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Blue
        </button>

        <button onClick={()=>{setColor("Olive")}} className="min-w-28 rounded-full bg-lime-700 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Olive
        </button>

        <button onClick={()=>{setColor("gray")}} className="min-w-28 rounded-full bg-gray-600 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Gray
        </button>

        <button onClick={()=> {setColor("yellow")}} className="min-w-28 rounded-full bg-yellow-400 px-7 py-3 text-lg font-semibold text-black shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Yellow
        </button>

        <button onClick={()=> {setColor("pink")}} className="min-w-28 rounded-full bg-pink-500 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Pink
        </button>

        <button onClick={()=>setColor("purple")} className="min-w-28 rounded-full bg-purple-600 px-7 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
          Purple
        </button>
      </div>
    </div>
  )
}

export default App