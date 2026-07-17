import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(9);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) {
      str += "0123456789";
    }
    if (isCharacter) {
      str += "!@#$%^&*(){}:<>?/.,';][~";
    }
    for (let i = 1; i <= length; i++) {
      // was: Math.random() * str.length + 1
      // that let the index equal str.length (out of range -> empty char)
      // and it could never land on index 0, so drop the "+ 1"
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [isNumber, isCharacter, length, setPassword])/*these are dependencies on which function depends */
  // we will use callBack  its a react hook that let us cache a function definition between re-renders

  useEffect(() => {
    passwordGenerator()
  }, [length, isCharacter, isNumber, passwordGenerator])


  const refhook = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    refhook.current?.select() // it creates a blue selector on password
    // refhook.current?.setSelectionRange(0,3) // it shows only blue region from 0 to 3
    window.navigator.clipboard.writeText(password);
  }, [password])



  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-lg font-semibold text-white">
          Password generator
        </h1>

        <div className="flex items-center gap-x-2 mb-6">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={refhook}
            className="flex-1 min-w-0 rounded-lg border-none bg-white px-4 py-3 text-base text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="outline-none bg-blue-700 hover:bg-blue-600 text-white px-4 py-3 shrink-0 rounded-lg"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-y-4 text-sm text-white">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer flex-1"
              onChange={(e) => { setLength(Number(e.target.value)) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={isNumber}
                id="numberInput"
                onChange={() => {
                  setIsNumber((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={isCharacter}
                id="characterInput"
                onChange={() => {
                  setIsCharacter((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App